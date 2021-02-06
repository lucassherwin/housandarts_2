import React, { useState } from 'react'
import {storage, db} from "../firebase/firebase"

export default function UploadPage() {
  // handle images
  const allInputs = {imgUrl: ''};
  const [imageAsFile, setImageAsFile] = useState('');
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  // handle text
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  // retrieve data
  const [posts, setPosts] = useState([]);

  const handleImageAsFile = (event) => {
    const image = event.target.files[0];
    setImageAsFile(imageFile => image);
  }

  const getPosts = async (event) => {
    event.preventDefault();
    // console.log('get posts')
    // select the 'posts' collection
    const response = db.collection('posts');
    // gets the data from posts collection
    const data = await response.get();

    data.docs.forEach(post => {
      setPosts([...posts, post.data()])
      console.log(posts)
    })

    // console.log(data.docs)
  }

  const uploadImage = (event) => {
    event.preventDefault();
    if(imageAsFile === '' )
    {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`);
    }

    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
    
    db.settings({
      timestampsInSnapshots: true
    });

    uploadTask.on('state_changed', 
    (snapShot) => {
      // takes a snap shot of the process as it is happening
      console.log('here', snapShot)
    }, (err) => {
      // catches the errors
      console.log(err)
    }, () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      storage.ref('images').child(imageAsFile.name).getDownloadURL()
        .then(fireBaseUrl => {
          // console.log('test', fireBaseUrl) this is the img url
          setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
        
          const postRef = db.collection('posts').add({
            title: title,
            description: desc,
            url: fireBaseUrl
          })
        })
      })
  }

  // const handleUpload = async (event) => {
  //   event.preventDefault();

  //   let img_url = await uploadImage();
  //   // console.log(img_url);
  // }

  return (
    <div>
      <form onSubmit={uploadImage}>
        <input type='file' onChange={handleImageAsFile} />
        <input type='text' onChange={(event) => setTitle(event.target.value)} name='title' placeholder='Enter a title' value={title}  />
        <input type='text' onChange={(event) => setDesc(event.target.value)} name='desc' placeholder='Enter a description' value={desc} />
        <button>Upload</button>
      </form>
      <button onClick={getPosts}>Get posts</button>
      {
        posts ? posts.map(post => (
          <div key={post.title}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <img src={post.url} alt={post.title} />
          </div>
        ))
        : null
      }
    </div>
  )
}

// <img src={imageAsUrl.imgUrl} alt='image' />
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

  console.log(imageAsFile)
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
      console.log(post.data())
    })

    // console.log(data.docs)
  }

  const handleFirebaseUpload = (event) => {
    event.preventDefault();
    if(imageAsFile === '' )
    {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`);
    }

    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)

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
          setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
      })
    })
  }

  const handleUpload = (event) => {
    event.preventDefault();

    // handleFirebaseUpload();
    
    console.log(title, desc);

    db.settings({
      timestampsInSnapshots: true
    });

    const postRef = db.collection('posts').add({
      title: title,
      description: desc
    })

    // get image url from handleFirebaseUpload

    // take that image url and make a new post in firestore with image url, title, description
  }

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type='file' onChange={handleImageAsFile} />
        <button>Upload</button>
        <input type='text' onChange={(event) => setTitle(event.target.value)} name='title' placeholder='Enter a title' value={title}  />
        <input type='text' onChange={(event) => setDesc(event.target.value)} name='desc' placeholder='Enter a description' value={desc} />
      </form>
      <img src={imageAsUrl.imgUrl} alt='image' />
      <button onClick={getPosts}>Get posts</button>
      {
        posts ? posts.map(post => (
          <div>
            <h1>{post.title}</h1>
          </div>
        ))
        : null
      }
    </div>
  )
}

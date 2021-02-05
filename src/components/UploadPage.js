import React, { useState } from 'react'
import {storage} from "../firebase/firebase"

export default function UploadPage() {
  const allInputs = {imgUrl: ''}
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)

  console.log(imageAsFile)
  const handleImageAsFile = (event) => {
    const image = event.target.files[0];
    setImageAsFile(imageFile => image);
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

  return (
    <div>
      <form onSubmit={handleFirebaseUpload}>
        <input type='file' onChange={handleImageAsFile} />
        <button>Upload</button>
      </form>
      <img src={imageAsUrl.imgUrl} alt='image' />
    </div>
  )
}

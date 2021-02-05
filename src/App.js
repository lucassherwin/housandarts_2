import React from 'react'
import axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/storage'
import UploadPage from './components/UploadPage'


export default function App() {
  return (
    <div>
      <h1>react app</h1>
      <UploadPage />
    </div>
  )
}

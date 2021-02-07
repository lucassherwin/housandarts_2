import React, { useEffect, useState} from 'react';
import 'firebase/storage';
import UploadPage from './components/UploadPage';
import { Route, Switch } from 'react-router-dom';
import {storage, db} from './firebase/firebase';
import Navbar from './components/Navbar.js';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // event.preventDefault();
    // console.log('get posts')
    // select the 'posts' collection
    // db.settings({ timestampsInSnapshots: true});
    // const response = db.collection('posts');
    db.collection('posts').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let items = doc.data();
        setPosts(prevState => [...prevState, items]);
        console.log(items, posts);
      })
    })
  }, [])

  return (
    <div>
      <Navbar />
      <h1>react app</h1>
      <Switch>
        <Route exact path='/upload'>
          <UploadPage />
        </Route>
      </Switch>
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

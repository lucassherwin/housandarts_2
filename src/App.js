import React, { useEffect, useState} from 'react';
import 'firebase/storage';
import UploadPage from './components/UploadPage';
import { Route, Switch } from 'react-router-dom';
import { db } from './firebase/firebase';
import Navbar from './components/Navbar.js';
import Home from './components/Home';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let items = doc.data();
        setPosts(prevState => [...prevState, items]);
      })
    })
  }, [])

  return (
    <div>
      <Navbar />
      <h1>react app</h1>
      <Switch>
        <Route exact path='/'>
          <Home posts={posts} />
        </Route>
        <Route exact path='/upload'>
          <UploadPage />
        </Route>
      </Switch>
    </div>
  )
}

import React, { useEffect, useState} from 'react';
import 'firebase/storage';
import UploadPage from './components/UploadPage';
import { Route, Switch } from 'react-router-dom';
import { db } from './firebase/firebase';
import Navbar from './components/Navbar.js';
import Home from './components/Home';
import Posters from './components/Posters';
import Patterns from './components/Patterns';
import Apparel from './components/Apparel';
import Packaging from './components/Packaging';
import './App.css';

export default function App() {
  const [posts, setPosts] = useState([]); // all

  // sorted items to be passed to each respective page
  const [posters, setPosters] = useState([]);
  const [packaging, setPackaging] = useState([]);
  const [patterns, setPatterns] = useState([]);
  const [apparel, setApparel] = useState([]);


  useEffect(() => {
    db.collection('posts').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let item = doc.data();
        setPosts(prevState => [...prevState, item]);
        console.log(item)
        // sort
        switch(item.tag)
        {
          case 'poster':
            setPosters(prevState => [...prevState, item]);
            break;
          case 'packaging':
            setPackaging(prevState => [...prevState, item]);
            break;
          case 'pattern':
            setPatterns(prevState => [...prevState, item]);
            break;
          case 'apparel':
            setApparel(prevState => [...prevState, item]);
            break;
          default:
            console.log(item, 'this one broke');
        }
      })
    })
  }, [])

  // comment
  

  return (
    <div>
      <Navbar />
      <h1>react app</h1>
      <Switch>
        <Route exact path='/'>
          <Home posts={posts} />
        </Route>
        <Route exact path='/posters'>
          <Posters posters={posters} />
        </Route>
        <Route exact path='/patterns'>
          <Patterns patterns={patterns} />
        </Route>
        <Route exact path='/apparel'>
          <Apparel apparel={apparel} />
        </Route>
        <Route exact path='/packaging'>
          <Packaging packaging={packaging} />
        </Route>
        <Route exact path='/upload'>
          <UploadPage />
        </Route>
      </Switch>
    </div>
  )
}

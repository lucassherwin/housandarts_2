import React, { useEffect, useState} from 'react';
import 'firebase/storage';
import UploadPage from './components/UploadPage';
import { Route, Switch, useHistory } from 'react-router-dom';
import { db } from './firebase/firebase';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Posters from './components/Posters.js';
import Patterns from './components/Patterns.js';
import Apparel from './components/Apparel.js';
import Packaging from './components/Packaging.js';
import PostPage from './components/PostPage.js';
import './App.css';

export default function App() {
  const [posts, setPosts] = useState([]); // all

  // sorted items to be passed to each respective page
  const [posters, setPosters] = useState([]);
  const [packaging, setPackaging] = useState([]);
  const [patterns, setPatterns] = useState([]);
  const [apparel, setApparel] = useState([]);

  const [currentPost, setCurrentPost] = useState(null);


  useEffect(() => {
    db.collection('posts').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let post = doc.data();
        // create an image
        // let img = <img src={item.src} alt={item.title} />;
        setPosts(prevState => [...prevState, post]);
        // save that image in state array to pass to Masonry
        // setPosts(prevState => [...prevState, img]);
        // sort
        switch(post.tag)
        {
          case 'poster':
            setPosters(prevState => [...prevState, post]);
            break;
          case 'packaging':
            setPackaging(prevState => [...prevState, post]);
            break;
          case 'pattern':
            setPatterns(prevState => [...prevState, post]);
            break;
          case 'apparel':
            setApparel(prevState => [...prevState, post]);
            break;
          default:
            console.log(post, 'this one broke');
        }
      })
    })
  }, [])

  let history = useHistory();
  
  const handleClick = (post) => {
    console.log('click', post);
    setCurrentPost(post);

    history.push(`/${post.title}`);
  }

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home posts={posts} setCurrentPost={setCurrentPost} handleClick={handleClick} />
        </Route>
        <Route exact path='/posters'>
          <Posters posters={posters} handleClick={handleClick} />
        </Route>
        <Route exact path='/patterns'>
          <Patterns patterns={patterns} handleClick={handleClick} />
        </Route>
        <Route exact path='/apparel'>
          <Apparel apparel={apparel} handleClick={handleClick} />
        </Route>
        <Route exact path='/packaging'>
          <Packaging packaging={packaging} handleClick={handleClick} />
        </Route>
        <Route exact path='/upload'>
          <UploadPage />
        </Route>
        <Route exact path='/:title'>
          <PostPage currentPost={currentPost} />
        </Route>
      </Switch>
    </div>
  )
}

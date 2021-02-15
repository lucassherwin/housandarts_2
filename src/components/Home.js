import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import { useHistory } from "react-router-dom";

export default function Home({ posts, setCurrentPost }) {
  const Container = styled.div`
    display: flex;
    ${'' /* flex-wrap: wrap; */}
    ${'' /* padding: 0 4px; */}
    flex-flow: row wrap;
    /* align-items: stretch; */
    justify-content: center;
    align-items: center;
  `;

  const Post = styled.div`
    margin-bottom: -4px;
  `;

  const Image = styled.img`
    width: 100%;
    height: 200px;
  `;

  let history = useHistory();
  const handleClick = (post) => {
    console.log('click', post);
    setCurrentPost(post);

    history.push('/${post.title}');
  }

  return (
    <div>
      <Container>
      {
        posts ? posts.map(post => (
          <Post key={post.title} onClick={() => handleClick(post)}>
            <Image src={post.src} alt={post.title} />
          </Post>
        ))
        : null
      }
      </Container>
    </div>
  )
}

      // <Masonry breakpointCols={3} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
      //   {posts}
      // </Masonry>
// <h1>{post.title}</h1>
// <p>{post.description}</p>
      // <Masonry className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
      //   {
      //     posts ? posts.map(post => (
      //       <img src={post.src} alt={post.title} height='200px' />
      //     ))
      //     : null
      //   }
      // </Masonry>

      // {
      //   posts ? posts.map(post => (
      //     <Item key={post.title}>
      //       <Image src={post.src} alt={post.title} />
      //     </Item>
      //   ))
      //   : null
      // }
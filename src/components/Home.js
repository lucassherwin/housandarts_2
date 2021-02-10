import React from 'react';
import styled from 'styled-components';

export default function Home({ posts }) {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    flex-flow: row wrap;
    /* align-content: stretch; */
    justify-content: center;
    align-items: center;
  `;

  const Item = styled.div`

  `;

  const Image = styled.img`
    width: 100%;
    height: 200px;
  `;

  return (
    <div>
      <Container>
        {
          posts ? posts.map(post => (
            <Item key={post.title}>
              <Image src={post.src} alt={post.title} />
            </Item>
          ))
          : null
        }
      </Container>
    </div>
  )
}

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


import React from 'react';
import styled from 'styled-components';

export default function Home({ posts }) {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    /* flex-flow: row wrap; */
    /* align-content: stretch; */
  `;

  const Item = styled.div`
    /* flex-grow: 2; */
    flex: 25%;
    max-width: 25%;
  `;

  const Image = styled.img`
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  `;

  return (
    <Container>
      {
        posts ? posts.map(post => (
          <Item key={post.title}>
            <Image src={post.fireBaseUrl} alt={post.title} />
          </Item>
        ))
        : null
      }
    </Container>
  )
}

// <h1>{post.title}</h1>
// <p>{post.description}</p>
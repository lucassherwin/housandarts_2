import React from 'react'
import { Container, Post, Image } from './SyledComonents';

export default function Posters({ posters, handleClick }) {
  return (
    <div>
      <Container>
      {
        posters ? posters.map(post => (
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

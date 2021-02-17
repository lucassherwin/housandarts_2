import React from 'react'
import { Container, Post, Image } from './SyledComonents';

export default function Patterns({ patterns, handleClick }) {
  return (
    <div>
      <Container>
      {
        patterns ? patterns.map(post => (
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

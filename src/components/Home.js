import React from 'react'

export default function Home({ posts }) {
  return (
    <div>
      {
        posts ? posts.map(post => (
          <div key={post.title}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <img src={post.fireBaseUrl} alt={post.title} />
          </div>
        ))
        : null
      }
    </div>
  )
}

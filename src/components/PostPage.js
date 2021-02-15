import React from 'react'

export default function PostPage({ currentPost }) {
    return (
        <div>
            <h1>{currentPost.title}</h1>
        </div>
    )
}

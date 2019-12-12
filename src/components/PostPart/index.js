import React from 'react'

const PostPart = ({post}) => {
  return (
    <div className="card z-depth-0 post-content">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{post.title}</span>
        <p> author: {post.author}</p>
        <p className="grey-text">{post.content}</p>
      </div>
    </div>
  )
}

export default PostPart
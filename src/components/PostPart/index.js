import React from 'react'
import Img from 'react-image'

const PostPart = ({post}) => {
  return (
    <div className="card z-depth-0 post-content">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{post.title}</span>
        <p> author: {post.author}</p>
        <Img src={`https://ronreiter-meme-generator.p.rapidapi.com/meme?rapidapi-key=56ced45b01msh12dd7693686eab7p1224e6jsnde67d7eba427&font=Impact&font_size=50&meme=Condescending-Wonka&top=${post.title}%20&bottom=${post.content}%20`}/>
        <p className="grey-text">{post.content}</p>
      </div>
    </div>
  )
}

export default PostPart
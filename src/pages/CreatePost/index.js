  
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../store/postActions'


class CreatePost extends Component {
  state = {
    title: '',
    content: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createPost(this.state);
  }


  
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Post</h5>
          <p>Title</p>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
          </div>
          <p>Content</p>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn #ffe135">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(null, mapDispatchToProps)(CreatePost)
import React, { Component } from "react";

class PostCard extends Component {

	constructor() {
		super();
		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		fetch("https://excercise-four.herokuapp.com/")
			.then(res => res.json())
			.then(posts => this.setState({posts}, () => console.log('Thing fetched', posts)))
	}
	render() {
		return (
			<div>
				<h1>Posts</h1>
				<ul>
					{this.state.posts.map(post => 
						<li key={post.id}>{ post.author } { post.text } { post.title }</li>
					)}
				</ul>
			</div>
		);
	}
};

export default PostCard
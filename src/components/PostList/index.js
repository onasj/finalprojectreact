import React, { Component } from "react";
import PostPart from '../PostPart'

class PostCard extends Component {

	constructor() {
		super();
		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		fetch("https://finalprojectnodeapi.herokuapp.com/")
			.then(res => res.json())
			.then(posts => this.setState({posts}, () => console.log('Thing fetched', posts)))
	}
	render() {
		return (
			<div>
				{this.state.posts.map(post => 
					<PostPart post={post} key={post.id} />
				)} 
			</div>
		);
	}
};

export default PostCard
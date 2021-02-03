import React, { Component } from "react";
import Post from "../components/Post.js";
import Comment from "../components/Comment.js";

class PostDetails extends Component {
  state = { postId: this.props.match.params.id, post: {}, comments: [] };
  componentDidMount() {
    //fetching post
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          post: data,
        })
      );
    //fetching comments
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.state.postId}/comments`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          comments: data,
        })
      );
  }
  render() {
    const { post, comments } = this.state;

    const display = comments.map((comment) => (
      <Comment
        key={comment.id}
        name={comment.name}
        email={comment.email}
        body={comment.body}
      />
    ));
    return (
      <>
        <Post title={post.title} body={post.body} />
        <section style={{ marginBottom: "0px", paddingBottom: "0px" }}>
          Comments:
        </section>
        <ul>{display}</ul>
      </>
    );
  }
}

export default PostDetails;

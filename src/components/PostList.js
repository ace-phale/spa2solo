import React, { Component } from "react";
import Post from "./Post.js";
import "../styles/PostList.css";
const BASE_URL = "https://jsonplaceholder.typicode.com/posts/";

class PostList extends Component {
  state = {
    posts: [],
    currentPage: 1,
    postsPerPage: 5,
  };

  componentDidMount() {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          posts: data,
        })
      );
  }

  handleChangePage = (e) => {
    console.log(this.state.posts.length);
    console.log(this.indexOfLastPost);
    if (e.target.id === "next") {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
    if (e.target.id === "previous") {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  };

  render() {
    const { posts, currentPage, postsPerPage } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const display = currentPosts.map((post) => (
      <Post key={post.id} id={post.id} title={post.title} body={post.body} />
    ));

    return (
      <>
        {display}
        <section className="pagination">
          <button
            id="previous"
            disabled={indexOfFirstPost <= 1}
            onClick={this.handleChangePage}>
            Previous page
          </button>
          <div className="counter">{currentPage}</div>
          <button
            id="next"
            disabled={indexOfLastPost >= posts.length}
            onClick={this.handleChangePage}>
            Next page
          </button>
        </section>
      </>
    );
  }
}

export default PostList;

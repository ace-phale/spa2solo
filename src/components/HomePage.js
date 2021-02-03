import React, { Component } from "react";
import Post from "../components/Post.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

class HomePage extends Component {
  state = {
    post: {},
  };
  componentDidMount() {
    const index = Math.floor(Math.random() * 100);
    fetch(`${BASE_URL}/${index}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          post: data,
        })
      );
  }
  render() {
    return (
      <div>
        <h3 style={{ marginTop: "0px" }}>
          Welcome to this sample blog homepage!
        </h3>
        <p>
          This single page application uses React.js with React Router library
          and a sprinkle of CSS to create a simple blog. <br />
          <br />
          All data is downloaded from{" "}
          <a href="https://jsonplaceholder.typicode.com/">
            jsonplaceholder
          </a>{" "}
          API
        </p>
      </div>
    );
  }
}

export default HomePage;

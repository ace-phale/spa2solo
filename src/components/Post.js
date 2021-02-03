import React from "react";
import { NavLink } from "react-router-dom";
const Post = ({ title, body, id }) => {
  return (
    <>
      <h4>
        <NavLink to={`/post/${id}`}>{title}</NavLink>
      </h4>
      <p>{body}</p>
    </>
  );
};

export default Post;

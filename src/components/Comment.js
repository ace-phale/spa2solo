import React from "react";
import "../styles/Comment.css";
const Comment = (props) => {
  return (
    <li className="comment">
      <h5>{props.name}</h5>
      <p className="comment">{props.body}</p>
      <p className="author">{props.email}</p>
      <hr />
    </li>
  );
};

export default Comment;

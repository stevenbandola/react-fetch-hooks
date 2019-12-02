import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "./actions/postActions";

const PostForm = props => {
  const [newPost, setNewPost] = useState({
    title: "",
    body: ""
  });

  const onChange = e => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    //call action
    props.createPost(newPost);
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title: </label> <br />
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={onChange}
          />
        </div>
        <br />
        <div>
          <label>Body: </label> <br />
          <textarea
            type="text"
            name="body"
            onChange={onChange}
            value={newPost.body}
          ></textarea>
        </div>
        <br />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};
PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};
export default connect(null, { createPost })(PostForm);

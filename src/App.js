import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import PostsClass from "./components/Post/PostsClass";
import PostsFC from "./components/Post/PostsFC";
import PostForm from "./components/Post/PostForm";

import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <PostForm />
        <hr></hr>
        {/* <PostsClass /> */}
        <PostsFC />
      </div>
    </Provider>
  );
}

export default App;

import { combineReducers } from "redux";
import postReducer from "../components/Post/reducers/postReducer";

export default combineReducers({
  posts: postReducer
});

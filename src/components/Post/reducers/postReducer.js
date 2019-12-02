import { FETCH_POSTS, NEW_POST } from "../actions/types";
import uuid from "uuid/v4";

const initialState = {
  items: [],
  item: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      // console.log(action.payload);
      return {
        ...state,
        items: [
          {
            id: uuid(),
            title: action.payload.title,
            body: action.payload.body
          },
          ...state.items
        ],
        item: {}
      };
    default:
      return state;
  }
};

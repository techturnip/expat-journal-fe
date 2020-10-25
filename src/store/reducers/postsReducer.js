import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
} from "../actions/postActions";

const initialState = {
  isLoadingPosts: false,
  errorMessage: null,
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_START: {
      return {
        ...state,
        isLoadingPosts: true,
      };
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
        isLoadingPosts: false,
      };
    }
    case GET_POSTS_FAILED: {
      return {
        ...state,
        errorMessage: action.payload,
        isLoadingPosts: false,
      };
    }
    default:
      return state;
  }
};

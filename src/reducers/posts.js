import { GET_POSTS_PANDIND, GET_POSTS_RESOLVE, GET_POSTS_ERROR } from "../constants";

const initialValue = {
  isLoading: false,
  posts: []
}

export const postsReduser = (state = initialValue, action) => {
  switch (action.type) {

    case GET_POSTS_PANDIND: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_POSTS_RESOLVE: {
      return {
        isLoading: false,
        posts: action.payload
      };
    }
    case GET_POSTS_ERROR: {
      return {
        ...state,
        isLoading: true
      };
    }
    default: {
      return state;
    }
  }
}

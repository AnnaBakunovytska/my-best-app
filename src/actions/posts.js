import { GET_POSTS_PANDIND, GET_POSTS_RESOLVE, GET_POSTS_ERROR } from "../constants";

const getPostPanding = () => ({ type: GET_POSTS_PANDIND });
const getPostResolve = (data) => ({ type: GET_POSTS_RESOLVE, payload: data });
const getPostError = () => ({ type: GET_POSTS_ERROR });

export const openPosts = () => {
  return (dispatch) => {
    dispatch(getPostPanding());

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((data) => data.json())
      .then((data) => dispatch(getPostResolve(data)))
      .catch(() => dispatch(getPostError))
  };
};


import axios from "axios";

// GET POSTS
export const GET_POSTS_START = "GET_POSTS_START";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILED = "GET_POSTS_FAILED";

const baseURL = "https://be-expat-journal.herokuapp.com";

//export const getPosts = () => {
//  return (dispatch) => {
//    dispatch({ type: GET_POSTS_START });
//
//    return axios
//      .get(`${baseURL}/api/posts/`)
//      .then((res) => {
//        const payload = res.data.sort(
//          (a, b) => new Date(b.created_at) - new Date(a.created_at)
//        );
//
//        dispatch({ type: GET_POSTS_SUCCESS, payload });
//      })
//      .catch((err) => {
//        const payload = err.response ? err.response.data : err;
//        dispatch({ type: GET_POSTS_FAILED, payload });
//      });
//  };
//};

export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS_START });

  try {
    const res = await axios.get(`${baseURL}/api/posts/`);

    const payload = res.data.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    dispatch({ type: GET_POSTS_SUCCESS, payload });
  } catch (err) {
    const payload = err.response ? err.response.data : err;
    dispatch({ type: GET_POSTS_FAILED, payload });
  }
};

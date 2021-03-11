import * as types from '../constants/actionTypes';

export const authenticate = (isAuthenticated) => ({
  type: types.AUTHENTICATE,
  payload: isAuthenticated,
});

export const getPosts = () => (dispatch) => {
  fetch('/posts')
    .then((res) => res.json())
    .then((data) => {
      console.log('postsdata: ', data);
      dispatch({ type: types.GET_POSTS, payload: data });
    });
};

export const savePost = (title, body, id) => (dispatch) => {
  const reqBody = {
    title,
    body,
    user_id: id,
  };

  fetch('/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: types.SAVE_POST, payload: data });
    })
    .catch((e) => console.log(e));
};

export const updateTitle = (newTitle) => ({
  type: types.UPDATE_TITLE,
  payload: newTitle,
});

export const updateBody = (newBody) => ({
  type: types.UPDATE_BODY,
  payload: newBody,
});


export const getComments = () => (dispatch) => {
  fetch('/comments')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: types.GET_COMMENTS, payload: data });
    });
};

export const saveComment = (title, body, id) => (dispatch) => {
  const reqBody = {
    title,
    body,
    comment_id: id,
  };

  fetch('/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: types.SAVE_COMMENT, payload: data });
    })
    .catch((e) => console.log(e));
};

export const updateCommentTitle = (newTitle) => ({
  type: types.UPDATE_COMMENT_TITLE,
  payload: newTitle,
});

export const updateCommentBody = (newBody) => ({
  type: types.UPDATE_COMMENT_BODY,
  payload: newBody,
});

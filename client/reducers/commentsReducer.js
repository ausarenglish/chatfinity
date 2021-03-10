import * as types from '../constants/actionTypes';

const initialState = {
  comments: [],
  newCommentTitle: '',
  newCommentBody: '',
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COMMENTS: {
      return { ...state, comments: action.payload };
    }
    case types.UPDATE_COMMENT_TITLE: {
      return { ...state, newCommentTitle: action.payload };
    }
    case types.UPDATE_COMMENT_BODY: {
      return { ...state, newCommentBody: action.payload };
    }
    case types.SAVE_COMMENT: {
      const newCommentList = [action.payload, ...state.comments];
      return { ...state, comments: newCommentList };
    }
    default: {
      return state;
    }
  }
};

export default commentsReducer;

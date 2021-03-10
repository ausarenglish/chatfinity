// import all reducers here
// check if we need .js later
import scratchReducer from './scratchReducer';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';
import { combineReducers } from 'redux';
// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  comment: commentsReducer,
  scratch: scratchReducer,
  posts: postsReducer,
});

export default reducers;

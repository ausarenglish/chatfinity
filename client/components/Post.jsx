import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import CommentContainer from './CommentContainer.jsx'

export default function Post({title, body, userId, postId, styling}) {
  
  const handleClick = () => {
    return <Route path={`/comments`} component={CommentContainer} />
    };

  return (
    // pass to onClick function that makes post request to comments route sending postId and rerouting to comments page
    <Link to={'/comments'} className="link">
      <div onClick={handleClick} 
      className={`Post ${styling}`} >
        <h4>{title}:</h4>
        <p>{body}</p>
      </div>
    </Link>
  );
}


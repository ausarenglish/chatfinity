import React from 'react';

export default function Post({ title, body, styling }) {
  return (
    // pass to onClick function that reroute user to /comments page
    <div className={`Post ${styling}`}>
      <h4>{title}:</h4>
      <p>{body}</p>
      {/* <button>Comment</button> */}
    </div>
  );
}


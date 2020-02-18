import React from 'react';
import Comment from './Comment';

import './Post.css';

function Post({ author, date, content, comments }) {
  return ( 
    <div className="post">

      <div className="post-header">
        <img className="avatar" src={author.avatar} />
        <div className="details">
          <span>{author.name}</span>
          <span>{date}</span>
        </div>
      </div>

      <p className="post-content">{content}</p>

      <Comment comments={comments} />

    </div>
  );
}

export default Post;
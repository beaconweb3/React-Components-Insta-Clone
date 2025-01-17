import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      
      {/* map through the comments prop and render a Comment for every piece of data */}
      { comments.map( (obj, index) => {
        return <p>{ obj.username } {'says: "'} { obj.text } {'"'}</p>
      })}
      
    </div>
  );
};

export default Comments;

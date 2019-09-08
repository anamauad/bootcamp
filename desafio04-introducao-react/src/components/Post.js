import React, { Component } from "react";

import Comment from "./Comment";

// Responsável por exibir os dados do post, a partir do componente PostList.
function Post({ data }) {
  const { author, date, content, comments } = data;
  return (
    <li className="post">
      <div className="title">
        <img src={author.avatar} alt={author.name} />
        <div>
          <div className="author">{author.name}</div>
          <div className="date">{date}</div>
        </div>
      </div>
      <p>{content}</p>
      <div className="line"></div>
      <ul className="comments">
        {comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </ul>
    </li>
  );
}
export default Post;

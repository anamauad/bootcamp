import React, { Component } from "react";

// Responsável por exibir um comentário, a partir do componente Post.
function Comment({ data }) {
  const { author, content } = data;
  return (
    <li>
      <img src={author.avatar} alt={author.name} />
      <div className="message">
        <strong>{author.name}</strong> {content}
      </div>
    </li>
  );
}
export default Comment;

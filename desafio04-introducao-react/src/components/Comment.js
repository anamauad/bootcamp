import React, { Component } from "react";

// Responsável por exibir um comentário, a partir do componente Post.
function Comment({ data }) {
  const { author, content } = data;
  return (
    <li class="comment">
      <div class="avatar">
        <img src="{author.avatar}" alt="{author.avatar}" />
      </div>
      <p class="container">
        <span class="author">{author.name}</span>
        <span class="content">{content}</span>
      </p>
    </li>
  );
}
export default Comment;

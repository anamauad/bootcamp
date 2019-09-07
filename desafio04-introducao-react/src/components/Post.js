import React, { Component } from "react";

import Comment from "./Comment";

// Responsável por exibir os dados do post, a partir do componente PostList.
function Post({ data }) {
  const { author, date, content, comments } = data;
  return (
    <li class="post">
      <div>
        <div class="avatar">
          <img src="{author.avatar}" alt="{author.avatar}" />
        </div>
        <div>
          <div class="author">{author.name}</div>
          <div class="date">{date}</div>
        </div>
      </div>
      <p class="content">{content}</p>
      <ul class="comments">
        {comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </ul>
    </li>
  );
}
export default Post;

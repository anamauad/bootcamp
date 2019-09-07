import React, { Component } from "react";

import Comment from "./Comment";

// Responsável por exibir os dados do post, a partir do componente PostList.
function Post({ data }) {
  const { author, date, content, comments } = data;
  return (
    <>
      <li>Isto é o Post</li>
      <ul>
        {comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </ul>
    </>
  );
}
export default Post;

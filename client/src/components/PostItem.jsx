import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({ postID, thumbnail, category, title, desc }) => {
  return (
    <article className="post">
      <div className="post__thumbnail">
        <img src={thumbnail} alt={`Thumbnail for ${title}`} />
      </div>
      <div className="post__content">
        <Link to={`/posts/${postID}`}>
          <h3>{title}</h3>
        </Link>
        <p>{desc}</p>
        <div className="post__footer">
          <PostAuthor />
          <Link to={`/posts/categories/${category}`} className="btn category">{category}</Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;

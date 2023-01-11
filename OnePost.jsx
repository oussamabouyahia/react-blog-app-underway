import React from "react";
import PostDetails from "./PostDetails";
const OnePost = ({blog}) => (
  <div className="blog-list-item" >
    <div className="blog-list-item-title" >{blog.title}</div>
    <div className="blog-list-item-byline">
      <span className="blog-list-item-byline-author"> {blog.author} </span>
      {blog.published_at}
    </div>
    <div className="blog-list-item-lede"> Post Content.. </div>
  </div>
);

export default OnePost;
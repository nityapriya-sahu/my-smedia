import React from "react";
import PostShare from "../postShare/PostShare";
import Posts from "../posts/Posts";

const PostSide = () => {
  return (
    <div className="post_side">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;

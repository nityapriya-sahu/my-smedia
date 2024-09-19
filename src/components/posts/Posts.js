import React from "react";
import "./Posts.css";
import { PostsData } from "../../data/PostsData";
import PostCard from "../postCard/PostCard";
const Posts = () => {
  return (
    <div className="posts">
      {PostsData.map((item, id) => {
        return <PostCard data={item} id={id} />;
      })}
    </div>
  );
};

export default Posts;

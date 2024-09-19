import React from "react";
import "./PostCard.css";
import Share from "../../Images/share.png";
import Like from "../../Images/like.png";
import Comment from "../../Images/comment.png";
import NotLike from "../../Images/notlike.png";

const PostCard = ({ data }) => {
  return (
    <div className="post_card">
      <img src={data.img} alt="image" />
      <div className="post_react">
        <img src={data.liked ? Like : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default PostCard;

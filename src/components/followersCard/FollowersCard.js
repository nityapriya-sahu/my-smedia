import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../data/FollowersData";
const FollowersCard = () => {
  return (
    <div className="follower_card">
      <h3>Who is following you</h3>
      {Followers.map((item, index) => {
        return (
          <div key={index} className="follower">
            <div>
              <img src={item.img} alt="dsfs" className="follower_image" />
              <div className="name">
                <span>{item.name}</span>
                <span>@{item.username}</span>
              </div>
            </div>
            <button className="button fc_button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;

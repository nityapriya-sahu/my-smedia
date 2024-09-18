import React from "react";
import "./Home.css";
import ProfileSide from "../../components/profileSide/ProfileSide";
import PostSide from "../../components/postSide/PostSide";

const Home = () => {
  return (
    <div className="home_container">
      <ProfileSide />
      <PostSide />
      <div className="right_side">3</div>
    </div>
  );
};

export default Home;

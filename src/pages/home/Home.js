import React from "react";
import "./Home.css";
import ProfileSide from "../../components/profileSide/ProfileSide";

const Home = () => {
  return (
    <div className="home_container">
      <ProfileSide />
      <div className="post_side">2</div>
      <div className="right_side">3</div>
    </div>
  );
};

export default Home;

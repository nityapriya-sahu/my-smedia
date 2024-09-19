import React from "react";
import "./RightSide.css";
import TrendCard from "../trendcards/TrendCard";
import Home from "../../Images/home.png";
import Noti from "../../Images/noti.png";
import Comment from "../../Images/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
const RightSide = () => {
  return (
    <div className="right_side">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard />

      <button
        className="button r-button"
        //    onClick={() => setModalOpened(true)}
      >
        Share
      </button>
      {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}
    </div>
  );
};

export default RightSide;

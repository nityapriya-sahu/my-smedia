import React from "react";
import "./ProfileCard.css";
import cover from "../../Images/cover.jpg";
import profileImg from "../../Images/profileImg.jpg";

const ProfileCard = () => {
  const ProfilePage = false;
  return (
    <div className="profile_card_container">
      <div className="image_container">
        <img src={cover} alt="cover" />
        <img src={profileImg} alt="profileImg" />
      </div>
      <div className="profile_name_container">
        <span>Andrew Flintoff</span>
        <span>Frontend Developer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;

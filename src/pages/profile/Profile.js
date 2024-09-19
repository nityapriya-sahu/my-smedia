import React from "react";
import ProfileCard from "../../components/profileCard/ProfileCard";
import ProfileLeft from "../../components/profileLeft/ProfileLeft";
import PostSide from "../../components/postSide/PostSide";
import RightSide from "../../components/rightSide/RightSide";
import "./Profile.css";
import { MantineProvider } from "@mantine/core";

const Profile = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="Profile">
        <ProfileLeft />

        <div className="Profile-center">
          <ProfileCard />
          <PostSide />
        </div>

        <RightSide />
      </div>
    </MantineProvider>
  );
};

export default Profile;

import React from "react";
import LogoSearch from "../logoSearch/LogoSearch";
import FollowersCard from "../followersCard/FollowersCard";
import InfoCard from "../infoCard/InfoCard";
import "./ProfileLeft.css";
// import { MantineProvider } from "@mantine/core";

const ProfileLeft = () => {
  return (
    // <MantineProvider withGlobalStyles withNormalizeCSS>
    <div className="Profile_side">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
    // </MantineProvider>
  );
};

export default ProfileLeft;

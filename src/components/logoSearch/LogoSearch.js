import React from "react";
import "./LogoSearch.css";
import logo from "../../Images/logo.png";
import { UilSearch } from "@iconscout/react-unicons";

const LogoSearch = () => {
  return (
    <div className="logo_search_container">
      <img src={logo} alt="logo" />
      <div className="search_container">
        <input type="text" placeholder="#Explore" />
        <div className="s_icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;

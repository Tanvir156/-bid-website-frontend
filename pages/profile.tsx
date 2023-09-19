import React from "react";
import Profile from "./../components/Profile/Profile.js";
import { GetStaticPaths } from "next";
const profile = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default profile;

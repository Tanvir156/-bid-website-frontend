import React from "react";
import { getStaticPaths } from "next";

import Login from "./../components/Auth/Login";
const login = ({ history }) => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default login;

import React from "react";
import { GetStaticPaths } from "next";

import Login from "./../components/Auth/Login";
const login = ({ history }) => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default login;

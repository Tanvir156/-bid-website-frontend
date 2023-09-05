import React from "react";
import { GetStaticPaths } from "next";
import Registration from "./../components/Auth/Registration";
const registration = ({ history }) => {
  return (
    <div>
      <Registration />
    </div>
  );
};

export default registration;

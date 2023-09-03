import React from "react";
import { getStaticPaths } from "next";

import Registration from "./../components/Auth/Registration";
const registration = () => {
  return (
    <div>
      <Registration />
    </div>
  );
};

export default registration;

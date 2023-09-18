import React from "react";
import { GetStaticPaths } from "next";
import UploadProduct from "./../components/UploadProduct/UploadProduct";
const uploadproduct = () => {
  return (
    <div>
      <UploadProduct />
    </div>
  );
};

export default uploadproduct;

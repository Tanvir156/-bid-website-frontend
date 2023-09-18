import React from "react";
import CategorySelection from "./CategorySelection";
import Dropdown from "react-bootstrap/Dropdown";
const UploadProduct = () => {
  return (
    <div style={{ margin: "20px", height: "70vh" }}>
      <div>
        <h1 className="d-flex justify-content-center align-items-center mb-3">
          Sell Product
        </h1>
        <Dropdown.Divider
          style={{ borderTop: "1px solid gray", marginBottom: "50px" }}
        />
      </div>

      <div>
        <CategorySelection />
      </div>
    </div>
  );
};

export default UploadProduct;

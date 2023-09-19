import React from "react";
import Home from "./../components/Home/Home.js";
import config from "./../config";
const API_URL = `${config.API_URL}/api/products/productlist`;
export async function getStaticProps() {
  const res = await fetch(API_URL);
  const product = await res.json();
  return { props: { product } };
}
const index = ({ product }) => {
  return (
    <div>
      <Home products={product} />
    </div>
  );
};

export default index;

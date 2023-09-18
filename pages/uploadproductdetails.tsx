import React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next";
import ProductDetails from "./../components/UploadProduct/ProductDetails";
const Uploadproductdetails = () => {
  const router = useRouter();
  const {
    selectedCategory,
    selectedSubcategory,
    selectedDivision,
    selectedDistric,
  } = router.query;

  return (
    <ProductDetails
      selectedCategory={selectedCategory}
      selectedSubcategory={selectedSubcategory}
      selectedDivision={selectedDivision}
      selectedDistric={selectedDistric}
    />
  );
};

export default Uploadproductdetails;

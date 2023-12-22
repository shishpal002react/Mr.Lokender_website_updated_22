import React from "react";
import Footer from "../Homepage/Footer/Footer";
import GrocerySlider from "./GrocerySlider";
import GroceryProduct from "./GroceryProduct";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";



const Furniture = () => {
  return (
    <>
      <Navbar />
      <NavbarCategory />
      <GrocerySlider />
      <GroceryProduct />
      <Footer />
    </>
  );
};

export default Furniture;
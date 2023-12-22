import React from "react";
import Footer from "../Homepage/Footer/Footer";
import FurnitureSlider from "./FurnitureSlider";
import FurnitureProduct from "./FurnitureProduct";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import OfferSection from "../Homepage/OfferSection/OfferSection";


const Furniture = () => {
  return (
    <>
      <Navbar />
      <NavbarCategory />
      <FurnitureSlider />
      <FurnitureProduct />
      <OfferSection />
      <Footer />
    </>
  );
};

export default Furniture;
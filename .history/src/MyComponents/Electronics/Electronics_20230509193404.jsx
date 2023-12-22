import React from "react";
import Footer from "../Homepage/Footer/Footer";
import ElectronicSlider from "./ElectronicSlider";
import ElectronicProduct from "./ElectronicProduct";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import OfferSection from "../Homepage/OfferSection/OfferSection";


const Electronics = () => {
  return (
    <>
      <Navbar />
      <NavbarCategory />
      <ElectronicSlider />
      <ElectronicProduct />
      <OfferSection />
      <Footer />
    </>
  );
};

export default Electronics;
import React from "react";
import Footer from "../Homepage/Footer/Footer";
import ApplianceSlider from "./ApplianceSlider";
import ApplianceProduct from "./ApplianceProduct";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import OfferSection from "../Homepage/OfferSection/OfferSection";


const Appliances = () => {
  return (
    <>
      <Navbar />
      <NavbarCategory />
      <ApplianceSlider />
      <ApplianceProduct />
      <OfferSection />
      <Footer />
    </>
  );
};

export default Appliances;
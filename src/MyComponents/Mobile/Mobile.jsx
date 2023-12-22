import React from "react";
import Footer from "../Homepage/Footer/Footer";
import MobileSlider from "./MobileSlider";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import OfferSection from "../Homepage/OfferSection/OfferSection";
import MobileProduct from "./MobileProduct";

const Mobile = () => {
  return (
    <>
      <Navbar />
      <NavbarCategory />
      <MobileSlider />
      <MobileProduct />
      <OfferSection />
      <Footer />
    </>
  );
};

export default Mobile;

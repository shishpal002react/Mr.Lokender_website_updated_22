import React from "react";
import Footer from "../Homepage/Footer/Footer";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import RentCont from "./RentCont";
import RentSlider from "./RentSlider";

const Rent = () => {
  return (
    <>
      <Navbar />
      <NavbarCategory />
      <RentSlider />
      <RentCont />
      <Footer />
    </>
  );
};

export default Rent;

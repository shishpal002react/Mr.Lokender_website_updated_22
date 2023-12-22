import React from "react";
import Footer from "../Homepage/Footer/Footer";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import ElectronicViewCont from "./ElectronicViewCont";


const Electronics = () => {
  return (
    <>
      <Navbar />
      <NavbarCategory />
      <ElectronicViewCont />
      <Footer />
    </>
  );
};

export default Electronics;
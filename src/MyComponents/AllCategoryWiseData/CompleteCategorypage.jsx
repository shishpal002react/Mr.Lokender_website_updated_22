import React from "react";
import Footer from "../Homepage/Footer/Footer";
import { useParams } from "react-router-dom";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import NavbarCategory2 from "../Homepage/NavbarCategory/NavbarCategory2";
import CategoryWiseDate from "./CategoryWiseDate";

const CompleteCategorypage = () => {
  const { id } = useParams();

  console.log("id:", id);
  return (
    <>
      <Navbar />
      <NavbarCategory2 />
      <CategoryWiseDate id={id} />
      <Footer />
    </>
  );
};

export default CompleteCategorypage;

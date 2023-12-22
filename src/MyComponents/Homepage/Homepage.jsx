import React from "react";
import Footer from "./Footer/Footer";
import HeroSlider from "./HeroSlider/HeroSlider";
import Navbar from "./Navbar/Navbar";
import NavbarCategory from "./NavbarCategory/NavbarCategory";
import OfferSection from "./OfferSection/OfferSection";
import ProductSection from "./ProductSection/ProductSection";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <NavbarCategory />
      <HeroSlider />
      <ProductSection />
      <OfferSection/>
      <Footer />
    </>
  );
};

export default Homepage;

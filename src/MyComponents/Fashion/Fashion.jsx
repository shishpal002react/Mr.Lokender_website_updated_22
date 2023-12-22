import React from 'react'
import Footer from '../Homepage/Footer/Footer'
import HeroSlider from '../Homepage/HeroSlider/HeroSlider'
import Navbar from '../Homepage/Navbar/Navbar'
import NavbarCategory from '../Homepage/NavbarCategory/NavbarCategory'
import OfferSection from '../Homepage/OfferSection/OfferSection'
import FashionProduct from './FashionProduct';


const Fashion = () => {
  return (
    <>
      <Navbar/>
      <NavbarCategory/>
      <HeroSlider/>
      <FashionProduct />
      <OfferSection/>
      <Footer/>
    </>
  )
}

export default Fashion

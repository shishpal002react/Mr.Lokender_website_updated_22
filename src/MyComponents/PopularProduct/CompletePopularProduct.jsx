import React from 'react'
import Footer from '../Homepage/Footer/Footer'
import Navbar from '../Homepage/Navbar/Navbar'
import NavbarCategory2 from '../Homepage/NavbarCategory/NavbarCategory2'
import PopularProductScreen from './PopularProductScreen'

//special offer

const CompletePopularProduct = () => {

  return (
    <>
      <Navbar/>
      <NavbarCategory2/>
      <PopularProductScreen/>
      <Footer/>
    </>
  )
}

export default CompletePopularProduct;
import React from 'react'
import Navbar from '../Homepage/Navbar/Navbar'
import NavbarCategory from '../Homepage/NavbarCategory/NavbarCategory'
import HeroSlider from '../Homepage/HeroSlider/HeroSlider'
import Footer from '../Homepage/Footer/Footer'
import WishlistProducts from './WishlistProducts'

const Wishlist = () => {
  return (
    <>
        <Navbar />
        <NavbarCategory />
        <WishlistProducts />
        <Footer />
    </>
  )
}

export default Wishlist
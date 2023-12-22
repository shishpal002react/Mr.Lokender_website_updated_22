import React from 'react'
import Footer from '../Homepage/Footer/Footer'
import { useParams } from 'react-router-dom'
import Navbar from '../Homepage/Navbar/Navbar'
import NavbarCategory from '../Homepage/NavbarCategory/NavbarCategory'

import CategoryWiseDate from './SubCategoryWiseDate'
import HeroSlider from './../Homepage/HeroSlider/HeroSlider';


const CompleteSubCategorypage = () => {
    const {id}=useParams();

console.log("id:",id)
  return (
    <>
      <Navbar/>
      <NavbarCategory/>
      <HeroSlider/>
      {/* <NavbarCategory2/> */}
      <CategoryWiseDate id={id}/>
      <Footer/>
    </>
  )
}

export default CompleteSubCategorypage;
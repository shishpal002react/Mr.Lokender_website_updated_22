import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Homepage/Navbar/Navbar';
import NavbarCategory from '../Homepage/NavbarCategory/NavbarCategory';
import HeroSlider from '../Homepage/HeroSlider/HeroSlider';
import OfferSection from '../Homepage/OfferSection/OfferSection';
import Footer from '../Homepage/Footer/Footer';
import AllCategoryProducts from './AllCategoryProducts';

const CategoryProducts = () => {
    const {id}=useParams();
    
    return (
        <>
        <Navbar/>
        <NavbarCategory/>
        <HeroSlider/>
        <AllCategoryProducts id={id}/>
        <OfferSection/>
        <Footer/>
        </>
    );
}

export default CategoryProducts;

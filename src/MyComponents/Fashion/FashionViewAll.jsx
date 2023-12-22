import React from "react";
import Footer from '../Homepage/Footer/Footer';
import Navbar from '../Homepage/Navbar/Navbar';
// import NavbarCategory from '../Homepage/NavbarCategory/NavbarCategory';
import NavbarCategory2 from '../Homepage/NavbarCategory/NavbarCategory2'
import FashionViewCont from "./FashionViewCont";


const FashionViewAll = ()=>{
    return (
        <>
            <Navbar />
            <NavbarCategory2 />
            <FashionViewCont />
            <Footer />
        </>
    )
}

export default FashionViewAll;
import React from "react";
import Footer from '../Homepage/Footer/Footer';
import Navbar from '../Homepage/Navbar/Navbar';
import NavbarCategory2 from '../Homepage/NavbarCategory/NavbarCategory2';
import GroceryViewCont from "./GroceryViewCont";


const ApplianceViewAll = ()=>{
    return (
        <>
            <Navbar />
            <NavbarCategory2 />
            <GroceryViewCont />
            <Footer />
        </>
    )
}

export default ApplianceViewAll;
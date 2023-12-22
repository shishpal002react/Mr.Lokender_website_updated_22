import React from "react";
import Footer from '../Homepage/Footer/Footer';
import Navbar from '../Homepage/Navbar/Navbar';
import NavbarCategory2 from '../Homepage/NavbarCategory/NavbarCategory2';
import ElectronicViewCont from "./ElectronicViewCont";


const ElectronicViewAll = ()=>{
    return (
        <>
            <Navbar />
            <NavbarCategory2 />
            <ElectronicViewCont />
            <Footer />
        </>
    )
}

export default ElectronicViewAll;
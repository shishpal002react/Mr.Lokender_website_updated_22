import React from "react";
import Footer from '../Homepage/Footer/Footer';
import Navbar from '../Homepage/Navbar/Navbar';
import NavbarCategory2 from '../Homepage/NavbarCategory/NavbarCategory2';
import ApplianceViewCont from "./ApplianceViewCont";


const ApplianceViewAll = ()=>{
    return (
        <>
            <Navbar />
            <NavbarCategory2 />
            <ApplianceViewCont />
            <Footer />
        </>
    )
}

export default ApplianceViewAll;
import React from "react";
import Homepage from "./MyComponents/Homepage/Homepage";
import Navbar from "./MyComponents/Homepage/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import BecomeSeller from "./MyComponents/BecomeASeller/BecomeSeller";
import RegisterSeller from "./MyComponents/BecomeASeller/RegisterSeller";
import ProductViewAll from "./MyComponents/Homepage/ProductSection/ProductViewAll";
import RentalLanding from "./MyComponents/Rental/RentalLanding";
import RentalSingleView from "./MyComponents/Rental/RentalSingleView";
import Cart from "./MyComponents/Cart/Cart";
import MobileNav from "./MyComponents/Homepage/MobileNav/MobileNav";
import Profile from "./MyComponents/MyProfile/Profile";
import Grocery from "./MyComponents/Grocery/Grocery";
import MobileCategory from "./MyComponents/Homepage/MobileCategory/MobileCategory";
import ProductSingleView from "./MyComponents/Homepage/ProductSection/ProductSingleView";
import Signup from "./MyComponents/User/Signup";
import Login from "./MyComponents/User/Login";
import Fashion from "./MyComponents/Fashion/Fashion";
import Mobile from "./MyComponents/Mobile/Mobile";
import Electronics from "./MyComponents/Electronics/Electronics";
import Appliances from "./MyComponents/Appliances/Appliances";
import Furniture from "./MyComponents/Furniture/Furniture";
import FashionViewAll from "./MyComponents/Fashion/FashionViewAll";
import ElectronicViewAll from "./MyComponents/Electronics/ElectronicViewAll";
import ApplianceViewAll from "./MyComponents/Appliances/ApplianceViewAll";
import GroceryViewAll from "./MyComponents/Grocery/GroceryViewAll";
import MobileView from "./MyComponents/Mobile/MobileView";
import FashionView from "./MyComponents/Fashion/FashionView";
import ElectronicsView from "./MyComponents/Electronics/ElectronicsView";
import FurnitureView from "./MyComponents/Furniture/FurnitureView";
import ApplianceView from "./MyComponents/Appliances/ApplianceView";
import Rent from "./MyComponents/Rent/Rent";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Common from "./MyComponents/Common/Common";
const App = () => {
  console.log("Mobile opened");
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/seller" element={<BecomeSeller />} />
        <Route path="/seller-registration" element={<RegisterSeller />} />
        <Route path="/all-product" element={<ProductViewAll />} />
        <Route path="/rent-product-view" element={<RentalSingleView />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/all-category" element={<MobileCategory />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/product-view" element={<ProductSingleView />} />
        <Route path="/category/:name" element={<Common />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/appliances" element={<Appliances />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/fashion-all" element={<FashionViewAll />} />
        <Route path="/electronic-all" element={<ElectronicViewAll />} />
        <Route path="/appliances-all" element={<ApplianceViewAll />} />
        <Route path="/grocery-all" element={<GroceryViewAll />} />
        <Route path="/mobile-view" element={<MobileView />} />
        <Route path="/fashion-view" element={<FashionView />} />
        <Route path="electronics-view" element={<ElectronicsView />} />
        <Route path="furniture-view" element={<FurnitureView />} />
        <Route path="appliance-view" element={<ApplianceView />} />
        <Route path="/rent" element={<Rent />} />
      </Routes>
      <MobileNav />
    </>
  );
};

export default App;

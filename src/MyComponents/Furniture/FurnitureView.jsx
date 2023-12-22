import React from "react";
import Footer from "../Homepage/Footer/Footer";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import img from "../../Images/d33.png";
import img2 from "../../Images/d49.png";
import img3 from "../../Images/d50.png";
import img4 from "../../Images/d49.png";
import img5 from "../../Images/d50.png";

import {useNavigate} from "react-router-dom";

const FurnitureView = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <NavbarCategory />
      <div className="mobileviewcont">
        <div className="mobileviewcontl">
          <div className="singlecont">
            <div className="singlecontl">
              <div className="singleitem">
                <img src={img} alt="" />
              </div>
              <div className="singleitem">
                <img src={img} alt="" />
              </div>
              <div className="singleitem">
                <img src={img} alt="" />
              </div>
              <div className="singleitem">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="singlecontr">
              <div className="mobileimg">
                <img src={img} alt="" />
              </div>
              <div className="mobilebtn">
                <button className="bt1" onClick={()=>navigate("/cart")}>Add To Cart</button>
                <button className="bt2" onClick={()=>navigate("/cart")}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mobileviewcontr">
          <div className="mobileviewdetail">
            <h6>Apple iPhone 11 (White, 64GB)</h6>
            <h6>Extra &#x20B9;1190 off</h6>
            <div className="detaillst">
              <h6>&#x20B9; 47,990 &#x20B9;49,9003% off</h6>
            </div>
            <h6>+&#x20B9; 29 Packaging Charges</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <div className="mobileviewdetailbtn">
              <div></div>
              <button className="btt">Check Delivery</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mobileviewcont3">
        <h3>You might be Interested in </h3>
        <div className="flex3">
            <div className="boxitm">
                <img style={{margin:"10% 2%", width:"90%"}} src={img3} alt="" />
            </div>
            <div className="boxitm">
                <img style={{margin:"4% 2%"}} src={img4} alt="" />
            </div>
            <div className="boxitm">
                <img style={{margin:"4% 2%"}} src={img3} alt="" />
            </div>
            <div className="boxitm">
                <img style={{margin:"4% 2%"}} src={img5} alt="" />
            </div>
            <div className="boxitm">
                <img style={{margin:"4% 2%"}} src={img4} alt="" />
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FurnitureView;

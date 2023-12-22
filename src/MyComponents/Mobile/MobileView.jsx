import React from "react";
import Footer from "../Homepage/Footer/Footer";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import img from "../../Images/d43.png";
import img2 from "../../Images/d44.png";
import img3 from "../../Images/d45.png";
import img4 from "../../Images/d46.png";
import img5 from "../../Images/d47.png";
import {useNavigate} from "react-router-dom";

const MobileView = () => {
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
                <button className="bt2">Buy Now</button>
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
              <button>64 GB</button>
              <button>128 GB</button>
              <button>256 GB</button>
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
      <div className="mobileviewcont2">
        <div className="mobileviewcont2l"></div>
        <div className="mobileviewcont2r">
          <div className="mobileviewcont2r2">
            <h4>Sold By</h4>
            <div className="flex1">
              <img src={img2} alt="" />
              <h3>Lorem Ipsum Name</h3>
              <button>View Shop</button>
            </div>
            <div className="flex2">
              <div className="flex2l">
                <div className="flex2lc">
                  <h6>Rating</h6>
                  <div className="staricon">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <h6>4.5</h6>
              </div>
              <div className="flex2r">
                <div className="flex2ritem">
                  <h4>2</h4>
                  <h5>Followers</h5>
                </div>
                <div className="flex2ritem">
                  <h4>2</h4>
                  <h5>Products</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileviewcont3">
        <h3>You might be Interested in </h3>
        <div className="flex3">
            <div className="boxitm">
                <img src={img3} alt="" />
            </div>
            <div className="boxitm">
                <img src={img4} alt="" />
            </div>
            <div className="boxitm">
                <img src={img3} alt="" />
            </div>
            <div className="boxitm">
                <img src={img5} alt="" />
            </div>
            <div className="boxitm">
                <img src={img4} alt="" />
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MobileView;

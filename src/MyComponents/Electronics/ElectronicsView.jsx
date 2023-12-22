import React, { useEffect, useState } from "react";
import Footer from "../Homepage/Footer/Footer";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import {useParams } from "react-router-dom";
import img from "../../Images/d48.png";
import img2 from "../../Images/d26.png";
import img3 from "../../Images/d27.png";
import img4 from "../../Images/d14.png";
import img5 from "../../Images/d26.png";
import img6 from "../../Images/d44.png";
import {useNavigate} from "react-router-dom";
import Baseurl from "../../Baseurl";
import axios from "axios";
import { toast } from "react-toastify";

const ElectronicsView = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("boon");
  // const data = location.state;
  const [rev, setReview] = useState("");
  const [pop, setPop] = useState(false);
  //   Add
  const addCart = async (id) => {
    let url = `${Baseurl()}api/v1/cart`;
    const payload = {
      product: id,
    };
    try {
      const res = await axios.post(url, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("post request cart" ,res);
      toast.success("SuccessFully ! Added to cart");
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  };
  // Post review
  const review = async () => {
    let url = `${Baseurl()}api/review/me/review`;
    const payload = {
      description: rev,
    };
    try {
      const res = await axios.post(url, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res);
      setReview("");
      toast.success("Thank you for review ", { autoClose: 500 });
    } catch (error) {
      console.log(error);
      console.log("Internal Server Error");
    }
  };

  ///single data api and  get all products
  const {id}=useParams();
  const [singleData,setSingleData]=useState("");
  const getSingleProducts = async() => {
    console.log("ls",(localStorage.getItem("boon")))
    let url = `${Baseurl()}api/v1/product/single/${id}`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("product from product section",res.data.product);
      setSingleData(res.data.product);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {  
    getSingleProducts();    
  }, []);

  return (
    <>
      <Navbar />
      <NavbarCategory />
      <div className="mobileviewcont">
        <div className="mobileviewcontl">
          <div className="singlecont">
            <div className="singlecontl">
              <div className="singleitem">
                <img src={singleData?.images?.[0]} alt="" />
              </div>
              <div className="singleitem">
                <img src={singleData?.images?.[0]} alt="" />
              </div>
              <div className="singleitem">
                <img src={singleData?.images?.[0]} alt="" />
              </div>
              <div className="singleitem">
                <img src={singleData?.images?.[1]} alt="" />
              </div>
            </div>
            <div className="singlecontr">
              <div className="mobileimg">
                <img src={singleData?.images?.[1]} alt="" />
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
      <div className="mobileviewcont2">
        <div className="mobileviewcont2l"></div>
        <div className="mobileviewcont2r">
          <div className="mobileviewcont2r2">
            <h4>Sold By</h4>
            <div className="flex1">
              <img src={img6} alt="" />
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

export default ElectronicsView;

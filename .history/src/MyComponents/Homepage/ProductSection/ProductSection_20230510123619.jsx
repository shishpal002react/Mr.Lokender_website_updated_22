import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MenFashion,
  MenFashionData,
  TopOfferData,
  WomenFashion,
  WomenFashionData,
} from "../../../ArrayData/ArrayData";
import { ShoesFashion } from "../../../ArrayData/ArrayData";
import { ShoesFashionData } from "../../../ArrayData/ArrayData";
import Baseurl from "../../../Baseurl";
import axios from "axios";
import Card from "./Card";
import img from "../../../Images/d12.png";
import img2 from "../../../Images/d13.png";
import img3 from "../../../Images/d15.png";
import img4 from "../../../Images/d58.png";
import img5 from "../../../Images/d59.png";
import img6 from "../../../Images/d60.png";
import img7 from "../../../Images/d61.png";
import img8 from "../../../Images/d62.png";
import img9 from "../../../Images/d48.png";
import img10 from "../../../Images/d42.png";
import img11 from "../../../Images/d14.png";
import img12 from "../../../Images/d63.png";
import img13 from "../../../Images/d64.png";
import img14 from "../../../Images/d65.png";
import img15 from "../../../Images/d66.png";
import img16 from "../../../Images/d67.png";
import img17 from "../../../Images/d68.png";
import img18 from "../../../Images/d16.png";
import img19 from "../../../Images/d17.png";
import img20 from "../../../Images/d18.png";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ProductSection = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const SlideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const SlideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const SlideLeft2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const SlideRight2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const SlideLeft3 = () => {
    var slider = document.getElementById("slider3");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const SlideRight3 = () => {
    var slider = document.getElementById("slider3");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  // Get Products
  const getProducts = async () => {
    let url = `${Baseurl()}api/product/get/product`;
    try {
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Get Sub Category
  const getSubCat = async () => {
    let url = `${Baseurl()}api/Subcategory/get/Subcategory`;
    try {
      const res = await axios.get(url);
      setSubCat(res.data);
      // console.log(res.data, "subc");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getProducts();
    //  getSubCat();
  }, []);

  return (
    <>
      <div
        //  key={i}
        className=" mt-4 container-fluid md:m-6 border-2
      
         p-3 md:p-6 bg-white md:mx-auto"
        // className=" mt-4 container-fluid md:m-6 border-2
        //  border-gray-300 
        //  p-3 md:p-6 bg-white md:mx-auto"
      >
        <div className="rg">
          <div className="bannerimg">
            <div className="offer">
              <img src={img} alt="" className="homeimg" />
              <button onClick={() => navigate("/electronic-all")}>
                View All
              </button>
            </div>
          </div>
          <div className="relative flex items-center homeslider">
            <MdChevronLeft onClick={SlideLeft3} size={40} />
            <div
              id="slider3"
              className=" fashrightcont w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              <div
                className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 "
                style={{ border: "1px solid #333;" }}
              >
                <img
                  onClick={() => {
                    navigate("/electronics-view", { state: "e" });
                  }}
                  src={img8}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img8}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img9}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img5}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img10}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img8}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <MdChevronRight onClick={SlideRight3} size={40} />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          <div className="offer">
            <img src={img2} alt="" style={{ position: "relative" }} />
            <button onClick={() => navigate("/fashion-all")}>View All</button>
          </div>
          <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
            <img
              onClick={() => {
                navigate("/fashion-view", { state: "e" });
              }}
              src={img18}
              alt="e.title"
              className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
            />
            <h2 className="text-lg font-medium mb-2">
              Mac Book Air
              {/*e.title.length >= 20 ? "..." : ""*/}
            </h2>
            <div className="flex justify-between border-t items-center pt-3">
              <h3 className="text-base">₹ 55,000</h3>
              <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
            <img
              onClick={() => {
                navigate("/furniture-view", { state: "e" });
              }}
              src={img19}
              alt="e.title"
              className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
            />
            <h2 className="text-lg font-medium mb-2">
              Mac Book Air
              {/*e.title.length >= 20 ? "..." : ""*/}
            </h2>
            <div className="flex justify-between border-t items-center pt-3">
              <h3 className="text-base">₹ 55,000</h3>
              <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
            <img
              onClick={() => {
                navigate("/furniture-view", { state: "e" });
              }}
              src={img10}
              alt="e.title"
              className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
            />
            <h2 className="text-lg font-medium mb-2">
              Mac Book Air
              {/*e.title.length >= 20 ? "..." : ""*/}
            </h2>
            <div className="flex justify-between border-t items-center pt-3">
              <h3 className="text-base">₹ 55,000</h3>
              <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
            <img
              onClick={() => {
                navigate("/furniture-view", { state: "e" });
              }}
              src={img20}
              alt="e.title"
              className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
            />
            <h2 className="text-lg font-medium mb-2">
              Mac Book Air
              {/*e.title.length >= 20 ? "..." : ""*/}
            </h2>
            <div className="flex justify-between border-t items-center pt-3">
              <h3 className="text-base">₹ 55,000</h3>
              <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
            <img
              onClick={() => {
                navigate("/furniture-view", { state: "e" });
              }}
              src={img18}
              alt="e.title"
              className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
            />
            <h2 className="text-lg font-medium mb-2">
              Mac Book Air
              {/*e.title.length >= 20 ? "..." : ""*/}
            </h2>
            <div className="flex justify-between border-t items-center pt-3">
              <h3 className="text-base">₹ 55,000</h3>
              <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="rg">
          <div className="bannerimg">
            <div className="offer">
              <img src={img13} alt="" className="homeimg" />
              <button onClick={() => navigate("/appliances-all")}>
                View All
              </button>
            </div>
          </div>
          <div className="relative flex items-center homeslider">
            <MdChevronLeft onClick={SlideLeft} size={40} />
            <div
              id="slider"
              className=" fashrightcont w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              <div
                className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 "
                style={{ border: "1px solid #333;" }}
              >
                <img
                  onClick={() => {
                    navigate("/appliance-view", { state: "e" });
                  }}
                  src={img6}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img20}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img4}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img5}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img4}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img5}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <MdChevronRight onClick={SlideRight} size={40} />
          </div>
        </div>
        <div className="rg" style={{ display: "flex", gap: "5px" }}>
          <div className="bannerimg">
            <div className="offer">
              <img src={img14} alt="" className="homeimg" />
              <button onClick={() => navigate("/grocery-all")}>View All</button>
            </div>
          </div>
          <div className="relative flex items-center homeslider">
            <MdChevronLeft onClick={SlideLeft2} size={40} />
            <div
              id="slider2"
              className=" fashrightcont w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              <div
                className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 "
                style={{ border: "1px solid #333;" }}
              >
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img15}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img16}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img17}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img15}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img16}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img17}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  {/*e.title.length >= 20 ? "..." : ""*/}
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <MdChevronRight onClick={SlideRight2} size={40} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;

import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import rent from "../../Images/rent.png";
import { useNavigate } from "react-router-dom";
import Baseurl from "../../../Baseurl";
import axios from "axios";

const MobileCategory = () => {
  const navigate = useNavigate();
  const [mobCat, setMobCat] = useState([]);
  const getCategory = async () => {
    let url = `${Baseurl()}api/v1/products?category=Mobile`;
    try {
      const res = await axios.get(url);
      console.log("mobile cat", res.data.categories);
      setMobCat(res.data.categories);
      console.log(res, "proo");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <>
      <Navbar />
      <div className=" flex justify-center m-6">
        <h2 className="text-2xl font-medium"> All Category</h2>
      </div>
      <div className=" grid grid-cols-4 ">
        {mobCat.length > 0 && mobCat.map((category, i) => {
          return <div className="rounded-full cursor-pointer m-4 bg-gray-400 w-20 h-20" key={i}>
          <img
            onClick={() => {
              if(category.name === "Home"){
                navigate(`/`);
              }else{
                navigate(`/${category.name.toLowerCase()}`);
              }
            }}
            className="rounded-full"
            src={category.image}
            alt=""
          />
          <h2 className="text-center">{category.name}</h2>
        </div>
        })}


        {/* <div className="rounded-full cursor-pointer m-4 bg-gray-400 w-20 h-20">
          <img
            onClick={() => {
              navigate("/rent");
            }}
            className="rounded-full"
            src={rent}
            alt=""
          />
          <h2 className="text-center">Rental</h2>
        </div>
        <div className="rounded-full cursor-pointer m-4 bg-gray-400 w-20 h-20">
          <img
            onClick={() => {
              navigate("/grocery");
            }}
            className="rounded-full"
            src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
            alt=""
          />
          <h2 className="text-center">Grocery</h2>
        </div> */}

        {/* <>
          <div
            // key={i}
            // onClick={() => {
            //   navigate("/grocery");
            // }}
            className="rounded-full cursor-pointer bg-gray-400 w-20 h-20"
          >
            <img
              className="rounded-full w-full h-full"
              src="e.CategoryImg"
              alt="e.category"
            />
            <h2 className="text-center font-medium">e.category 54trds</h2>
          </div>
        </> */}
      </div>
      <div className="flex justify-center   bg-black text-white mx-20 mt-20 py-3 rounded-lg">
        <button
          onClick={() => {
            navigate("/seller-registration");
          }}
          className="font-semibold"
        >
          Become a Seller
        </button>
      </div>
      <Footer />
    </>
  );
};

export default MobileCategory;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppliancesRentData,
  ElectronicRentData,
  FitnessRentData,
  FurnitureRentData,
  MenFashionData,
  MenRentData,
  rentCategoryData,
} from "../../ArrayData/ArrayData";
import Navbar from "../Homepage/Navbar/Navbar";
import axios from "axios";
import Baseurl from "../../Baseurl";
import ReanCard from "./ReanCard";

const RentalLanding = () => {
  const navigate = useNavigate();
  const [navCat, setNavCat] = useState([]);
  const [rentalPro, setRentalPro] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const getCategory = async () => {
    let url = `${Baseurl()}api/v1/admin/allCategory`;
    try {
      const res = await axios.get(url);
      setNavCat(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Getrental products
  const getRental = async () => {
    let url = `${Baseurl()}api/v1/products`;
    try {
      const res = await axios.get(url);
      setRentalPro(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getSubCat = async () => {
    let url = `${Baseurl()}api/v1/admin/allSubCategory`;
    try {
      const res = await axios.get(url);
      setSubCat(res.data);
      // console.log(res.data, "subc");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //getProducts();
    getSubCat();
    getCategory();
    getRental();
  }, []);
  return (
    <>
      {/* Rental Landing Page Navbar */}
      <Navbar />
      {/* Rental Landing Page Navbar Category */}
      <div
        id="nav-cat"
        className="md:container-fluid flex justify-center px-5 overflow-auto bg-[#ECECEC] overflow-x-scroll items-center md:mx-auto  "
      >
       {/*navCat.map((e) => {
          return (})*/}
            <div
              onClick={() => {
                navigate("/all-product", {/* state: [e.date, e.title] */});
              }}
              className="cat-box md:px-8 justify-center space-y-2 flex mt-3  flex-col items-center cursor-pointer"
            >
              <img src="" alt="" className=" md:w-28" />
              <h2 className="md:font-medium text-center text-xs sm:text-sm md:text-base  text-gray-600">
                {}
              </h2>
            </div>
        
        
      </div>
      {/* Rental Landing Page Product Section */}
      <div className=" mt-4 container-fluid md:m-6 border-2 border-gray-300 p-3 md:p-6 bg-white md:mx-auto">
            <>
              <div className="flex justify-between mb-8">
                <h2 className="text-2xl font-medium">e.subcategory</h2>
                <button
                  onClick="" /*() => {
                    navigate("/all-product", {
                      state: [
                        rentalPro
                          ?.filter((item) => {
                            return item?.subcategory === e._id;
                          })
                          .map((e) => {
                            return e;
                          }),
                        `${e.subcategory}`,
                      ],
                    });
                  }*/
                  className="bg-black text-white px-6 py-1 rounded-md"
                >
                  View All
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                
                      <>
                        <ReanCard e="e" />
                      </>
  
              </div>
            </>

      </div>
    </>
  );
};

export default RentalLanding;

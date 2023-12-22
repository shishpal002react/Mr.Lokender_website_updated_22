import React, { useState } from "react";
import commision from "../../MyComponents/Images/commision.png";
import listing from "../../MyComponents/Images/listing.png";
import brand from "../../MyComponents/Images/brand.png";
import customer from "../../MyComponents/Images/customer.png";

import { useNavigate } from "react-router-dom";
import Footer from "../Homepage/Footer/Footer";
import { AiOutlineMobile } from "react-icons/ai";
import "./BecomeSeller.css";
import SellerNav from "./SellerNav";
import Navbar from '../Homepage/Navbar/Navbar'
import NavbarCategory2 from '../Homepage/NavbarCategory/NavbarCategory2'

const BecomeSeller = () => {
  const navigate = useNavigate();
  const [num, setNum] = useState();
  return (
    <>
      <div className="banner flex md:justify-end justify-center  mx-auto h-52 md:h-[365px] items-center">
        {/* <div className="">
          <h2 className="text-4xl font-medium">Welcome to Boon Seller</h2>
        </div> */}
        <div className="md:mr-20 mt-28 space-y-3 md:-mt-10 jus">
          <h2 className=" text-2xl  md:text-white font-medium">Join us Now!</h2>
          <div className="flex">
            <div className="flex bg-white items-center rounded-md p-2 md:pr-10">
              <AiOutlineMobile className="text-xl" />
              <input
                onChange={(e) => {
                  setNum(e.target.value);
                }}
                className="pl-1 outline-none bg-transparent"
                type="tel"
                maxLength={10}
                placeholder="Enter Phone Number"
                name=""
                id=""
                value={num}
              />
            </div>

            <button
              onClick={() => {
                navigate("/seller-registration", { state: num });
              }}
              className="bg-[#FFCC00] px-3 mx-2 rounded-md font-medium"
            >
              {" "}
              Register Now
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid grid mt-7 md:mt-0 md:grid-cols-3 md:m-4 space-y-3 md:space-y-0">
        <div className="flex bg-white mx-2 shadow-lg space-x-5 px-4 py-6 rounded-md border border-[#00000032] items-center ">
          <img
            className="w-32 rounded-full"
            src="https://pbs.twimg.com/profile_images/1412072732053819396/7SKSaXu1_400x400.jpg"
            alt=""
          />
          <div className="space-y-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              eius?
            </p>
            <h3 className="font-semibold">Mr. Deepak Rathor</h3>
          </div>
        </div>
        <div className="flex mx-2 bg-white shadow-lg px-4 py-6 rounded-md border border-[#00000032] items-center space-x-5 ">
          <img
            className="w-32 rounded-full"
            src="https://pbs.twimg.com/profile_images/1412072732053819396/7SKSaXu1_400x400.jpg"
            alt=""
          />
          <div className="space-y-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              eius?
            </p>
            <h3 className="font-semibold">Mr. Deepak Rathor</h3>
          </div>
        </div>
        <div className="flex mx-2 bg-white shadow-lg px-4 py-6 rounded-md border border-[#00000032] items-center space-x-5 ">
          <img
            className="w-32 rounded-full"
            src="https://pbs.twimg.com/profile_images/1412072732053819396/7SKSaXu1_400x400.jpg"
            alt=""
          />
          <div className="space-y-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              eius?
            </p>
            <h3 className="font-semibold">Mr. Deepak Rathor</h3>
          </div>
        </div>
      </div>
      <div className="container-fluid mx-4 mt-20 md:w-3/5 md:mx-auto space-y-10">
        <h2 className="text-4xl font-semibold text-center">
          What is Boon Seller
        </h2>
        <p className="text-justify text-gray-600">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          <br />
          <br />
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="mt-32  pt-20 bg-white space-y-5 container-fluid mx-auto">
        <h2 className="text-3xl font-medium text-center">
          WHAT ARE THE BENEFITS FOR THE SELLERS?
        </h2>
        <h4 className="text-gray-500 text-center">
          Sellers can avail multiple benefits by listing their products under
          Boon6.
        </h4>
        <div className="md:flex grid grid-cols-1 md:w-4/5 md:mx-auto">
          <div className="flex m-6 space-x-6">
            <img src={commision} alt="" />
            <div className="">
              <h2 className="text-lg font-semibold">0% Commission</h2>
              <p className="text-base text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                fringilla aliquam, nullam in hendrerit cursus lobortis. Sapien
                vitae sit scelerisque metus condimentum.{" "}
              </p>
            </div>
          </div>
          <div className="flex m-6 space-x-6">
            <img src={listing} alt="" />
            <div className="">
              <h2 className="text-lg font-semibold">0% Commission</h2>
              <p className="text-base text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                fringilla aliquam, nullam in hendrerit cursus lobortis. Sapien
                vitae sit scelerisque metus condimentum.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex grid grid-cols-1 md:w-4/5 md:mx-auto">
          <div className="flex m-6 space-x-6">
            <img src={brand} alt="" />
            <div className="">
              <h2 className="text-lg font-semibold">0% Commission</h2>
              <p className="text-base text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                fringilla aliquam, nullam in hendrerit cursus lobortis. Sapien
                vitae sit scelerisque metus condimentum.{" "}
              </p>
            </div>
          </div>
          <div className="flex m-6 space-x-6">
            <img src={customer} alt="" />
            <div className="">
              <h2 className="text-lg font-semibold">0% Commission</h2>
              <p className="text-base text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                fringilla aliquam, nullam in hendrerit cursus lobortis. Sapien
                vitae sit scelerisque metus condimentum.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center  pb-20">
          <button
            onClick={() => {
              navigate("/seller-registration");
            }}
            className="bg-black text-white font-medium py-3 mt-20 px-10 rounded-md  "
          >
            Become a Boon Seller
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default BecomeSeller;

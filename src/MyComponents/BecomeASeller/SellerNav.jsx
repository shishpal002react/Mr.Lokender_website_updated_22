import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../MyComponents/Images/logo.png";
import { CgMenuRightAlt } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import "./SellerLogin.css";
import { RiCloseFill } from "react-icons/ri";
import { useFormik } from "formik";
import axios from "axios";
import Baseurl from "../../Baseurl";
import { toast } from "react-toastify";

const SellerNav = () => {
  const navigate = useNavigate();
  const [seller, setSeller] = useState(true);
  const [seller1, setSeller1] = useState(true);
  // Login
  const login = async (data) => {
    let url = `${Baseurl()}api/v1/login/seller`;
    try {
      const res = await axios.post(url, data);
      console.log(res);
      setSeller1(!seller1);
      toast.success("Login! Success", { autoClose: 500 });
    } catch (error) {
      console.log(error);
    }
  };
  const formik1 = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      login(values);
    },
  });
  // Register
  const register = async (data) => {
    let url = `${Baseurl()}api/v1/register/seller`;
    try {
      const res = await axios.post(url, data);
      console.log(res);
      setSeller1(!seller1);
      toast.success("Registeration! Success", { autoClose: 500 });
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      password: "",
      Name: "",
      email: "",
      Mobile: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      register(values);
    },
  });
  return (
    <>
      <div className="container-fluid flex justify-between px-6 h-20 items-center bg-black text-white">
        <div className="logo cursor-pointer font-medium">
          <img
            onClick={() => {
              navigate("/");
            }}
            className="w-28 md:w-32"
            src={logo}
            alt=""
          />
        </div>
        <nav className="lg:flex hidden md:hidden">
          <ul className="flex cursor-pointer space-x-10 font-normal">
            <li>Fee Structure</li>
            <li>Services</li>
            <li>Resources</li>
            <li>FAQs</li>
            <li>Know more about Boon6</li>
          </ul>
        </nav>
        <div className="right-menu flex items-center space-x-6">
          <div
            onClick={() => {
              setSeller(!seller);
            }}
            className="account hidden cursor-pointer md:flex items-center space-x-2"
          >
            {/* <RiAccountPinCircleFill className="text-2xl " /> */}
            <h2 className=" bg-white text-black py-1 px-3 rounded-md text-l font-medium ">
              Login for existing sellers
            </h2>
          </div>
          <div className="cart cursor-pointer flex items-center space-x-2">
            <h2
              onClick={() => {
                setSeller1(!seller1);
                // navigate("/seller-registration");
              }}
              className="bg-[#F1C22E] text-black py-1 px-3 rounded-md text-l hidden md:flex font-medium"
            >
              Register Now
            </h2>
            <CgMenuRightAlt className=" text-3xl md:hidden" />
          </div>
        </div>
      </div>
      {/* Login */}
      <div
        className={
          seller
            ? "hidden"
            : "fixed top-0 flex justify-center items-center  left-0 z-20 h-screen bg-[rgb(0,0,0,0.6)]    w-full"
        }
      >
        <div className="relative p-5 md:w-8/12 shadow-md rounded-sm lg:w-5/12  mx-auto bg-white">
          <div class=" w-full">
            <form onSubmit={formik1.handleSubmit}>
              <h2 className="text-center pb-3 text-xl tracking-wider">
                LogIn Seller
              </h2>
              <RiCloseFill
                onClick={() => {
                  setSeller(!seller);
                }}
                className="cursor-pointer absolute top-5 right-4 text-2xl"
              />

              {/* <!-- Email input --> */}
              <div class="mb-6">
                <input
                  type="email"
                  name="email"
                  value={formik1.values.email}
                  onChange={formik1.handleChange}
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>

              {/* <!-- Password input --> */}
              <div class="mb-6">
                <input
                  type="password"
                  name="password"
                  value={formik1.values.password}
                  onChange={formik1.handleChange}
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Log In
              </button>
              {/* <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p class="text-center font-semibold mx-4 mb-0">OR</p>
              </div> */}
            </form>
          </div>
        </div>
      </div>
      {/* Register */}
      <div
        className={
          seller1
            ? "hidden"
            : "fixed top-0 flex justify-center items-center  left-0 z-20 h-screen bg-[rgb(0,0,0,0.6)]    w-full"
        }
      >
        <div className="relative p-5 md:w-8/12 shadow-md rounded-sm lg:w-5/12  mx-auto bg-white">
          <div class=" w-full">
            <form onSubmit={formik.handleSubmit}>
              <h2 className="text-center pb-3 text-xl tracking-wider">
                Register Seller
              </h2>
              <RiCloseFill
                onClick={() => {
                  setSeller1(!seller1);
                }}
                className="cursor-pointer absolute top-5 right-4 text-2xl"
              />
              {/* <!-- name input --> */}
              <div class="mb-6">
                <input
                  type="text"
                  name="Name"
                  value={formik.values.Name}
                  onChange={formik.handleChange}
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Full Name"
                />
              </div>
              {/* <!-- Email input --> */}
              <div class="mb-6">
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>
              {/* <!-- Mobile input --> */}
              <div class="mb-6">
                <input
                  type="tel"
                  name="Mobile"
                  maxLength={10}
                  value={formik.values.Mobile}
                  onChange={formik.handleChange}
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Phone"
                />
              </div>
              {/* <!-- Password input --> */}
              <div class="mb-6">
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Register
              </button>
              {/* <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p class="text-center font-semibold mx-4 mb-0">OR</p>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerNav;

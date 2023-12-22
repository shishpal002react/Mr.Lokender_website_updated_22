/** @format */

import React, { useEffect, useState, useRef } from "react";
import { BiSearch, BiSupport, BiTrendingUp } from "react-icons/bi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { CgMenuRightAlt } from "react-icons/cg";
import logo from "../../../Images/d52.png";
import { MdTrendingUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaUserCircle, FaRegHeart, FaMapMarkerAlt } from "react-icons/fa";
import { BsChatLeftText, BsGift } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import {
  AiOutlineLogout,
  AiOutlineDownload,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import Baseurl from "../../../Baseurl";
import axios from "axios";
import { toast } from "react-toastify";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const loginRef = useRef();
  const signupRef = useRef();
  const otpRef = useRef();
  const [cart, setCart] = useState(false);
  const [category, setCategory] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const [show, setShow] = useState(false);
  const [otpSend, setOtpSend] = useState(false);
  const [regShow, setRegShow] = useState(false);
  const [searchedText, setSearchedText] = useState(false);
  const [mobileNumber, setMobileNumber] = useState(0);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  //overlay effect
  const [showOverlay, setShowOverlay] = useState(false);

  //customer Id
  const [customerId, setCustomerId] = useState();

  const otpVerify = async (otp) => {
    // const number = signupRef.current.value;
    const data = {
      mobileNumber: mobileNumber,
      otp: otp,
    };

    let url = `${Baseurl()}api/v1/verify/otp`;
    console.log("url", url);
    try {
      const res = await axios.post(url, data);
      console.log("otp", res);
      localStorage.setItem("boon", res.data.token);
      toast.success("SingUp ! Success");

      localStorage.setItem("userNumber", JSON.stringify(mobileNumber));
      // navigate("/user/login");
      setRegShow(false);
      setOtpSend(false);
      setMobileNumber("");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const otp = otpRef.current.value;
    // const num = numberRef.current.value;
    console.log("otp value", otp);
    // console.log("numer in otp sub", mobileNumber);
    // console.log("number value", num)
    otpVerify(otp);
  };

  // const searchHandler = async(e) => {
  //   e.preventDefault();
  //   navigate("/search");
  // }

  // login user api
  const login = async (data) => {
    const mobile = {
      mobileNumber: data,
    };
    console.log("mobile", mobile);
    let url = `${Baseurl()}api/v1/login`;
    try {
      const res = await axios.post(url, mobile);
      console.log(res, "sign");
      // localStorage.setItem("boon", res.data.token);
      // const myJSON = JSON.stringify(res.data.user);
      // localStorage.setItem("userDataBoon", myJSON);
      // navigate("/");
      // setShow(false);
      // toast.success("LogIn ! Success");
      setOtpSend(true);
      setMobileNumber(data);
      const currOtp = res.data.user.otp;
      setCustomerId(res.data.user._id);
      toast.success("Otp sent. OTP is: " + currOtp);
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  };

  // signup user api
  const signUp = async (data) => {
    const mobile = {
      mobileNumber: data,
    };

    let url = `${Baseurl()}api/v1/register`;
    console.log("url", url);
    console.log("mobile", mobile);
    try {
      const res = await axios.post(url, mobile);
      console.log("signup", res);

      // localStorage.setItem("boon", res.data.token);
      // navigate("/user/otp");
      setMobileNumber(data);
      setOtpSend(true);
      const currOtp = res.data.user.otp;
      setCustomerId(res.data.user._id);
      toast.success("Otp ! Success. OTP is: " + currOtp);
      // toast.success("SingUp ! Success");
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  };

  const loginHandler = () => {
    const number = loginRef.current.value;
    login(number);
  };
  const signupHandler = () => {
    const number = signupRef.current.value;
    signUp(number);
  };

  const handleLogin = () => {
    console.log("clicked");
    setRegShow(false);
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  // Get Sub Category
  const getCat = async () => {
    let url = `${Baseurl()}api/v1/admin/allCategory`;
    try {
      const res = await axios.get(url);
      setCategory(res.data.categories);
      // console.log(res.data, "subc");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCat();
  }, []);

  //sub category
  const getSubCat = async () => {
    let url = `${Baseurl()}api/v1/admin/allSubCategory`;
    try {
      const res = await axios.get(url);
      setSubCat(res.data.categories);
      // setFilterData(res.data.categories);
      console.log(res.data, "subc");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubCat();
  }, []);

  //apply filter
  const filterHandler = (value) => {
    const res = subCat.filter((f) => f?.name?.toLowerCase()?.includes(value));
    setFilterData(res);
    console.log("filter data", filterData);
  };

  const handleSignUp = () => {
    setShow(false);
    setRegShow(true);
  };

  const handleSignUpClose = () => {
    setRegShow(false);
  };

  const loginOtpVerify = async (otp) => {
    const data = {
      mobileNumber: mobileNumber,
      otp: otp,
    };

    let url = `${Baseurl()}api/v1/verify/otp`;
    console.log("url", url);
    try {
      const res = await axios.post(url, data);
      console.log("otp", res);
      localStorage.setItem("boon", res.data.token);
      toast.success("Login ! Success");
      localStorage.setItem("boon", res.data.token);
      const myJSON = JSON.stringify(res.data.user);
      localStorage.setItem("userDataBoon", myJSON);
      localStorage.setItem("userNumber", JSON.stringify(mobileNumber));
      // navigate("/user/login");
      setShow(false);
      setOtpSend(false);
      setMobileNumber("");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  };

  const handleLoginOtpSubmit = (e) => {
    e.preventDefault();
    const otp = otpRef.current.value;
    // const num = numberRef.current.value;
    // console.log("otp value", otp);
    // console.log("numer in otp sub", mobileNumber);
    // console.log("number value", num)
    loginOtpVerify(otp);
  };

  const Login = () => {
    return (
      <>
        {otpSend ? (
          <div className="logincont">
            <div className="logincont2">
              <div className="logincont2l">
                <h1>Login</h1>
                <p>Verify Otp</p>
              </div>
              <div className="logincont2r">
                <div className="X">
                  <i class="fa-solid fa-x" onClick={handleClose}></i>
                </div>

                <div className="loginform">
                  <div className="wrapper">
                    <div class="user-input-wrp">
                      <br />
                      <input
                        type="text"
                        class="inputText"
                        required
                        ref={otpRef}
                      />
                      <span class="floating-label">Enter OTP</span>
                    </div>
                  </div>
                </div>
                <p className="inputbelowtxt">
                  By continuing, you agree to Flipkart's{" "}
                  <span>Terms Of Use</span> and
                  <span>Privacy Policy.</span>
                </p>
                <button className="loginbtn" onClick={handleLoginOtpSubmit}>
                  Verify OTP
                </button>
                {/* <div className="belowtext">
                <p onClick={handleSignUp}>New To Flipkart? Create Account</p>
              </div> */}
              </div>
            </div>
          </div>
        ) : (
          <div className="logincont">
            <div className="logincont2">
              <div className="logincont2l">
                <h1>Login</h1>
                <p>Get access to your Orders, wishlist, and Recommendations</p>
              </div>
              <div className="logincont2r">
                <div className="X">
                  <i class="fa-solid fa-x" onClick={handleClose}></i>
                </div>

                <div className="loginform">
                  <div className="wrapper">
                    <div class="user-input-wrp">
                      <br />
                      <input
                        type="text"
                        class="inputText"
                        required
                        ref={loginRef}
                      />
                      <span class="floating-label">
                        Enter Email / Mobile Number
                      </span>
                    </div>
                  </div>
                </div>
                <p className="inputbelowtxt">
                  By continuing, you agree to Flipkart's{" "}
                  <span>Terms Of Use</span> and
                  <span>Privacy Policy.</span>
                </p>
                <button className="loginbtn" onClick={loginHandler}>
                  Request OTP
                </button>
                <div className="belowtext">
                  <p onClick={handleSignUp}>New To Flipkart? Create Account</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  const SignUp = () => {
    return (
      <>
        {otpSend ? (
          <div className="logincont">
            <div className="logincont2">
              <div className="logincont2l">
                <h1>Enter OTP</h1>
                {/* <p>SignUp with your mobile Number to get started</p> */}
              </div>
              <div className="logincont2r">
                <div className="X">
                  <i class="fa-solid fa-x" onClick={handleSignUpClose}></i>
                </div>

                <div className="loginform">
                  <div className="wrapper">
                    <div className="input-data">
                      <input type="text" ref={otpRef} placeholder="Enter Otp" />
                      {/* <label>Enter Mobile Number</label> */}
                    </div>
                  </div>
                </div>
                <p className="inputbelowtxt">
                  By continuing, you agree to Flipkart's{" "}
                  <span>Terms Of Use</span> and
                  <span>Privacy Policy.</span>
                </p>
                <button className="loginbtn" onClick={handleOtpSubmit}>
                  Continue
                </button>
                {/* <button className="signupbtn" onClick={handleLogin}>
                Existing User? Log in
              </button>
              <div className="belowtext">
                <p>New To Flipkart? Create Account</p>
              </div> */}
              </div>
            </div>
          </div>
        ) : (
          <div className="logincont">
            <div className="logincont2">
              <div className="logincont2l">
                <h1>Looks Like You are New Here</h1>
                <p>SignUp with your mobile Number to get started</p>
              </div>
              <div className="logincont2r">
                <div className="X">
                  <i class="fa-solid fa-x" onClick={handleSignUpClose}></i>
                </div>

                <div className="loginform">
                  <div className="wrapper">
                    <div className="input-data">
                      <input
                        type="text"
                        ref={signupRef}
                        placeholder="Enter Mobile Number"
                      />
                      {/* <label>Enter Mobile Number</label> */}
                    </div>
                  </div>
                </div>
                <p className="inputbelowtxt">
                  By continuing, you agree to Flipkart's{" "}
                  <span>Terms Of Use</span> and
                  <span>Privacy Policy.</span>
                </p>
                <button className="loginbtn" onClick={signupHandler}>
                  Continue
                </button>
                <button className="signupbtn" onClick={handleLogin}>
                  Existing User? Log in
                </button>
                <div className="belowtext">
                  <p>New To Flipkart? Create Account</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  console.log(filterData);
  return (
    <>
      <div
        className="container-fluid  justify-center gap-6 flex  px-6 h-20 items-center  text-black "
        style={{ backgroundColor: "#A6DED2" }}
      >
        {show ? <Login /> : ""}
        {regShow ? <SignUp /> : ""}
        <div className="flex gap-2 ">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="logo cursor-pointer font-medium"
          >
            <img
              className="w-38 md:w-32"
              src={logo}
              style={{ width: "100%" }}
              alt=""
            />
          </div>

          <div
            class="md:flex  hidden justify-center relative  top-0 "
            style={{ top: "-10px" }}
          >
            <div>
              <div
                class="dropdown w-full relative"
                style={{
                  backgroundColor: "#fff",
                  display: "flex",
                  borderRadius: "22px",
                }}
                //tab index
              >
                {/* search all category */}
                <div
                  className="parent1"
                  style={{
                    backgroundColor: "#354892",
                    width: "40%",
                    borderRadius: "22px",
                    margin: "1%",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    paddingLeft: "20px",
                    paddingTop: "2px",
                    paddingBottom: "2px",
                    display: "none",
                  }}
                  onMouseEnter={() => setShow2(true)}
                  onMouseLeave={() => setShow2(false)}
                >
                  <p style={{ color: "#fff", marginLeft: "4%" }}>
                    All Category
                  </p>
                  <i
                    style={{
                      color: "#fff",
                      marginRight: "10%",
                      marginTop: "4%",
                    }}
                    class="fa-sharp fa-solid fa-caret-down"
                  ></i>

                  <div
                    class={show2 === true ? "" : "d-none"}
                    className="child1"
                    onMouseEnter={() => setShow2(true)}
                    onMouseLeave={() => setShow2(false)}
                  >
                    {category.length > 0 &&
                      category.map((category, i) => {
                        return (
                          <>
                            <div
                              key={i}
                              onClick={() =>
                                navigate(
                                  `/complete/categorywise/product/${category._id}`
                                )
                              }
                            >
                              {category.name}
                            </div>
                            <button
                              key={i}
                              onClick={() =>
                                navigate(
                                  `complete/categorywise/product/${category._id}`
                                )
                              }
                            >
                              {category.name}
                            </button>
                          </>
                        );
                      })}
                  </div>
                </div>

                <button
                  className=" outline-none w-96 bg-white flex rounded-md text-black p-1 parent"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ borderRadius: "22px" }}
                  onMouseEnter={() => setShow1(true)}
                  onMouseLeave={() => setShow1(false)}
                >
                  {console.log(show1)}
                  <input
                    className="outline-none pl-4 pt-1 bg-transparent w-full "
                    placeholder="Search anything"
                    type="text"
                    // onmouseover={setSearchShow(true)}
                    onChange={(e) => filterHandler(e.target.value)}
                  />
                  <BiSearch className="text-2xl  cursor-pointer text-black mr-2 mt-1" />
                  {/* <BiSearch className="text-2xl  cursor-pointer text-black mr-2 mt-1"  onClick={searchHandler}/> */}
                </button>

                <div
                  className={show1 ? "child" : "d-none"}
                  onMouseEnter={() => setShow1(true)}
                  onMouseLeave={() => setShow1(false)}
                >
                  {filterData.length > 0 &&
                    filterData?.splice(0, 6)?.map((subCategory, i) => {
                      return (
                        <>
                          <div
                            key={i}
                            onClick={() =>
                              navigate(
                                `/complete/subcategorywise/product/${subCategory._id}`
                              )
                            }
                            style={{ cursor: "pointer" }}
                          >
                            {subCategory.name}
                          </div>
                        </>
                      );
                    })}
                </div>
                {/* <ul
                class=" w-full
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                aria-labelledby="dropdownMenuButton1"
              >
                {subCat.map((e, i) => {
                  return (
                    <li
                      key={i}
                      className="flex hover:bg-gray-100 mx-2 rounded-lg items-center pl-2 "
                    >
                      <MdTrendingUp className="text-black text-lg" />
                      <a
                        class="
                dropdown-item
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-nowrap
                bg-transparent
                text-gray-700
          
              "
                        href="#"
                      >
                        e.subcategory
                      </a>
                    </li>
                  );
                })}
              </ul> */}
              </div>
            </div>
          </div>
        </div>

        <nav className="lg:flex hidden md:hidden">
          <ul className="flex cursor-pointer space-x-10 font-normal">
            <li
              onClick={() => {
                navigate("/rent");
              }}
              className="ml-2 background-color-navbar-hidden mt-4"
            >
              Pay Rent
            </li>
            <li
              // onClick={() => {
              //   navigate("/seller-registration");
              // }}
              className="background-color-navbar-hidden mt-4"
            >
              Upcoming a Seller
            </li>
            {/* <div class="right-menu flex items-center space-x-6">
              <button
                className="flex  space-x-3"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <RiAccountPinCircleFill className="text-2xl " />
                <h2 className="text-l font-medium ">Account</h2>
              </button>
              <ul
                class=" space-y-4
          dropdown-menu w-52 
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                aria-labelledby="dropdownMenuButton1"
              >
                <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                  <FaUserCircle
                    className="text-2xl"
                    style={{ color: " #EB6D20" }}
                    onClick={() => {
                      navigate("/profile");
                    }}
                  />
                  <a
                    class="
              dropdown-item
              text-base
              py-2
              px-2
              font-medium
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                    
                  >
                    My Profile
                  </a>
                </li>
                <li onClick={() => navigate("/orders")} className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                  <FiShoppingBag
                    className="text-2xl"
                    style={{ color: " #EB6D20" }}
                  />
                  <a
                    class="
            dropdown-item
            text-base
            py-2
            px-2
            font-medium
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                    href="#"
                  >
                    My Orders
                  </a>
                </li>
                <li onClick={() => navigate("/wishlist")} className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                  <FaRegHeart
                    className="text-2xl"
                    style={{ color: " #EB6D20" }}
                  />
                  <a
                    class="
            dropdown-item
            text-base
            py-2
            px-2
            font-medium
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                    href="#"
                  >
                    Wishlist
                  </a>
                </li>
                <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                  <BsChatLeftText
                    className="text-2xl"
                    style={{ color: " #EB6D20" }}
                  />
                  <a
                    class="
            dropdown-item
            text-base
            py-2
            px-2
            font-medium
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                    href="#"
                  >
                    My Chats
                  </a>
                </li>
                <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                  <BsGift className="text-2xl" style={{ color: " #EB6D20" }} />
                  <a
                    class="
            dropdown-item
            text-base
            py-2
            px-2
            font-medium
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                    href="#"
                  >
                    Coupon
                  </a>
                </li>
                <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                  <IoMdNotifications
                    className="text-2xl"
                    style={{ color: " #EB6D20" }}
                  />
                  <a
                    class="
            dropdown-item
            text-base
            py-2
            px-2
            font-medium
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                    href="#"
                  >
                    Notification
                  </a>
                </li>
                <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                  <AiOutlineLogout
                    className="text-2xl"
                    style={{ color: " #EB6D20" }}
                  />
                  <span
                    class="
            dropdown-item
            text-base
            py-2
            px-2
            font-medium
            block
            w-full
            cursor-pointer
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                    onClick={() => {
                      localStorage.removeItem("boon");
                      localStorage.removeItem("userDataBoon");
                      localStorage.removeItem("userNumber");
                      localStorage.removeItem("userWishlist");
                      navigate("/");
                    }}
                  >
                    Logout
                  </span>
                </li>
              </ul>
            </div> */}

            <div className="right-menu flex items-center space-x-6">
              <div className="account hidden cursor-pointer md:flex items-center space-x-2">
                <div class="flex justify-center">
                  <div>
                    <div class="dropdown  relative mt-4">
                      <button
                        className="flex  space-x-1"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <p className="text-l font-normal ">More</p>
                        <MdKeyboardArrowDown className="text-2xl " />
                      </button>
                      <ul
                        class=" space-y-4
          dropdown-menu w-52 
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                          <IoMdNotifications
                            className="text-2xl"
                            style={{ color: " #EB6D20" }}
                          />
                          <a
                            class="
              dropdown-item
              text-base
              py-2
              px-2
              font-medium
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                            href="#"
                          >
                            Notification preferences
                          </a>
                        </li>
                        <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                          <BiSupport
                            className="text-2xl"
                            style={{ color: " #EB6D20" }}
                          />
                          <a
                            class="
            dropdown-item
            text-base
            py-2
            px-2
            font-medium
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                            href="#"
                          >
                            24X7 Customer Care
                          </a>
                        </li>
                        <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                          <BiTrendingUp
                            className="text-2xl"
                            style={{ color: " #EB6D20" }}
                          />
                          <a
                            class="
            dropdown-item
            text-base
            py-2
            px-2
            font-medium
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                            href="#"
                          >
                            Advertise
                          </a>
                        </li>
                        <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                          <AiOutlineDownload
                            className="text-2xl"
                            style={{ color: " #EB6D20" }}
                          />
                          <a
                            class="
            dropdown-item
            text-base
            py-2
            px-2
            font-medium
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                            href="#"
                          >
                            Download App
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <RiAccountPinCircleFill className="text-2xl " />
            <h2 className="text-l font-medium ">Account</h2> */}
              </div>
            </div>

            {/* <li>More</li> */}
          </ul>
        </nav>

        {/* /overlay effect
        <div className="overlay_effect"></div> */}

        <div className="right-menu flex items-center space-x-6">
          <div className="account hidden md:flex items-center space-x-2">
            <div class="flex justify-center">
              <div>
                {localStorage.getItem("boon") === null ? (
                  <div className="flex items-center gap-1.5">
                    <h2
                      onClick={handleSignUp}
                      className="text-l font-medium cursor-pointer"
                    >
                      SignUp
                    </h2>
                    <h2
                      onClick={handleLogin}
                      className="text-l font-medium cursor-pointer"
                    >
                      Login
                    </h2>
                  </div>
                ) : (
                  <div class="dropdown  relative">
                    <button
                      className="flex  space-x-3"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <RiAccountPinCircleFill className="text-2xl " />
                      <p className="text-l font-medium ">Account</p>
                    </button>
                    <ul
                      class=" space-y-4
          dropdown-menu w-52 
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li
                        className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100"
                        onClick={() => {
                          navigate("/profile");
                        }}
                      >
                        <FaUserCircle className="text-2xl" />
                        <a
                          class="
              dropdown-item
              text-base
              py-2
              px-2
              font-medium
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                        >
                          My Profile
                        </a>
                      </li>
                      <li
                        onClick={() => navigate(`/orders`)}
                        className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100"
                      >
                        <FiShoppingBag className="text-2xl" />
                        <a
                          class="
            dropdown-item
            text-base
            py-2
            px-2
            font-medium
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                          href="#"
                        >
                          My Orders
                        </a>
                      </li>
                      <li
                        onClick={() => navigate("/wishlist")}
                        className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100"
                      >
                        <FaRegHeart className="text-2xl" />
                        <a
                          class="
            dropdown-item
            text-base
            py-2
            px-2
            font-medium
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                          href="#"
                        >
                          Wishlist
                        </a>
                      </li>
                      <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                        <BsChatLeftText className="text-2xl" />
                        <a
                          class="
            dropdown-item
            text-base
            py-2
            px-2
            font-medium
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                          href="#"
                        >
                          My Chats
                        </a>
                      </li>
                      <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                        <BsGift className="text-2xl" />
                        <Link
                          class="
            dropdown-item
            text-base
            py-2
            px-2
            font-medium
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                          to="/couponpage"
                        >
                          Coupon
                        </Link>
                      </li>
                      <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                        <IoMdNotifications className="text-2xl" />
                        <Link
                          class="
            dropdown-item
            text-base
            py-2
            px-2
            font-medium
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                          to="/notification-page"
                        >
                          Notification
                        </Link>
                      </li>
                      <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                        <AiOutlineLogout className="text-2xl" />
                        <span
                          class="
            dropdown-item
            text-base
            py-2
            px-2
            font-medium
            block
            w-full
            cursor-pointer
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                          onClick={() => {
                            localStorage.removeItem("boon");
                            localStorage.removeItem("userDataBoon");
                            localStorage.removeItem("userNumber");
                            localStorage.removeItem("userWishlist");
                            navigate("/");
                          }}
                        >
                          Logout
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="cart cursor-pointer flex items-center space-x-2">
            <FiShoppingBag
              onClick={() => {
                navigate("/cart");
              }}
              className="mr-3 md:flex hidden  md:mr-0 text-2xl"
            />
            <h2
              onClick={() => {
                navigate("/cart");
              }}
              className="text-l hidden md:flex font-medium"
            >
              Cart
            </h2>
            <CgMenuRightAlt className=" text-3xl hidden" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

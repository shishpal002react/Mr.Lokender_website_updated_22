import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import Baseurl from "../../../Baseurl";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(false);
  const [subCat, setSubCat] = useState([]);
  const [show, setShow] = useState(false);
  const [regShow, setRegShow] = useState(false);

  const handleLogin = () => {
    console.log("clicked");
    setRegShow(false);
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
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
    getSubCat();
  }, []);

  const handleSignUp = () => {
    setShow(false);
    setRegShow(true);
  };

  const handleSignUpClose = () => {
    setRegShow(false);
  };

  const Login = () => {
    return (
      <>


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
                  <div className="input-data">
                    <input type="text" />
                    <label>Enter Email/ Mobile Number</label>
                  </div>
                </div>
              </div>
              <p className="inputbelowtxt">
                By continuing, you agree to Flipkart's <span>Terms Of Use</span>{" "}
                and
                <span>Privacy Policy.</span>
              </p>
              <button className="loginbtn">Request OTP</button>
              <div className="belowtext">
                <p onClick={handleSignUp}>New To Flipkart? Create Account</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const SignUp = () => {
    return (
      <>
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
                    <input type="text" />
                    <label>Enter Mobile Number</label>
                  </div>
                </div>
              </div>
              <p className="inputbelowtxt">
                By continuing, you agree to Flipkart's <span>Terms Of Use</span>{" "}
                and
                <span>Privacy Policy.</span>
              </p>
              <button className="loginbtn">Continue</button>
              <button className="signupbtn" onClick={handleLogin}>
                Existing User? Log in
              </button>
              <div className="belowtext">
                <p>New To Flipkart? Create Account</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className="container-fluid  justify-center gap-6 flex  px-6 h-20 items-center  text-black "
        style={{ backgroundColor: "#A6DED2" }}
      >
        {show? <Login /> : ""}
        {regShow? <SignUp /> : ""}
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

          {/* <div className=""> */}
          {/* <input
              className="outline-none bg-transparent w-full"
              placeholder="Search for Products, brands and more"
              type="text"
            /> */}
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
                tabIndex='0'
              >
                <div
                  style={{
                    backgroundColor: "#354892",
                    width: "40%",
                    borderRadius: "22px",
                    margin: "1%",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    cursor : 'pointer' ,
                    paddingLeft : '20px'
                  }}
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
                  <div class="dropdown-content">
                  <button>Mobile</button>
                    <br />
                  <button >Laptop</button>
                  <br />
                  <button >Fashion</button>
                  <br />
                  <button >Electronics</button>
                  <br />
                  <button>Grocery</button>
                    {/* <p style={{ color: "#333" }}>Mobile</p>
                    <p style={{ color: "#333" }}>Laptop</p>
                    <p style={{ color: "#333" }}>Fashion</p>
                    <p style={{ color: "#333" }}>Electronics</p>
                    <p style={{ color: "#333" }}>Grocery</p> */}
                  </div>
                </div>
                <button
                  className=" outline-none w-96 bg-white flex rounded-md text-black p-1 "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ borderRadius: "22px" }}
                >
                  <input
                    className="outline-none pl-1 bg-transparent w-full "
                    placeholder="Search anything"
                    type="text"
                  />
                  <BiSearch className="text-2xl  cursor-pointer text-black" />
                </button>
                {/*<ul
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
              </ul>*/}
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
              className="ml-2"
            >
              Pay Rent
            </li>
            <li
              onClick={() => {
                navigate("/seller-registration");
              }}
            >
              Become a Seller
            </li>
            <div class="right-menu flex items-center space-x-6">
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
                    My Profile
                  </a>
                </li>
                <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
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
                <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
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
                      navigate("/");
                    }}
                  >
                    Logout
                  </span>
                </li>
              </ul>
            </div>

            <div className="right-menu flex items-center space-x-6">
              <div className="account hidden cursor-pointer md:flex items-center space-x-2">
                <div class="flex justify-center">
                  <div>
                    <div class="dropdown  relative">
                      <button
                        className="flex  space-x-1"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <h2 className="text-l font-normal ">More</h2>
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
                          href="#"
                        >
                          My Profile
                        </a>
                      </li>
                      <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
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
                      <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
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
                        <IoMdNotifications className="text-2xl" />
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
            <button
              onClick={() => {
                navigate("/grocery");
              }}
              className="md:hidden h-12 rounded-lg font-medium text-lg w-32 bg-[#FF8D27]"
            >
              Grocery
            </button>
          </div>
        </div>
      </div>

      <div className="flex md:hidden bg-white text-black rounded-md m-2 p-2 ">
        <input
          className="outline-none pl-1 bg-transparent w-full"
          placeholder="Search for Products, brands and more"
          type="text"
        />
        <BiSearch className="text-2xl  cursor-pointer text-black" />
      </div>
      <div
        className={
          cart
            ? "fixed bottom-0 cartpop transition-all duration-150 left-0 z-10 w-80 bg-white shadow-2xl h-[90.5vh]  md:h-[91.5vh]"
            : "fixed bottom-0  transition-all duration-100 cartpop -left-full z-10 md:w-96 bg-white shadow-2xl h-[91.5vh]"
        }
      >
        <div className="">
          <div className="flex justify-between items-center shadow-xl border rounded-2xl m-4 px-2 py-4">
            <img
              className="w-20"
              src="https://rukminim2.flixcart.com/image/880/1056/kq9ta4w0/t-shirt/r/y/q/s-723-2-723-4-723-5-ftx-original-imag4bmycvkx52yd.jpeg?q=50"
              alt=""
            />
            <div className="-ml-6">
              <h2 className="text-lg font-medium">Men's Tshirt</h2>
              <h2>Rs. 299 x 1</h2>
            </div>
            <AiOutlineCloseCircle className="cursor-pointer text-xl" />
          </div>
          <div className="flex justify-between items-center shadow-xl border rounded-2xl m-4 px-2 py-4">
            <img
              className="w-20"
              src="https://rukminim2.flixcart.com/image/880/1056/kq9ta4w0/t-shirt/r/y/q/s-723-2-723-4-723-5-ftx-original-imag4bmycvkx52yd.jpeg?q=50"
              alt=""
            />
            <div className="-ml-6">
              <h2 className="text-lg font-medium">Men's Tshirt</h2>
              <h2>Rs. 299 x 1</h2>
            </div>
            <AiOutlineCloseCircle className="cursor-pointer text-xl" />
          </div>
          <div className="flex justify-between items-center m-4 px-2 py-4">
            <button
              onClick={() => {
                navigate("/cart");
              }}
              className="shadow-xl text-white bg-black border px-6 rounded-lg py-2"
            >
              View Cart
            </button>
            <button className="shadow-xl text-white bg-black border px-6 rounded-lg py-2">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

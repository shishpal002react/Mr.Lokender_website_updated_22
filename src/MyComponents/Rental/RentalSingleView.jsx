import React, { useState } from "react";
import Navbar from "../Homepage/Navbar/Navbar";
import { RiTruckLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { MdLocationOn, MdOutlineAccountBalanceWallet } from "react-icons/md";
import Footer from "../Homepage/Footer/Footer";
import { AiFillStar } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Baseurl from "../../Baseurl";
import axios from "axios";
import { toast } from "react-toastify";

const RentalSingleView = () => {
  const navigate = useNavigate();
  const loation = useLocation();
  const data = loation.state;
  const token = localStorage.getItem("boon");
  const [rentalPro, setRentalPro] = useState([]);
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
      console.log(res);
      toast.success("SuccessFully ! Added to cart");
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  };
  // Getrental by id products
  const getRental = async () => {
    let url = `${Baseurl()}api/rental/62d1eaa5371c4ffa33f364c0`;
    try {
      const res = await axios.get(url);
      setRentalPro(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="mt-5">
        <div className="md:flex space-y-4 md:space-y-0 ">
          <div className="md:w-3/5 bg-white rounded-md p-6 mx-4">
            <div className=" flex justify-center">
              <img
                className="h-96 self-center"
                src={data?.productimage}
                alt=""
              />
            </div>
            <div className="border-t-2 mt-2 grid grid-cols-5">
              <img
                className="rounded-lg w-32 m-4"
                src={data?.productimage}
                alt=""
              />
              <img
                className="rounded-lg w-32 m-4"
                src={data?.productimage}
                alt=""
              />
              <img
                className="rounded-lg w-32 m-4"
                src={data?.productimage}
                alt=""
              />
              <img
                className="rounded-lg w-32 m-4"
                src={data?.productimage}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white md:w-2/5 rounded-md p-6 mx-4">
            <h2 className="text-2xl font-semibold">{data?.title}</h2>
            <div className="flex mt-3">
              <ul class="flex justify-center items-center">
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    class="w-4 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    class="w-4 text-yellow-500 mr-1"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="star"
                    class="w-4 text-yellow-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    ></path>
                  </svg>
                </li>
              </ul>
              <h1 className="ml-4">(24 Reviews)</h1>
            </div>
            <div className="flex justify-between rounded-lg bg-gray-100 px-3 py-2 mt-8  items-center ">
              <h2 className="text-lg font-medium">Tenure</h2>
              <div class="flex justify-center">
                <div>
                  <div class="dropdown w-full relative">
                    <button
                      class="
          dropdown-toggle
          px-6
          py-2.5
       
  
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow
          bg-white
     
          
       
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Please Select
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        class="w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                      </svg>
                    </button>
                    <ul
                      class="
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
                      <li>
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
              hover:bg-gray-100
            "
                          href="#"
                        >
                          1 Month
                        </a>
                      </li>
                      <li>
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
              hover:bg-gray-100
            "
                          href="#"
                        >
                          3 Month
                        </a>
                      </li>
                      <li>
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
              hover:bg-gray-100
            "
                          href="#"
                        >
                          6 Month
                        </a>
                      </li>
                      <li>
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
              hover:bg-gray-100
            "
                          href="#"
                        >
                          12 Month
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between rounded-lg bg-gray-100 px-3 py-2 mt-4  items-center">
              <h2 className="text-lg font-medium">Rent</h2>
              <h2>Rs.299/Month</h2>
            </div>
            <div className="flex justify-between rounded-lg bg-gray-100 px-3 py-2 mt-4  items-center">
              <h2 className="text-lg font-medium">Security Amount</h2>
              <h2>Rs.2999</h2>
            </div>
            <div className="flex justify-between rounded-lg bg-gray-100 px-3 py-2 mt-4  items-center">
              <h2 className="text-lg font-medium">Pincode Check</h2>
              <div className="flex space-x-4">
                <input
                  className="w-36 md:96 placeholder:text-sm shadow outline-none px-2 rounded"
                  placeholder="Enter Pincode.."
                  type="number"
                  name=""
                  id=""
                />
                <button className="bg-black px-4 py-1 text-white rounded-md">
                  Check
                </button>
              </div>
            </div>
            <div className="flex mt-10 justify-between">
              <div className="m-2 space-y-2 text-sm shadow p-3 rounded">
                <RiTruckLine className="text-lg" />
                <h2>Free Delivery</h2>
              </div>
              <div className="m-2 space-y-2 text-sm shadow p-3 rounded">
                <FiSettings className="text-lg" />
                <h2>Free Maintainence</h2>
              </div>
              <div className="m-2 space-y-2 text-sm shadow p-3 rounded">
                <MdLocationOn className="text-lg" />
                <h2>Free Relocation</h2>
              </div>
              <div className="m-2 space-y-2 text-sm shadow p-3 rounded">
                <MdOutlineAccountBalanceWallet className="text-lg" />
                <h2>Easy Returns</h2>
              </div>
            </div>
            <div className="flex justify-around mt-10 border-t pt-10">
              <button className="bg-red-400 font-medium text-white py-2 px-6 md:px-16 rounded-md shadow-md">
                Call for Demo
              </button>
              <button
                onClick={() =>
                  localStorage.getItem("boon") === null
                    ? navigate("/user/login")
                    : addCart(data._id)
                }
                className="bg-black font-medium text-white py-2 px-6 md:px-16 rounded-md "
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-white rounded-md p-6 mx-4">
          <ul
            class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
            id="tabs-tabFill"
            role="tablist"
          >
            <li class="nav-item flex-auto text-center" role="presentation">
              <a
                href="#tabs-homeFill"
                class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
                id="tabs-home-tabFill"
                data-bs-toggle="pill"
                data-bs-target="#tabs-homeFill"
                role="tab"
                aria-controls="tabs-homeFill"
                aria-selected="true"
              >
                Details
              </a>
            </li>
            <li class="nav-item flex-auto text-center" role="presentation">
              <a
                href="#tabs-profileFill"
                class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
                id="tabs-profile-tabFill"
                data-bs-toggle="pill"
                data-bs-target="#tabs-profileFill"
                role="tab"
                aria-controls="tabs-profileFill"
                aria-selected="false"
              >
                Specifications
              </a>
            </li>
            {/* <li class="nav-item flex-auto text-center" role="presentation">
              <a
                href="#tabs-messagesFill"
                class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
                id="tabs-messages-tabFill"
                data-bs-toggle="pill"
                data-bs-target="#tabs-messagesFill"
                role="tab"
                aria-controls="tabs-messagesFill"
                aria-selected="false"
              >
                Write Review
              </a>
            </li> */}
          </ul>
          <div class="tab-content" id="tabs-tabContentFill">
            <div
              class="tab-pane fade show active"
              id="tabs-homeFill"
              role="tabpanel"
              aria-labelledby="tabs-home-tabFill"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              numquam tempore distinctio quam sint, tenetur a vero. Minima
              facere veniam odio numquam. Accusamus repudiandae ut, adipisci
              aperiam eveniet error accusantium voluptas quas quisquam
              voluptatibus. Maiores et, officia perferendis optio numquam quos
              facilis fuga debitis similique reiciendis sit impedit ducimus
              blanditiis doloribus iste dignissimos dolorum possimus
              necessitatibus voluptatibus libero atque reprehenderit in.
              Voluptates pariatur possimus asperiores sunt nulla ratione alias,
              est placeat enim maxime architecto ut veritatis dignissimos
              accusantium fugiat, quisquam exercitationem praesentium? Eaque
              incidunt labore totam enim laudantium id ut consequatur quibusdam
              ipsum obcaecati esse earum, quidem officiis consequuntur est.
            </div>
            <div
              class="tab-pane fade"
              id="tabs-profileFill"
              role="tabpanel"
              aria-labelledby="tabs-profile-tabFill"
            >
              Tab 2 content fill
            </div>
            <div
              class="tab-pane fade"
              id="tabs-messagesFill"
              role="tabpanel"
              aria-labelledby="tabs-profile-tabFill"
            >
              Tab 3 content fill
            </div>
          </div>
        </div>
        <div className="mt-10 bg-white rounded-md p-6 mx-4">
          <div className="space-y-2 mb-3">
            <h2 className="text-2xl font-semibold">Rating & Reviews</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              laudantium tempore dolor tenetur atque commodi voluptatum debitis
              animi in. Placeat.
            </p>
          </div>
          <div className="flex">
            <div className="m-4 w-96 border shadow-md p-4 rounded-md text-center">
              <h2 className="text-2xl font-semibold ">4.3/5</h2>
              <h3>Rating</h3>
            </div>
            <div className="m-4 w-96 border shadow-md p-4 rounded-md text-center">
              <h2 className="text-2xl font-semibold ">24</h2>
              <h3>No. of Review</h3>
            </div>
            <div className="m-4 flex border items-center justify-center  w-96 shadow-md p-4 rounded-md text-center">
              <button className="bg-black p-2 px-4 text-white rounded-md shadow-md">
                Write Review
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-white rounded-md p-6 mx-4">
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>
          <div className="flex rounded-md shadow-lg border px-4 py-2 items-center space-x-4 mt-8">
            <FaUserCircle className="text-4xl" />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">UserName</h2>
              <div className="flex">
                <AiFillStar className="text-red-500" />
                <AiFillStar className="text-red-500" />
                <AiFillStar className="text-red-500" />
                <AiFillStar className="text-red-500" />
                <AiFillStar />
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
                quibusdam.
              </p>
            </div>
          </div>
          <div className="flex rounded-md shadow-lg border px-4 py-2 items-center space-x-4 mt-6">
            <FaUserCircle className="text-4xl" />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">UserName</h2>
              <div className="flex">
                <AiFillStar className="text-red-500" />
                <AiFillStar className="text-red-500" />
                <AiFillStar className="text-red-500" />
                <AiFillStar className="text-red-500" />
                <AiFillStar />
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
                quibusdam.
              </p>
            </div>
          </div>
          <div className="flex rounded-md shadow-lg border px-4 py-2 items-center space-x-4 mt-6">
            <FaUserCircle className="text-4xl" />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">UserName</h2>
              <div className="flex">
                <AiFillStar className="text-red-500" />
                <AiFillStar className="text-red-500" />
                <AiFillStar className="text-red-500" />
                <AiFillStar className="text-red-500" />
                <AiFillStar />
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
                quibusdam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RentalSingleView;

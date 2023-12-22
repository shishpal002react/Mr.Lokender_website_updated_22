import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { RiTruckLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { MdLocationOn, MdOutlineAccountBalanceWallet } from "react-icons/md";
import Footer from "../Footer/Footer";
import { AiFillStar } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Baseurl from "../../../Baseurl";
import axios from "axios";
import { toast } from "react-toastify";
import Razorpay from "../../../Razorpay";

const ProductSingleView = () => {
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
      console.log("post request cart", res);
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
  const { id } = useParams();
  const [singleData, setSingleData] = useState("");
  const getSingleProducts = async () => {
    console.log("ls", localStorage.getItem("boon"));
    let url = `${Baseurl()}api/v1/product/single/${id}`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("product from product section", res.data.product);
      setSingleData(res.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-5">
        <div className="md:flex space-y-4 md:space-y-0 ">
          <div className="md:w-3/5 bg-white rounded-md p-6 mx-4">
            <div className=" flex justify-center">
              <img
                className="h-96 self-center"
                src={singleData?.images?.[0]}
                alt=""
              />
            </div>
            <div className="border-t-2 mt-2 grid grid-cols-5">
              <img
                className="rounded-lg w-32 m-4"
                src={singleData?.images?.[0]}
                alt=""
              />
              <img
                className="rounded-lg w-32 m-4"
                src={singleData?.images?.[0]}
                alt=""
              />
              <img
                className="rounded-lg w-32 m-4"
                src={singleData?.images?.[1]}
                alt=""
              />
              <img
                className="rounded-lg w-32 m-4"
                src={singleData?.images?.[1]}
                alt=""
              />
            </div>
          </div>
          <div className="bg-white md:w-2/5 rounded-md p-6 mx-4">
            <h2 className="text-2xl font-semibold">{singleData.name}</h2>
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
              <h1 className="ml-4">{singleData.numOfReviews}</h1>
            </div>

            <div className="flex justify-between rounded-lg bg-gray-100 px-3 py-2 mt-4  items-center">
              <h2 className="text-lg font-medium">Price</h2>
              <h2>Rs.{singleData.price}/-</h2>
            </div>
            {/* <div className="flex justify-between rounded-lg bg-gray-100 px-3 py-2 mt-4  items-center">
              <h2 className="text-lg font-medium">Security Amount</h2>
              <h2>Rs.2999</h2>
            </div> */}
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
                <h2>Best Quality</h2>
              </div>
              {/* <div className="m-2 space-y-2 text-sm shadow p-3 rounded">
                <MdLocationOn className="text-lg" />
                <h2>Free Relocation</h2>
              </div> */}
              <div className="m-2 space-y-2 text-sm shadow p-3 rounded">
                <MdOutlineAccountBalanceWallet className="text-lg" />
                <h2>7 Day Easy Returns</h2>
              </div>
            </div>
            <div className="flex justify-around mt-10 border-t pt-10">
              <button
                onClick={() => Razorpay()}
                className="bg-red-400 font-medium text-white py-2 px-6 md:px-16 rounded-md shadow-md"
              >
                Buy Now
              </button>
              <button
                onClick={() =>
                  localStorage.getItem("boon") === null
                    ? navigate("/user/login")
                    : addCart(singleData._id)
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
                // data-bs-target="#tabs-homeFill"
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
          </ul>
          <div class="tab-content" id="tabs-tabContentFill">
            <div
              class="tab-pane fade show active"
              id="tabs-homeFill"
              role="tabpanel"
              aria-labelledby="tabs-home-tabFill"
            >
              {singleData.description}
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
              <button
                onClick={() => {
                  localStorage.getItem("boon") === null
                    ? navigate("/user/login")
                    : setPop(!pop);
                }}
                className="bg-black p-2 px-4 text-white rounded-md shadow-md"
              >
                Write Review
              </button>
            </div>
          </div>
          {/* Input for review */}
          {pop ? (
            <div className="border flex w-full md:w-2/3 border-black items-center  justify-between selection:w-full shadow-lg rounded-sm bg-slate-50">
              <input
                type="text"
                value={rev}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write here.."
                className="border outline-none w-full py-2 px-3 "
              />
              <button
                onClick={review}
                className="bg-black p-2 px-6 md:px-16 text-white shadow-md"
              >
                Post
              </button>
            </div>
          ) : (
            ""
          )}
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

export default ProductSingleView;

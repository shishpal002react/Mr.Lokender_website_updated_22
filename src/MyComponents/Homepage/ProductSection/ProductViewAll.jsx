import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { MdKeyboardArrowDown } from "react-icons/md";
import Footer from "../Footer/Footer";
import Card from "./Card";

const ProductViewAll = () => {
  const navigate = useNavigate();
  const loation = useLocation();
  console.log(loation);
  const data = loation.state[0];
  const title = loation.state[1];
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-12 font-bold mb-10">
        <h1 className="text-4xl">{title ? title : "Top Offer"}</h1>
      </div>
      <div className="flex py-2 items-center justify-between px-10 bg-white mx-6 rounded-md">
        <h2 className="text-xl">Filter</h2>
        <div className="right-menu flex items-center space-x-6">
          <div className="account  cursor-pointer md:flex items-center space-x-2">
            <div class="flex justify-center">
              <div>
                <div class="dropdown border border-gray-200  rounded-md px-2 flex items-center relative">
                  <button
                    className="flex  space-x-1"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <h2 className=" text-xl font-normal text-gray-600 ">
                      Sort
                    </h2>
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
                      {/* <IoMdNotifications className="text-2xl" /> */}
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
                        Price : Low to High
                      </a>
                    </li>
                    <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                      {/* <BiSupport className="text-2xl" /> */}
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
                        Price : High to Low
                      </a>
                    </li>
                    {/* <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                      <BiTrendingUp className="text-2xl" />
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
                    </li> */}
                    {/* <li className="text-black flex items-center space-x-2 mx-2 px-2 rounded-lg hover:bg-gray-100">
                      <AiOutlineDownload className="text-2xl" />
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
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            {/* <RiAccountPinCircleFill className="text-2xl " />
            <h2 className="text-l font-medium ">Account</h2> */}
          </div>
        </div>
      </div>
      <div className=" mt-4 container-fluid md:m-6 border-2 border-gray-300 p-3 md:p-6 bg-white md:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {data.map((e) => {
            return <Card e={e} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductViewAll;

import React from "react";
import { useNavigate } from "react-router-dom";
import Baseurl from "../../../Baseurl";
import axios from "axios";
import { toast } from "react-toastify";
import Razorpay from "../../../Razorpay";
import img from "../../../Images/d4.png";
import img2 from "../../../Images/d14.png";
import img3 from "../../../Images/d15.png";

const Card = () => {
  const navigate = useNavigate();
  //const token = localStorage.getItem("boon");

  return (
    <>
      <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
        <img
          onClick={() => {
            navigate("/furniture-view", { state: "e" });
          }}
          src={img3}
          alt="e.title"
          className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
        />
        <h2 className="text-lg font-medium mb-2">
          Mac Book Air
          {/*e.title.length >= 20 ? "..." : ""*/}
        </h2>
        <div className="flex justify-between border-t items-center pt-3">
          <h3 className="text-base">₹ 55,000</h3>
          <button
            onClick={() => Razorpay()}
            className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;

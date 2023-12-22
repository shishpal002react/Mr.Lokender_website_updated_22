import React from "react";
import { useNavigate } from "react-router-dom";

const ReanCard = ({ e }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate("/rent-product-view", { state: e });
        }}
        className="product-card  overflow-hidden m-2 shadow-lg p-3  border rounded-lg"
      >
        <img
          src="e.productimage"
          alt=""
          className="h-44 mx-auto flex flex-col items-center  object-cover overflow-hidden"
        />

        <div className="flex justify-center  border-t items-center pt-3">
          <h3 className="text-lg font-semibold">Rs.e.price /Mon</h3>
        </div>
      </div>
    </>
  );
};

export default ReanCard;

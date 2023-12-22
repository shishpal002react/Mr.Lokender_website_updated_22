import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { BiCategoryAlt, BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const MobileNav = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="flex md:hidden w-full px-4 h-14 rounded-tr-3xl rounded-tl-3xl bg-black text-white items-center justify-between fixed bottom-0">
        <div className=" flex flex-col items-center">
          <AiOutlineHome onClick={()=>{navigate('/')}} className="cursor-pointer text-2xl" />
        </div>
        <div className="flex flex-col items-center">
          <FiShoppingBag onClick={()=>{navigate('/cart')}} className="cursor-pointer text-2xl" />
        </div>
        <div className="flex flex-col items-center">
          <BiCategoryAlt onClick={()=>{navigate('/all-category')}} className="cursor-pointer text-2xl" />
        </div>
        <div className="flex flex-col items-center">
          <BiUserCircle onClick={()=>{navigate('/my-profile')}} className="cursor-pointer text-2xl" />
        </div>
      </div>
    </>
  );
};

export default MobileNav;

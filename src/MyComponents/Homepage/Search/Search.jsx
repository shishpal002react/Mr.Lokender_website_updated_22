import React from 'react'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import NavbarCategory from '../NavbarCategory/NavbarCategory';
import { useEffect } from 'react';
import Baseurl from '../../../Baseurl';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
    const [products, setProducts] = useState([]);

  const searchHandler = async() => {
    const url = `${Baseurl()}api/v1/allproducts/search?search=mobile`;
    try {
      const res = await axios.get(url);
       console.log(res, "search");
       setProducts(res.data.apiFeature);
     } catch (error) {
       console.log(error);
       toast.error("Internal Server Error");
     }
  }

  useEffect(() => {
    searchHandler()
  },[])
  return (
    <div>
        <Navbar />
        <NavbarCategory />
        {products.length > 0 && products.map((product, i) => {
                if(product.images.length > 0){

                return <>
                <div
                className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 "
                style={{ border: "1px solid #333;" }}
              >
                <img
                  onClick={() => {
                    navigate("/electronics-view", { state: "e" });
                  }}
                  src={product.images[0]}
                  alt=""
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">{product.name}</h2>
                <div
                 className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ {product.price}</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md" >
                    Buy Now!
                  </button>
                </div>
              </div>
                </>
                }
              })}
    </div>
  )
}

export default Search
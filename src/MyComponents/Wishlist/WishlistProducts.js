import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const WishlistProducts = () => {
    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState([]);
    const SlideLeft3 = () => {
        var slider = document.getElementById("slider3");
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const SlideRight3 = () => {
        var slider = document.getElementById("slider3");
        slider.scrollLeft = slider.scrollLeft + 500;
      };

  
  const getWishlistFromLocalStorage = () => {
    const existingWishlist = localStorage.getItem('userWishlist');
    const userWishlist = existingWishlist ? JSON.parse(existingWishlist) : [];
    return userWishlist;
  };

  // Load wishlist items from localStorage when the component mounts
  useEffect(() => {
    const userWishlist = getWishlistFromLocalStorage();
    setWishlist(userWishlist);
  }, []);
  return (
    <div>
        <div className="cartconttop">
            <div className="">
              <h1 style={{fontSize: "32px", fontWeight: "500"}}>My Wishlist</h1>
            </div>
            
          </div>
        {wishlist.length > 0 ? (<div className="rg">
          
          <div className="relative flex items-center homeslider" style={{width: "100%"}}>
            <MdChevronLeft onClick={SlideLeft3} size={40} />
            <div
              id="slider3"
              className=" fashrightcont w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >

              {wishlist.map((product, i) => {
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
                  {/* <button style={{margin: "3px"}} onClick={() => addToWishlistHandler(product)} className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Add to Wishlist
                  </button>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md" onClick={addToCartHandler}>
                    Buy Now
                  </button> */}
                </div>
              </div>
                </>
                }
              })}              
            </div>
            <MdChevronRight onClick={SlideRight3} size={40} />
          </div>
        </div>) : (
            <div>No Items in Wishlist</div>
        )}
    </div>
  )
}

export default WishlistProducts
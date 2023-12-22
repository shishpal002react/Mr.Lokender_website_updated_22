/** @format */

// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Baseurl from "../../../Baseurl";
// import axios from "axios";
import img from "../../../Images/d12.png";
import img2 from "../../../Images/d13.png";
import img4 from "../../../Images/d58.png";
import img5 from "../../../Images/d59.png";
import img6 from "../../../Images/d60.png";
import img8 from "../../../Images/d62.png";
import img9 from "../../../Images/d48.png";
import img10 from "../../../Images/d42.png";
import img13 from "../../../Images/d64.png";
import img14 from "../../../Images/d65.png";
import img15 from "../../../Images/d66.png";
import img16 from "../../../Images/d67.png";
import img17 from "../../../Images/d68.png";
import img18 from "../../../Images/d16.png";
import img19 from "../../../Images/d17.png";
import img20 from "../../../Images/d18.png";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import Baseurl from "../../../Baseurl";
import axios from "axios";
import { toast } from "react-toastify";

const ProductSection = () => {
  const navigate = useNavigate();
  // const [products, setProducts] = useState([]);
  // const [subCat, setSubCat] = useState([]);
  // shoes category id pass manually

  //please check why are use static id
  let id = "6527bda093ce9e25be1d7303";

  const addToWishlistHandler = (product) => {
    console.log("wishlist clicked");

    const existingWishlist = localStorage.getItem("userWishlist");

    const userWishlist = existingWishlist ? JSON.parse(existingWishlist) : [];

    userWishlist.push(product);
    console.log("userWishlist", userWishlist);

    localStorage.setItem("userWishlist", JSON.stringify(userWishlist));
    toast.success("Added to Wishlist");
  };

  // get all products
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    console.log("ls", localStorage.getItem("boon"));
    let url = `${Baseurl()}api/v1/products`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("product from product section", res.data.products);
      setProducts(res.data.products.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  //user address
  //user data
  const userData = JSON.parse(localStorage.getItem("userDataBoon"));

  console.log("userdata ", userData);

  // add to cart
  const addToCartHandler = async (id) => {
    console.log("add to cart clicked");
    if (localStorage.getItem("boon")) {
      let url = `${Baseurl()}api/v1/cart`;

      try {
        const body = { productId: id, quantity: 1 };
        const res = await axios.post(url, body, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("boon")}`,
          },
        });
        console.log("add to cart data golu", res);
        toast.success("Added to Cart");
        navigate("/cart");
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.info("please first login");
    }
  };

  const SlideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const SlideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const SlideLeft2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const SlideRight2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const SlideLeft3 = () => {
    var slider = document.getElementById("slider3");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const SlideRight3 = () => {
    var slider = document.getElementById("slider3");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  // Get Products
  // const getProducts = async () => {
  //   let url = `${Baseurl()}api/product/get/product`;
  //   try {
  //     const res = await axios.get(url);
  //     setProducts(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // Get Sub Category
  // const getSubCat = async () => {
  //   let url = `${Baseurl()}api/Subcategory/get/Subcategory`;
  //   try {
  //     const res = await axios.get(url);
  //     setSubCat(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div
        className=" mt-4 container-fluid md:m-6 border-2
         border-gray-300
         p-3 md:p-6 bg-white md:mx-auto"
      >
        <div className="rg">
          <div className="bannerimg">
            <div className="offer">
              <img src={img} alt="" className="homeimg" />
              <button onClick={() => navigate(`/complete/offerscrren`)}>
                View All
              </button>
            </div>
          </div>
          <div className="relative flex items-center homeslider">
            <MdChevronLeft onClick={SlideLeft3} size={40} />
            <div
              id="slider3"
              className=" fashrightcont w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {products.length > 0 ? (
                products.map((product, i) => {
                  if (product.images.length > 0) {
                    return (
                      <>
                        <div
                          className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 "
                          style={{ border: "1px solid #333;" }}
                        >
                          <img
                            onClick={() => {
                              // navigate(`/categoryproducts/${product._id}`);
                              navigate(`/singleprodoctview/${product._id}`);
                            }}
                            src={product.images[0]?.image}
                            alt=""
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                          />
                          <h2 className="text-lg font-medium mb-2">
                            {product.name}
                          </h2>
                          <div className="flex justify-between border-t items-center pt-3">
                            <h3 className="text-base">₹ {product.price}</h3>
                            <button
                              style={{ margin: "3px" }}
                              onClick={() => addToWishlistHandler(product)}
                              className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md"
                            >
                              Wishlist
                            </button>
                            <button
                              className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md"
                              onClick={() => addToCartHandler(product._id)}
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })
              ) : (
                <div>Loading...</div>
              )}

              {/* <div
                className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 "
                style={{ border: "1px solid #333;" }}
              >
                <img
                  onClick={() => {
                    navigate("/electronics-view", { state: "e" });
                  }}
                  src={img8}
                  alt=""
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">Mac Book Air</h2>
                <div
                 className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>



              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img8}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img9}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img5}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img10}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img8}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                 
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div> */}
            </div>
            <MdChevronRight onClick={SlideRight3} size={40} />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          <div className="offer">
            <img src={img2} alt="" style={{ position: "relative" }} />
            <button onClick={() => navigate(`popular/product`)}>
              View All
            </button>
          </div>
          {products.length > 0 ? (
            products.slice(0, 24).map((product, i) => {
              if (product.images.length > 0) {
                return (
                  <>
                    <div
                      className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 "
                      style={{ border: "1px solid #333;" }}
                    >
                      <img
                        onClick={() => {
                          // navigate(`/categoryproducts/${product._id}`);
                          navigate(`/singleprodoctview/${product._id}`);
                        }}
                        src={product.images[0]?.image}
                        alt=""
                        className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                      />
                      <h2 className="text-lg font-medium mb-2">
                        {product.name}
                      </h2>
                      <div className="flex justify-between border-t items-center pt-3">
                        <h3 className="text-base">₹ {product.price}</h3>
                        <button
                          style={{ margin: "3px" }}
                          onClick={() => addToWishlistHandler(product)}
                          className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md"
                        >
                          Wishlist
                        </button>
                        <button
                          onClick={() => addToCartHandler(product._id)}
                          className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </>
                );
              }
            })
          ) : (
            <div>Loading...</div>
          )}

          {/* <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
            <img
              onClick={() => {
                navigate("/fashion-view", { state: "e" });
              }}
              src={img18}
              alt="e.title"
              className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
            />
            <h2 className="text-lg font-medium mb-2">
              Mac Book Air
              
            </h2>
            <div className="flex justify-between border-t items-center pt-3">
              <h3 className="text-base">₹ 55,000</h3>
              <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
            <img
              onClick={() => {
                navigate("/furniture-view", { state: "e" });
              }}
              src={img19}
              alt="e.title"
              className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
            />
            <h2 className="text-lg font-medium mb-2">
              Mac Book Air
              
            </h2>
            <div className="flex justify-between border-t items-center pt-3">
              <h3 className="text-base">₹ 55,000</h3>
              <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
            <img
              onClick={() => {
                navigate("/furniture-view", { state: "e" });
              }}
              src={img10}
              alt="e.title"
              className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
            />
            <h2 className="text-lg font-medium mb-2">
              Mac Book Air
              
            </h2>
            <div className="flex justify-between border-t items-center pt-3">
              <h3 className="text-base">₹ 55,000</h3>
              <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
            <img
              onClick={() => {
                navigate("/furniture-view", { state: "e" });
              }}
              src={img20}
              alt="e.title"
              className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
            />
            <h2 className="text-lg font-medium mb-2">
              Mac Book Air
              
            </h2>
            <div className="flex justify-between border-t items-center pt-3">
              <h3 className="text-base">₹ 55,000</h3>
              <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
            <img
              onClick={() => {
                navigate("/furniture-view", { state: "e" });
              }}
              src={img18}
              alt="e.title"
              className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
            />
            <h2 className="text-lg font-medium mb-2">
              Mac Book Air
              
            </h2>
            <div className="flex justify-between border-t items-center pt-3">
              <h3 className="text-base">₹ 55,000</h3>
              <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                Buy Now
              </button>
            </div>
          </div> */}
        </div>
        <div className="rg">
          <div className="bannerimg">
            <div className="offer">
              <img src={img13} alt="" className="homeimg" />
              <button
                onClick={() => navigate(`complete/categorywise/product/${id}`)}
              >
                View All
              </button>
            </div>
          </div>
          <div className="relative flex items-center homeslider">
            <MdChevronLeft onClick={SlideLeft} size={40} />
            <div
              id="slider"
              className=" fashrightcont w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {products.length > 0 ? (
                products.map((product, i) => {
                  if (product.images.length > 0) {
                    return (
                      <>
                        <div
                          className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 "
                          style={{ border: "1px solid #333;" }}
                        >
                          <img
                            onClick={() => {
                              // navigate(`/categoryproducts/${product._id}`);
                              navigate(`/singleprodoctview/${product._id}`);
                            }}
                            src={product.images[0]?.image}
                            alt=""
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                          />
                          <h2 className="text-lg font-medium mb-2">
                            {product.name}
                          </h2>
                          <div className="flex justify-between border-t items-center pt-3">
                            <h3 className="text-base">₹ {product.price}</h3>
                            <button
                              style={{ margin: "3px" }}
                              onClick={() => addToWishlistHandler(product)}
                              className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md"
                            >
                              Wishlist
                            </button>
                            <button
                              onClick={() => addToCartHandler(product._id)}
                              className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md"
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })
              ) : (
                <div>Loading...</div>
              )}

              {/* <div
                className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 "
                style={{ border: "1px solid #333;" }}
              >
                <img
                  onClick={() => {
                    navigate("/appliance-view", { state: "e" });
                  }}
                  src={img6}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img20}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img4}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img5}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img4}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img5}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                 
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div> */}
            </div>
            <MdChevronRight onClick={SlideRight} size={40} />
          </div>
        </div>
        <div className="rg" style={{ display: "flex", gap: "5px" }}>
          <div className="bannerimg">
            <div className="offer">
              <img src={img14} alt="" className="homeimg" />
              <button
                onClick={() => navigate(`complete/categorywise/product/${id}`)}
              >
                View All
              </button>
            </div>
          </div>
          <div className="relative flex items-center homeslider">
            <MdChevronLeft onClick={SlideLeft2} size={40} />
            <div
              id="slider2"
              className=" fashrightcont w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {products.length > 0 ? (
                products.map((product, i) => {
                  if (product.images.length > 0) {
                    return (
                      <>
                        <div
                          className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 "
                          style={{ border: "1px solid #333;" }}
                        >
                          <img
                            onClick={() => {
                              // navigate(`/categoryproducts/${product._id}`);
                              navigate(`/singleprodoctview/${product._id}`);
                            }}
                            src={product.images[0]?.image}
                            alt=""
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                          />
                          <h2 className="text-lg font-medium mb-2">
                            {product.name}
                          </h2>
                          <div className="flex justify-between border-t items-center pt-3">
                            <h3 className="text-base">₹ {product.price}</h3>
                            <button
                              style={{ margin: "3px" }}
                              onClick={() => addToWishlistHandler(product)}
                              className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md"
                            >
                              Wishlist
                            </button>
                            <button
                              onClick={() => addToCartHandler(product._id)}
                              className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md"
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })
              ) : (
                <div>Loading...</div>
              )}

              {/* <div
                className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 "
                style={{ border: "1px solid #333;" }}
              >
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img15}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img16}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img17}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img15}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img16}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="gproduct-card m-2 bg-white shadow-lg p-3  border rounded-lg w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 ">
                <img
                  onClick={() => {
                    navigate("/furniture-view", { state: "e" });
                  }}
                  src={img17}
                  alt="e.title"
                  className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                />
                <h2 className="text-lg font-medium mb-2">
                  Mac Book Air
                  
                </h2>
                <div className="flex justify-between border-t items-center pt-3">
                  <h3 className="text-base">₹ 55,000</h3>
                  <button className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div> */}
            </div>
            <MdChevronRight onClick={SlideRight2} size={40} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;

import React, { useEffect, useState } from "react";
import img2 from "../../Images/d16.png";
import { useNavigate } from "react-router-dom";
import Baseurl from "../../Baseurl";
import axios from "axios";

const AllCategoryProducts = ({ id }) => {
  const navigate = useNavigate();

  // const product_id="651e5d25b53b201b2a359766";
  // //  // Category Product
  //   const [singleData,setSingleData]=useState([]);
  //   const getSingleProducts = async() => {
  //     console.log("ls",(localStorage.getItem("boon")))
  //     let url = `${Baseurl()}api/v1/product/${product_id}`;
  //     try {
  //       const res = await axios.get(url, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("boon")}`,
  //         },
  //       });
  //       console.log("product from product product id",res.data.products);
  //       setSingleData(res.data.products);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   useEffect(() => {
  //     getSingleProducts();
  //   }, []);

  //   top offer category
  const [topOffer, setTopOffer] = useState([]);
  const getTopOfferProducts = async () => {
    console.log("ls", localStorage.getItem("boon"));
    let url = `${Baseurl()}api/v1/offer-products/${id}`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      //   console.log("product from product product id",res.data);
      setTopOffer(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopOfferProducts();
  }, []);

  //popular by category
  const [populer, setPopular] = useState([]);
  const getPopularProducts = async () => {
    console.log("ls", localStorage.getItem("boon"));
    let url = `${Baseurl()}api/v1/latest/products/popular/${id}`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("product from product product id", res.data.data);
      setPopular(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularProducts();
  }, []);

  //latest product

  const [product, setProduct] = useState([]);
  const getLatestProducts = async () => {
    console.log("ls", localStorage.getItem("boon"));
    let url = `${Baseurl()}api/v1/latest-products/${id}`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      //   console.log("product from product product id",res.data);
      setProduct(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLatestProducts();
  }, []);

  return (
    <>
      {topOffer.length > 0 && (
        <div className="fashioncont" style={{ backgroundColor: "#fff" }}>
          <h3>Top Offers</h3>
          <div className="fashioncont1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
              {topOffer.map((item, i) => (
                <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                  <img
                    onClick={() => navigate(`/singleprodoctview/${item._id}`)}
                    src={item?.images?.[0]}
                    alt={item.name}
                    className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                  />
                  <h2 className="text-lg font-medium mb-2">
                    {item.name}
                    {/*e.title.length >= 20 ? "..." : ""*/}
                  </h2>

                  <h3 className="text-base">{item.price}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {populer?.length > 0 && (
        <div className="fashioncont" style={{ backgroundColor: "#fff" }}>
          <h3>Popular</h3>
          <div className="fashioncont1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
              {populer.map((item, i) => (
                <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                  <img
                    onClick={() => navigate(`/singleprodoctview/${item._id}`)}
                    src={item?.images?.[0]}
                    alt={item.name}
                    className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                  />
                  <h2 className="text-lg font-medium mb-2">
                    {item.name}
                    {/*e.title.length >= 20 ? "..." : ""*/}
                  </h2>

                  <h3 className="text-base">{item.price}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {product?.length > 0 && (
        <div className="fashioncont" style={{ backgroundColor: "#fff" }}>
          <h3>Latest Product</h3>
          <div className="fashioncont1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
              {product.map((item, i) => (
                <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                  <img
                    onClick={() => navigate(`/singleprodoctview/${item._id}`)}
                    src={item?.images?.[0]}
                    alt={item.name}
                    className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                  />
                  <h2 className="text-lg font-medium mb-2">{item.name}</h2>

                  <h3 className="text-base">{item.price}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllCategoryProducts;

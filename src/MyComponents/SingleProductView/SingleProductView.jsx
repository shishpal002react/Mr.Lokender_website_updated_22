import React, { useEffect, useState } from "react";
import Footer from "../Homepage/Footer/Footer";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Baseurl from "../../Baseurl";
import axios from "axios";
import { toast } from "react-toastify";
import Rating from "../RatingComponent/Rating";

const SingleProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("boon");
  const [rev, setReview] = useState("");
  const [colorId, setColorId] = useState("");
  const [sizeId, setSizeId] = useState("");
  const [img, setImg] = useState("");

  // add to cart
  const addToCartHandler = async () => {
    let url = `${Baseurl()}api/v1/cart`;
    try {
      const body = {
        productId: id,
        quantity: 1,
        sizeId: sizeId,
        colorId: colorId,
      };
      const res = await axios.post(url, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("cart response", res);
      toast.success("Added to Cart");
    } catch (error) {
      console.log(error);
    }
  };

  //handle add product
  const handleAddProduct = () => {
    addToCartHandler();
    navigate("/cart");
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

  //Same categary data api call
  const [categaryData, setCategaryData] = useState([]);

  const getCategaryProducts = async () => {
    console.log("ls", localStorage.getItem("boon"));
    let url = `${Baseurl()}api/v1/product/${id}`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      setCategaryData(res?.data?.products);
      console.log(res, "some changes category by id");
    } catch (error) {
      console.log(error);
      console.log("some changes  errrrrro category by id");
    }
  };

  useEffect(() => {
    getCategaryProducts();
  }, []);

  ///single data api and  get all products
  const [singleData, setSingleData] = useState("");
  const getSingleProducts = async () => {
    let url = `${Baseurl()}api/v1/product/single/${id}`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      const data = res.data.product;
      setSingleData(data);
      setImg(data?.images[0]?.image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProducts();
  }, [id]);

  return (
    <>
      <Navbar />
      <NavbarCategory />
      <div className="mobileviewcont">
        <div className="mobileviewcontl">
          <div className="singlecont">
            <div className="singlecontl">
              {singleData?.images?.slice(0, 4)?.map((item, i) => (
                <div className="singleitem" onClick={() => setImg(item?.image)}>
                  <img src={item?.image} key={i} alt="image not found" />
                </div>
              ))}
            </div>
            <div className="singlecontr">
              <div className="mobileimg">
                <img src={img} alt="ImageNotFound" />
              </div>
              <div className="mobilebtn">
                <button className="bt1" onClick={() => addToCartHandler()}>
                  Add To Cart
                </button>
                <button className="bt2" onClick={() => handleAddProduct()}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mobileviewcontr">
          <div className="mobileviewdetail">
            <h6>{singleData?.name}</h6>
            <h6>Product MRP : {singleData?.mrp}</h6>
            <h6>
              Product Price : <del>{singleData?.price}</del>
            </h6>
            <h6>Extra Save &#x20B9; {singleData?.discountAmount} off</h6>
            <h6>
              Product Discount &#x20B9; {singleData?.discountPercent} % off
            </h6>
            <div>
              <div className="product_image_size_parent">
                <p>Color : </p>
                {singleData?.colors?.slice(0, 5)?.map((item) => (
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      margin: "15px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setColorId(item?._id);
                      setImg(item?.image);
                    }}
                  >
                    <img
                      src={item?.image}
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                    <p>{item?.name}</p>
                  </div>
                ))}
              </div>
              <div className="product_image_size_parent">
                <p>Sizes : </p>
                {singleData?.sizePrice?.slice(0, 5)?.map((item) => (
                  <div
                    style={{
                      width: "100px",
                      height: "50px",
                      margin: "15px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => setSizeId(item._id)}
                  >
                    <button type="button">{item?.size}</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="detaillst">
              <h6>&#x20B9; {singleData?.offerPrice}</h6>
            </div>

            <div className="displayFlex">
              <h6>Product Feature : </h6>
              {singleData?.features?.map((item, i) => (
                <h6 key={i} style={{ marginLeft: "5px" }}>
                  {item}
                </h6>
              ))}
            </div>
            <div className="displayFlex">
              <h6>Product Description :</h6>
              <p>{singleData?.description}</p>
            </div>
            <div className="mobileviewdetailbtn">
              <div></div>
              <button className="btt">Check Delivery</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileviewcont2">
        <div className="mobileviewcont2l"></div>
        <div className="mobileviewcont2r">
          <div className="mobileviewcont2r2">
            <h4>Sold By</h4>
            <div className="flex1">
              <img src={"img6"} alt="" />
              <h3>{singleData?.sellerId?.name}</h3>
              <button onClick={() => navigate("/")}>View Shop</button>
            </div>
            <div className="flex2">
              <div className="flex2l">
                <div className="flex2lc">
                  <h6>Rating </h6>
                  <div className="staricon">
                    <Rating rating={singleData.ratings} />
                  </div>
                </div>
                <h6>{singleData.ratings}</h6>
              </div>
              <div className="flex2r">
                <div className="flex2ritem">
                  <h4>{singleData?.stock}</h4>
                  <h5>Products</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileviewcont3">
        <h3>You might be Interested in </h3>
        <div className="flex3">
          {categaryData?.map((item, i) => (
            <div
              style={{ cursor: "pointer" }}
              className="boxitm"
              onClick={() => navigate(`/singleprodoctview/${item?._id}`)}
            >
              <img
                style={{ margin: "10% 2%", width: "90%" }}
                src={item?.images?.[0]?.image}
                alt="image is not found"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProductView;

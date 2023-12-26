/** @format */

import React, { useCallback, useEffect, useState } from "react";
import newImg from "../../Images/Group 38051.png";
import newImg2 from "../../Images/Group 38050.png";
import img from "../../Images/apple-iphone-x-pictures-5 1.png";
import img2 from "../../Images/d57.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import Baseurl from "../../Baseurl";
import Accordion from "react-bootstrap/Accordion";
import Rating from "../RatingComponent/Rating";
import { useNavigate } from "react-router-dom";

const SubCategoryWiseDate = (id) => {
  const navigate = useNavigate();
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(100 / 4);
  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [brandName, setBrandName] = useState("");
  const [sim, setSim] = useState("");
  const [netWork, setNetwork] = useState("");

  const getProducts = async () => {
    console.log("ls", localStorage.getItem("boon"));
    //error sub category wise id is required
    // let url = `${Baseurl()}api/v1/product/650c3b22438e63e219b68ae6`;
    let url = `${Baseurl()}api/v1/product/${id}`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      setProducts(res.data.products?.reverse());
    } catch (error) {}
  };

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth <= 760) {
        setCenterSlidePercentage(100 / 2);
      } else if (viewportWidth <= 1220) {
        setCenterSlidePercentage(100 / 4);
      } else {
        setCenterSlidePercentage(100 / 6);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    getProducts();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // filter products

  const brand = [
    { _id: "1", name: "redmi" },
    { _id: "2", name: "sumsung" },
    { _id: "3", name: "lava" },
    { _id: "4", name: "moto" },
    { _id: "5", name: "realmi" },
    { _id: "6", name: "google" },
    { _id: "7", name: "apple" },
  ];

  const simArray = [
    { _id: "1", name: "Single " },
    { _id: "2", name: "Duel" },
  ];

  const networkArray = [
    { _id: "1", name: "1g" },
    { _id: "2", name: "2g" },
    { _id: "3", name: "3g" },
    { _id: "4", name: "4g" },
    { _id: "5", name: "5g" },
    { _id: "6", name: "6g" },
  ];
  const gatCategory = async () => {
    let url = `${Baseurl()}api/v1/admin/allCategory`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("offer product", res.data.data);
      setCategory(res?.data?.categories);
    } catch (error) {
      console.log(error);
    }
  };

  const filterProduct = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://lokender-backend-api.vercel.app/api/v1/filters?minPrice=${minPrice}&maxPrice=${maxPrice}&categoryId=${categoryId}&brand=${brandName}&sim=${sim}&network=${netWork}`
      );
      setProducts(res.data.products);
    } catch {}
  }, [minPrice, maxPrice, categoryId, brandName, sim, netWork]);

  useEffect(() => {
    getProducts();
    gatCategory();
  }, []);

  useEffect(() => {
    filterProduct();
  }, [filterProduct]);

  return (
    <>
      <div className="fashviewcont mt-6">
        <div className="fashviewcontl">
          <h3>Filters</h3>
          <div className="filtercont ft">
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>CATEGORIES</Accordion.Header>
                <Accordion.Body>
                  {category.slice(0, 10)?.map((item) => (
                    <p
                      onClick={() => setCategoryId(item._id)}
                      style={{ cursor: "pointer" }}
                    >
                      {item?.name}
                    </p>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Prices</Accordion.Header>
                <Accordion.Body>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <select onChange={(e) => setMinPrice(e.target.value)}>
                      <option value={"0"}>₹ 0</option>
                      <option value={"1000"}>₹ 1,000</option>
                      <option value={"2000"}>₹ 2,000</option>
                      <option value={"3000"}>₹ 3,000</option>
                    </select>
                    <p style={{ marginTop: "6px" }}>To</p>
                    <select onChange={(e) => setMaxPrice(e.target.value)}>
                      <option value={"1000"}>₹ 1,000</option>
                      <option value={"2000"}>₹ 2,000</option>
                      <option value={"3000"}>₹ 3,000</option>
                      <option value={"40000"}>₹ 4,000</option>
                    </select>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Brand</Accordion.Header>
                <Accordion.Body>
                  {brand.slice(0, 10)?.map((item) => (
                    <p
                      onClick={() => setBrandName(item.name)}
                      style={{ cursor: "pointer" }}
                    >
                      {item.name}
                    </p>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Sim Type</Accordion.Header>
                <Accordion.Body>
                  {simArray.slice(0, 10)?.map((item) => (
                    <p
                      onClick={() => setBrandName(item.name)}
                      style={{ cursor: "pointer" }}
                    >
                      {item.name}
                    </p>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Network Type</Accordion.Header>
                <Accordion.Body>
                  {networkArray.slice(0, 10)?.map((item) => (
                    <p
                      onClick={() => setBrandName(item.name)}
                      style={{ cursor: "pointer" }}
                    >
                      {item.name}
                    </p>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {/* <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>BRAND</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>RATINGS</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>RAM</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>INTERNAL STORAGE</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>NETWORK TYPE</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>SCREEN SIZE</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>SIM TYPE</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span> offers</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>TYPE</span>
                  <i class="fa-solid fa-caret-down dpci"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>AVAILABILITY</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="fashviewcontr">
          <Carousel
            dynamicHeight={false}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            centerMode={true}
            className="LogoCarousel"
            renderArrowPrev={() => null}
            renderArrowNext={() => null}
            centerSlidePercentage={centerSlidePercentage}
          >
            <img src={newImg} alt="Image1" className="logoImage" />
            <img src={newImg2} alt="Image1" className="logoImage" />
            <img src={newImg} alt="Image1" className="logoImage" />
            <img src={newImg2} alt="Image1" className="logoImage" />
            <img src={newImg} alt="Image1" className="logoImage" />
          </Carousel>

          <div className="fashrightprod">
            {products.length > 0 &&
              products.map((product, i) => {
                return (
                  <div className="three-sec">
                    <div className="left">
                      <div className="first">
                        <img
                          src={product.images[0]?.image}
                          alt=""
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            navigate(`/singleprodoctview/${product._id}`)
                          }
                        />
                        <div className="sub">
                          {/* <input type={"checkbox"} />
                          <p>Add to Compare</p> */}
                        </div>
                      </div>

                      <div className="second">
                        <p className="head">{product.name}</p>
                        <div className="stars">
                          <div>
                            <Rating rating={product?.ratings} />
                          </div>
                          <p>{`${product?.numOfReviews} Ratings & ${product?.ratings} Reviews`}</p>
                        </div>
                        <ul style={{ listStyle: "disc" }}>
                          {product?.features?.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="right">
                      <div className="upper">
                        <p>{`₹${product?.offerPrice}`}</p>
                        <img src={img2} alt="" />
                      </div>
                      <div className="down">
                        <p className="thorught"> ₹{product?.mrp}</p>
                        <p className="thorught2" style={{ color: "#075522" }}>
                          {product?.discountPercent}% off
                        </p>
                      </div>
                      <p style={{ fontSize: "14px" }}>Free delivery</p>
                      <p
                        style={{
                          fontSize: "18px",
                          color: "#0d4f25",
                          fontWeight: "bold",
                        }}
                      >
                        Top Discount on Sale
                      </p>
                      {/* <p style={{ fontSize: "14px" }}>
                        Upto <strong>₹9,150</strong> off on Exchange
                      </p> */}
                    </div>
                  </div>
                );
              })}

            {/* <div className="three-sec">
              <div className="left">
                <div className="first">
                  <img src={img} alt="" />
                  <div className="sub">
                    <input type={"checkbox"} />
                    <p>Add to Compare</p>
                  </div>
                </div>

                <div className="second">
                  <p className="head">Apple iPhone 11</p>
                  <div className="stars">
                    <div>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                    <p>1,55,257 Ratings & 8,148 Reviews</p>
                  </div>
                  <ul style={{ listStyle: "disc" }}>
                    <li>64 GB ROM (Expandable)</li>
                    <li> 16.76 cm (6.6 inch) Full HD+ Display </li>
                    <li> 50MP + 5Mp + 2MP + 8MP Front Camera </li>
                    <li> 6000 mAh Lithium Ion Battery </li>
                    <li>
                      {" "}
                      1 year Warranty Provided by the Manufacture from date of
                      purchase{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="upper">
                  <p>₹9,699</p>
                  <img src={img2} alt="" />
                </div>
                <div className="down">
                  <p className="thorught"> ₹14,999</p>
                  <p className="thorught2" style={{ color: "#075522" }}>
                    35% off
                  </p>
                </div>
                <p style={{ fontSize: "14px" }}>Free delivery</p>
                <p
                  style={{
                    fontSize: "18px",
                    color: "#0d4f25",
                    fontWeight: "bold",
                  }}
                >
                  Top Discount on Sale
                </p>
                <p style={{fontSize : '14px'}}>Upto <strong>₹9,150</strong> off on Exchange</p>
              </div>
            </div>
            <div className="three-sec">
              <div className="left">
                <div className="first">
                  <img src={img} alt="" />
                  <div className="sub">
                    <input type={"checkbox"} />
                    <p>Add to Compare</p>
                  </div>
                </div>

                <div className="second">
                  <p className="head">Apple iPhone 11</p>
                  <div className="stars">
                    <div>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                    <p>1,55,257 Ratings & 8,148 Reviews</p>
                  </div>
                  <ul style={{ listStyle: "disc" }}>
                    <li>64 GB ROM (Expandable)</li>
                    <li> 16.76 cm (6.6 inch) Full HD+ Display </li>
                    <li> 50MP + 5Mp + 2MP + 8MP Front Camera </li>
                    <li> 6000 mAh Lithium Ion Battery </li>
                    <li>
                      {" "}
                      1 year Warranty Provided by the Manufacture from date of
                      purchase{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="upper">
                  <p>₹9,699</p>
                  <img src={img2} alt="" />
                </div>
                <div className="down">
                  <p className="thorught"> ₹14,999</p>
                  <p className="thorught2" style={{ color: "#075522" }}>
                    35% off
                  </p>
                </div>
                <p style={{ fontSize: "14px" }}>Free delivery</p>
                <p
                  style={{
                    fontSize: "18px",
                    color: "#0d4f25",
                    fontWeight: "bold",
                  }}
                >
                  Top Discount on Sale
                </p>
                <p style={{fontSize : '14px'}}>Upto <strong>₹9,150</strong> off on Exchange</p>
              </div>
            </div>

            <div className="three-sec">
              <div className="left">
                <div className="first">
                  <img src={img} alt="" />
                  <div className="sub">
                    <input type={"checkbox"} />
                    <p>Add to Compare</p>
                  </div>
                </div>

                <div className="second">
                  <p className="head">Apple iPhone 11</p>
                  <div className="stars">
                    <div>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                    <p>1,55,257 Ratings & 8,148 Reviews</p>
                  </div>
                  <ul style={{ listStyle: "disc" }}>
                    <li>64 GB ROM (Expandable)</li>
                    <li> 16.76 cm (6.6 inch) Full HD+ Display </li>
                    <li> 50MP + 5Mp + 2MP + 8MP Front Camera </li>
                    <li> 6000 mAh Lithium Ion Battery </li>
                    <li>
                      {" "}
                      1 year Warranty Provided by the Manufacture from date of
                      purchase{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="upper">
                  <p>₹9,699</p>
                  <img src={img2} alt="" />
                </div>
                <div className="down">
                  <p className="thorught"> ₹14,999</p>
                  <p className="thorught2" style={{ color: "#075522" }}>
                    35% off
                  </p>
                </div>
                <p style={{ fontSize: "14px" }}>Free delivery</p>
                <p
                  style={{
                    fontSize: "18px",
                    color: "#0d4f25",
                    fontWeight: "bold",
                  }}
                >
                  Top Discount on Sale
                </p>
                <p style={{fontSize : '14px'}}>Upto <strong>₹9,150</strong> off on Exchange</p>
              </div>
            </div>

            <div className="three-sec">
              <div className="left">
                <div className="first">
                  <img src={img} alt="" />
                  <div className="sub">
                    <input type={"checkbox"} />
                    <p>Add to Compare</p>
                  </div>
                </div>

                <div className="second">
                  <p className="head">Apple iPhone 11</p>
                  <div className="stars">
                    <div>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                    <p>1,55,257 Ratings & 8,148 Reviews</p>
                  </div>
                  <ul style={{ listStyle: "disc" }}>
                    <li>64 GB ROM (Expandable)</li>
                    <li> 16.76 cm (6.6 inch) Full HD+ Display </li>
                    <li> 50MP + 5Mp + 2MP + 8MP Front Camera </li>
                    <li> 6000 mAh Lithium Ion Battery </li>
                    <li>
                      {" "}
                      1 year Warranty Provided by the Manufacture from date of
                      purchase{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="upper">
                  <p>₹9,699</p>
                  <img src={img2} alt="" />
                </div>
                <div className="down">
                  <p className="thorught"> ₹14,999</p>
                  <p className="thorught2" style={{ color: "#075522" }}>
                    35% off
                  </p>
                </div>
                <p style={{ fontSize: "14px" }}>Free delivery</p>
                <p
                  style={{
                    fontSize: "18px",
                    color: "#0d4f25",
                    fontWeight: "bold",
                  }}
                >
                  Top Discount on Sale
                </p>
                <p style={{fontSize : '14px'}}>Upto <strong>₹9,150</strong> off on Exchange</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubCategoryWiseDate;

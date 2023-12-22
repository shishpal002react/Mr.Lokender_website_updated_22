import React, { useEffect, useState, useCallback } from "react";
import img5 from "../../Images/d57.png";
import { useNavigate } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";
import Baseurl from "../../Baseurl";
import Rating from "../RatingComponent/Rating";
import Accordion from "react-bootstrap/Accordion";

const CategoryWiseDate = ({ id }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const SlideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const SlideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  //api show catogery is calling
  const [category, setCategory] = useState([]);
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
      setProducts(res?.data?.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getProducts();
    gatCategory();
  }, []);

  const filterProduct = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://lokender-backend-api.vercel.app/api/v1/filters?minPrice=${minPrice}&maxPrice=${maxPrice}&categoryId=${categoryId}`
      );
      setProducts(res.data.products);
    } catch {}
  }, [minPrice, maxPrice, categoryId]);

  useEffect(() => {
    filterProduct();
  }, [filterProduct]);

  return (
    <>
      <div className="fashviewcont">
        <div className="fashviewcontl">
          <h3>Filters</h3>
          <div className="filtercont ft">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>CATEGORIES</Accordion.Header>
                <Accordion.Body>
                  {category.slice(0, 10)?.map((item) => (
                    <p
                      onClick={() => setCategoryId(item._id)}
                      style={{ cursor: "pointer" }}
                    >
                      {item.name}
                    </p>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="0">
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
                      <option value={"1000"}>₹1,000</option>
                      <option value={"2000"}>₹2,000</option>
                      <option value={"3000"}>₹3,000</option>
                    </select>
                    <p style={{ marginTop: "6px" }}>To</p>
                    <select onChange={(e) => setMaxPrice(e.target.value)}>
                      <option value={"1000"}>₹1,000</option>
                      <option value={"2000"}>₹2,000</option>
                      <option value={"3000"}>₹3,000</option>
                      <option value={"40000"}>₹4,000</option>
                    </select>
                  </div>
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
          <div className="relative flex items-center">
            <MdChevronLeft onClick={SlideLeft} size={40} />
            <div
              id="slider"
              className=" fashrightcont w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {category.map((item) => (
                <div className="fashrightlabel w-[220px] inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300">
                  <h3>{item?.name}</h3>
                </div>
              ))}
            </div>
            <MdChevronRight onClick={SlideRight} size={40} />
          </div>
          <div className="fashrightprod">
            <div className="fashrightproditm">
              <div className="rff">
                {products?.map((item) => (
                  <div className="proditm">
                    {item.price && item.name && (
                      <>
                        <img
                          src={
                            item.images
                              ? item.images
                              : "https://stores.blackberrys.com/VendorpageTheme/Enterprise/EThemeForBlackberrys/images/product-not-found.jpg "
                          }
                          onClick={() =>
                            navigate(`/singleprodoctview/${item._id}`)
                          }
                          className="thumbNail"
                          alt=""
                        />
                        <div className="proditmflex">
                          <h5>{item.name}</h5>
                          <button>80% off</button>
                        </div>
                        <div className="proditmflex">
                          <p>Lorem Ipsum</p>
                          {item.ratings > 0 && (
                            <div className="staricon">
                              <Rating rating={item.ratings} />
                            </div>
                          )}
                        </div>
                        <div className="proditmflex">
                          {item.price && <h6>&#x20B9; {item.price}</h6>}
                          <img src={img5} alt="" />
                        </div>
                      </>
                    )}

                    {/* <p className="lsttxt">Free delivery Shubharambh99</p> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryWiseDate;

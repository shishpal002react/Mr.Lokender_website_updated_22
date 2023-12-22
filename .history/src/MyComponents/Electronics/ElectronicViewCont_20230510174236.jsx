/** @format */

import React, { useEffect, useState } from "react";
import newImg from "../../Images/Group 38051.png";
import newImg2 from "../../Images/Group 38050.png";
import img from "../../Images/apple-iphone-x-pictures-5 1.png";
import img2 from "../../Images/d57.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ElectronicViewCont = () => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(100 / 4);

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
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="fashviewcont mt-6">
        <div className="fashviewcontl">
          <h3>Filters</h3>
          <div className="filtercont ft">
            <div className="filteritem">
              <div class="dropdown" tabIndex="0">
                <div className="dpc">
                  <span>CATEGORIES</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
                <div className="dropDownContent">
                  <p>Mobiles & Accessories</p>
                  <p>Mobiles & Accessories</p>
                </div>
              </div>
            </div>

            <div className="filteritem">
              <div class="dropdown" tabIndex="0">
                <div className="dpc">
                  <span>PRICE</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
                <div className="dropDownContent">
                  <div className="selectoption">
                    <select>
                      <option>Min</option>
                    </select>
                    <p>to</p>
                    <select>
                      <option>₹5,000</option>
                      <option>₹10,000</option>
                      <option>₹15,000</option>
                      <option>₹20,000</option>
                      <option>₹25,000</option>
                      <option>₹30,000</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="filteritem">
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
            </div>
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
                <img src={img2} alt="" />
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
                <p style={{ fontSize: "14px" }}>Top Discount on Sale</p>
                <p>Upto ₹9,150 off on Exchange</p>
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
                <img src={img2} alt="" />
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
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectronicViewCont;

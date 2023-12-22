/** @format */

import React, { useContext, useEffect, useState } from "react";
import { MyContext } from ".././MyContext";
// import { MyContext, MyContext2 } from ".././MyContext";
// import img from "../../../Images/d1.png";
// import img2 from "../../../Images/d2.png";
// import img3 from "../../../Images/d3.png";
// import img4 from "../../../Images/d4.png";
// import img5 from "../../../Images/d5.png";
// import img6 from "../../../Images/d6.png";
// import img7 from "../../../Images/d7.png";
// import img8 from "../../../Images/d8.png";
// import img9 from "../../../Images/d9.png";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const NavbarCategory2 = () => {
  const { show, setShow } = useContext(MyContext);
  // const { show, setShow, hide, setHide } = useContext(MyContext);
  const navigate = useNavigate();
  // const SlideLeft = () => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft - 500;
  // };
  // const SlideRight = () => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft + 500;
  // };
  // const SlideLeft2 = () => {
  //   var slider = document.getElementById("slider2");
  //   slider.scrollLeft = slider.scrollLeft - 500;
  // };
  // const SlideRight2 = () => {
  //   var slider = document.getElementById("slider2");
  //   slider.scrollLeft = slider.scrollLeft + 500;
  // };

  const [centerSlidePercentage, setCenterSlidePercentage] = useState(100 / 2);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth <= 760) {
        setCenterSlidePercentage(100 / 8);
      } else if (viewportWidth <= 1220) {
        setCenterSlidePercentage(100 / 8);
      } else {
        setCenterSlidePercentage(100 / 8);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    {
      name : "Electronics",
      icon : "fa-solid fa-angle-down"
    },
    {
      name : "TV & Appliances"
    },
    {
      name : "Men"
    },
    {
      name : "Women"
    },
    {
      name : "Baby & Kids"
    },
    {
      name : "Home & Furniture"
    },
    {
      name : "Books & More"
    },
    {
      name : "Grocery"
    },
    {
      name : ""
    }
  ]

  return (
    <>
      <Carousel
          dynamicHeight={false}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        interval={1000}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerMode={true}
        centerSlidePercentage={centerSlidePercentage}
      >
      {data.map((i , index) => (
        <div className="caruselItem" key={index}>
          <p>{i.name}</p>
          <i class=""></i>
        </div>
      ))}
  
      </Carousel>



      <div className="hometop2">
        <div className="hometop4cont">
          <div className="hometop2main">
            <div className="hometopitm2">
              <p onClick={() => navigate("/electronic-all")}>Electronics</p>
              <div class="dropdown">
                <i class="fa-solid fa-angle-down"></i>
                {/* <i class="fa-sharp fa-solid fa-caret-down pt-2"></i> */}
                <div class="dropdown-content">
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>

            <div className="hometopitm2">
              <p onClick={() => navigate("/appliances-all")}>TV & Appliances</p>
              <div class="dropdown">
                <i class="fa-sharp fa-solid fa-caret-down pt-2"></i>
                <div class="dropdown-content">
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>

            <div className="hometopitm2">
              <p onClick={() => navigate("/fashion-all")}>Men</p>
              <div class="dropdown">
                <i class="fa-sharp fa-solid fa-caret-down pt-2"></i>
                <div class="dropdown-content">
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className="hometopitm2">
              <p onClick={() => navigate("/fashion-all")}>Women</p>
              <div class="dropdown">
                <i class="fa-sharp fa-solid fa-caret-down pt-2"></i>
                <div class="dropdown-content">
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>

            <div className="hometopitm2">
              <p onClick={() => navigate("/fashion-all")}>Baby & Kids</p>
              <div class="dropdown">
                <i class="fa-sharp fa-solid fa-caret-down pt-2"></i>
                <div class="dropdown-content">
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>

            <div className="hometopitm2">
              <p onClick={() => navigate("/furniture")}>Home & Furniture</p>
              <div class="dropdown">
                <i class="fa-sharp fa-solid fa-caret-down pt-2"></i>
                <div class="dropdown-content">
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>

            <div className="hometopitm2">
              <p>Books & More</p>
              <div class="dropdown">
                <i class="fa-sharp fa-solid fa-caret-down"></i>
                <div class="dropdown-content">
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>

            <div className="hometopitm2">
              <p onClick={() => navigate("/grocery")}>Grocery</p>
              <div class="dropdown">
                <i class="fa-sharp fa-solid fa-caret-down pt-2"></i>
                <div class="dropdown-content">
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="menubar" onClick={() => setShow(true)}>
        <i class="fa-solid fa-bars"></i>
      </div>
      {show ? (
        <div className="hometop3cont">
          <div className="hometopitm3">
            <p onClick={() => navigate("/electronic-all")}>Electronics</p>
            <div class="dropdown">
              <i class="fa-sharp fa-solid fa-caret-down"></i>
              <div class="dropdown-content">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="hometopitm3">
            <p onClick={() => navigate("/appliances-all")}>TV & Appliances</p>
            <div class="dropdown">
              <i class="fa-sharp fa-solid fa-caret-down"></i>
              <div class="dropdown-content">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="hometopitm3">
            <p onClick={() => navigate("/fashion-all")}>Men</p>
            <div class="dropdown">
              <i class="fa-sharp fa-solid fa-caret-down"></i>
              <div class="dropdown-content">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="hometopitm3">
            <p onClick={() => navigate("/fashion-all")}>Women</p>
            <div class="dropdown">
              <i class="fa-sharp fa-solid fa-caret-down"></i>
              <div class="dropdown-content">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="hometopitm3">
            <p onClick={() => navigate("/appliances-all")}>Baby & Kids</p>
            <div class="dropdown">
              <i class="fa-sharp fa-solid fa-caret-down"></i>
              <div class="dropdown-content">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="hometopitm3">
            <p onClick={() => navigate("/furniture")}>Home & Furniture</p>
            <div class="dropdown">
              <i class="fa-sharp fa-solid fa-caret-down"></i>
              <div class="dropdown-content">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="hometopitm3">
            <p>Books & More</p>
            <div class="dropdown">
              <i class="fa-sharp fa-solid fa-caret-down"></i>
              <div class="dropdown-content">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="hometopitm3">
            <p onClick={() => navigate("/grocery")}>Grocery</p>
            <div class="dropdown">
              <i class="fa-sharp fa-solid fa-caret-down"></i>
              <div class="dropdown-content">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="hometopitm3" onClick={() => navigate("/rent")}>
            <p>Rent</p>
          </div>
          <div
            className="hometopitm3"
            onClick={() => navigate("/seller-registration")}
          >
            <p>Become a Member</p>
          </div>
          <div className="hometopitm3" onClick={() => navigate("/user/signup")}>
            <p>Sign Up</p>
          </div>
          <div className="hometopitm3" onClick={() => navigate("/user/login")}>
            <p>Login</p>
          </div>
          <div className="hometopitm3">
            <button
              onClick={() => setShow(false)}
              style={{
                marginBottom: "10%",
                backgroundColor: "#333",
                color: "#fff",
                width: "40%",
                height: "40px",
              }}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {/*<MdChevronLeft className="xg:hidden md:hidden"onClick={SlideLeft2} size={40} />
            <div
              id="slider2"
              className=" fashrightcont w-full h-full overflow-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              <div
                className="gproduct-card m-2   p-1  w-auto inline-block p-2 cursor-pointer hover:scale-105 case-in-out duration-300 "
                style={{ border: "1px solid #333;" }}
                  >*/}
    </>
  );
};

export default NavbarCategory2;

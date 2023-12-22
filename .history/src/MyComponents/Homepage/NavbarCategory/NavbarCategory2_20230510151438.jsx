/** @format */

import React, { useContext } from "react";
import { MyContext } from ".././MyContext";
import { useNavigate } from "react-router-dom";

const NavbarCategory2 = () => {
  const { show, setShow } = useContext(MyContext);
  const navigate = useNavigate();

  const data = [
    {
      name: "Electronics",
      icon: "fa-solid fa-angle-down",
      link: "/electronic-all",
    },
    {
      name: "TV & Appliances",
      icon: "fa-solid fa-angle-down",
      link: "/appliances-all",
    },
    {
      name: "Men",
      icon: "fa-solid fa-angle-down",
      link: "/fashion-all",
    },
    {
      name: "Women",
      icon: "fa-solid fa-angle-down",
      link: "/fashion-all",
    },
    {
      name: "Baby & Kids",
      icon: "fa-solid fa-angle-down",
      link: "/fashion-all",
    },
    {
      name: "Home & Furniture",
      icon: "fa-solid fa-angle-down",
      link: "/furniture",
    },
    {
      name: "Books & More",
      icon: "fa-solid fa-angle-down",
    },
    {
      name: "Grocery",
      icon: "fa-solid fa-angle-down",

      link: "/grocery",
    },
  ];

  return (
    <>
      <div className="hometop2cont">
        {data.map((i, index) => (
          <div
            className="hometopitm"
            onClick={() => {
              navigate(i.link ? i.link : "");
            }}
            key={index}
          >
            <p style={{ fontWeight: "700", fontSize: "18px" }}>
              {i.name} <i className="fa-solid fa-angle-down" />
            </p>
          </div>
        ))}
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

      {/* <div className="hometop2">
<div className="hometop4cont">
  <div className="hometop2main">
    <div className="hometopitm2">
      <p onClick={() => navigate("/electronic-all")}>Electronics</p>
      <div class="dropdown">
        <i class="fa-solid fa-angle-down"></i>
        {/* <i class="fa-sharp fa-solid fa-caret-down pt-2"></i> */}
      {/* //         <div class="dropdown-content">
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//         </div>
//       </div>
//     </div>

//     <div className="hometopitm2">
//       <p onClick={() => navigate("/appliances-all")}>TV & Appliances</p>
//       <div class="dropdown">
//         <i class="fa-sharp fa-solid fa-caret-down pt-2"></i>
//         <div class="dropdown-content">
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//         </div>
//       </div>
//     </div>

//     <div className="hometopitm2">
//       <p onClick={() => navigate("/fashion-all")}>Men</p>
//       <div class="dropdown">
//         <i class="fa-sharp fa-solid fa-caret-down pt-2"></i>
//         <div class="dropdown-content">
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//         </div>
//       </div>
//     </div>
//     <div className="hometopitm2">
//       <p onClick={() => navigate("/fashion-all")}>Women</p>
//       <div class="dropdown">
//         <i class="fa-sharp fa-solid fa-caret-down pt-2"></i>
//         <div class="dropdown-content">
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//         </div>
//       </div>
//     </div>

//     <div className="hometopitm2">
//       <p onClick={() => navigate("/fashion-all")}>Baby & Kids</p>
//       <div class="dropdown">
//         <i class="fa-sharp fa-solid fa-caret-down pt-2"></i>
//         <div class="dropdown-content">
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//         </div>
//       </div>
//     </div>

//     <div className="hometopitm2">
//       <p onClick={() => navigate("/furniture")}>Home & Furniture</p>
//       <div class="dropdown">
//         <i class="fa-sharp fa-solid fa-caret-down pt-2"></i>
//         <div class="dropdown-content">
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//         </div>
//       </div>
//     </div>

//     <div className="hometopitm2">
//       <p>Books & More</p>
//       <div class="dropdown">
//         <i class="fa-sharp fa-solid fa-caret-down"></i>
//         <div class="dropdown-content">
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//         </div>
//       </div>
//     </div>

//     <div className="hometopitm2">
//       <p onClick={() => navigate("/grocery")}>Grocery</p>
//       <div class="dropdown">
//         <i class="fa-sharp fa-solid fa-caret-down pt-2"></i>
//         <div class="dropdown-content">
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//           <p>Lorem Ipsum</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>  */}
    </>
  );
};

export default NavbarCategory2;

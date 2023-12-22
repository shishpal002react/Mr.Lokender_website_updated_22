import React, {  useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./NavbarCategory.css";
import img from "../../../Images/d1.png";
import img3 from "../../../Images/d3.png";
import img4 from "../../../Images/d4.png";
import img5 from "../../../Images/d5.png";
import img6 from "../../../Images/d6.png";
import img7 from "../../../Images/d7.png";
import img8 from "../../../Images/d8.png";
import img9 from "../../../Images/d9.png";
import {MyContext } from ".././MyContext";

const NavbarCategory = () => {
  const {show, setShow} = useContext(MyContext);
  
  const navigate = useNavigate();
  // const [navCat, setNavCat] = useState([]);
  // const getCategory = async () => {
  //   let url = `${Baseurl()}api/category/get/category`;
  //   try {
  //     const res = await axios.get(url);
  //     setNavCat(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  // }, []);


  
  return (
    <>
      <div className="hometop2">
        <div className="hometop2cont">
          <div className="hometopitm" onClick={()=>navigate("/fashion-all")}>
            <img src={img8} alt="" />
            <p>Sports</p>
          </div>
          <div className="hometopitm" onClick={()=>navigate("/mobile")}>
            <img src={img6} alt="" />
            <p>Mobile</p>
          </div>
          <div className="hometopitm" onClick={()=>navigate("/fashion")}>
            <img src={img9} alt="" />
            <p>Fashion</p>
          </div>
          <div className="hometopitm" onClick={()=>navigate("/electronics")}>
            <img src={img4} alt="" />
            <p>Electronics</p>
          </div>
          <div className="hometopitm" onClick={()=>navigate("/furniture")}>
            <img src={img5} alt="" />
            <p>Home</p>
          </div>
          <div className="hometopitm" onClick={()=>navigate("/appliances")}>
            <img src={img3} alt="" />
            <p>Appliances</p>
          </div>
          <div className="hometopitm" onClick={()=>navigate("/appliances-all")}>
            <img src={img7} alt="" />
            <p>Toys & Entertainment</p>
          </div>
          <div className="hometopitm" onClick={()=>navigate("/grocery")}>
            <img src={img} alt="" />
            <p>Grocery</p>
          </div>
        </div>

        <div className="menubar" onClick={()=>setShow(true)}>
            <i class="fa-solid fa-bars"></i>
        </div>
        { show ? 
        <div className="hometop3cont">
        <div className="hometopitm3">
            <p>Electronics</p>
                <div class="dropdown">    
                    <i class="fa-solid fa-circle-chevron-down"></i>  
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
          </div>
          <div className="hometopitm3">
            <p>TV & Appliances</p>
                <div class="dropdown">    
                    <i class="fa-solid fa-circle-chevron-down"></i>  
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
          </div>
          <div className="hometopitm3">
            <p>Men</p>
                <div class="dropdown">    
                    <i class="fa-solid fa-circle-chevron-down"></i>  
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
          </div>
          <div className="hometopitm3">
            <p>Women</p>
                <div class="dropdown">    
                    <i class="fa-solid fa-circle-chevron-down"></i>  
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
          </div>
          <div className="hometopitm3">
            <p>Baby & Kids</p>
                <div class="dropdown">    
                    <i class="fa-solid fa-circle-chevron-down"></i>  
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
          </div>
          <div className="hometopitm3">
            <p>Home & Furniture</p>
                <div class="dropdown">    
                    <i class="fa-solid fa-circle-chevron-down"></i>  
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
                    <i class="fa-solid fa-circle-chevron-down"></i>  
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
          </div>
          <div className="hometopitm3">
            <p>Grocery</p>
                <div class="dropdown">    
                    <i class="fa-solid fa-circle-chevron-down"></i>  
                    <div class="dropdown-content">
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
          </div>
          <div className="hometopitm3" onClick={()=>navigate("/rent")}>
            <p>Rent</p>
          </div>
          <div className="hometopitm3" onClick={()=>navigate("/seller-registration")}>
            <p>Become a Member</p>
          </div>
          <div className="hometopitm3" onClick={()=>navigate("/user/signup")}>
            <p>Sign Up</p>
          </div>
          <div className="hometopitm3" onClick={()=>navigate("/user/login")}>
            <p>Login</p>
          </div>
          <div className="hometopitm3">
            <button onClick={()=>setShow(false)}
                style={{marginBottom:"10%", backgroundColor:"#333", color:"#fff", width:"40%", height:"40px"}}
            >Close</button>
          </div>
        </div>
              :
              ""
                }
      </div>
      {/*<div className=" hidden md:flex justify-between space-x-10 m-8 mx-10 ">
        <div
          onClick={() => {
            navigate("/rent");
          }}
          className="rounded-full cursor-pointer bg-gray-400 w-20 h-20"
        >
          <img className="rounded-full" src={rent} alt="" />
          <h2 className="text-center font-medium">Rental</h2>
        </div>
        <div
          onClick={() => {
            navigate("/grocery");
          }}
          className="rounded-full cursor-pointer bg-gray-400 w-20 h-20"
        >
          <img
            className="rounded-full"
            src=""
            alt=""
          />
          <h2 className="text-center font-medium">Grocery</h2>
        </div>
        {navCat.map((e, i) => {
          return (
            <>
              <div
                key={i}
                onClick={() => {
                  navigate(`/category/${e.category}`, { state: e._id });
                }}
                className="rounded-full cursor-pointer bg-gray-400 w-20 h-20"
              >
                <img
                  className="rounded-full w-full h-full"
                  src={e.CategoryImg}
                  alt={e.category}
                />
                <h2 className="text-center font-medium">{e.category}</h2>
              </div>
            </>
          );
        })}
      </div>*/}
    </>
  );
};

export default NavbarCategory;

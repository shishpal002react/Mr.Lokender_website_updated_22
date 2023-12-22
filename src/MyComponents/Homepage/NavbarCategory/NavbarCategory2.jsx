/** @format */

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Baseurl from "../../../Baseurl";
import { Dropdown, Menu } from "antd";

const NavbarCategory2 = () => {
  // const navigate = useNavigate();
  // const [data, setData] = useState([]);
  // //category data
  // const allCategary = async () => {
  //   console.log("ls", localStorage.getItem("boon"));
  //   let url = `${Baseurl()}api/v1/admin/allCategory`;
  //   try {
  //     const res = await axios.get(url, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("boon")}`,
  //       },
  //     });
  //     console.log("product from categary", res.data.categories);
  //     setData(res.data.categories);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   allCategary();
  // }, []);
  // return (
  //   <>
  //     <div className="hometop2cont mt-4 mb-4">
  //       {data?.slice(0, 6)?.map((i, index) => (
  //         <div
  //           className="hometopitm"
  //           // onClick={() => {
  //           //   navigate(i.link ? i.link : "");
  //           // }} `/categoryproducts/${item._id}
  //           // onClick={()=>navigate(`/complete/subcategorywise/product/${i._id}`)}
  //           onClick={() => navigate(`/categoryproducts/${i._id}`)}
  //           key={index}
  //         >
  //           <p style={{ fontWeight: "600", fontSize: "18px" }}>
  //             {i.name}{" "}
  //             <span>
  //               <i className="fa-solid fa-angle-down" />
  //             </span>
  //           </p>
  //         </div>
  //       ))}
  //     </div>
  //   </>
  // );
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const allCategary = async () => {
    console.log("ls", localStorage.getItem("boon"));
    let url = `${Baseurl()}api/v1/admin/getCategorieswithsubcat`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      // console.log("product from categary", res.data.categories);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    allCategary();
  }, []);

  return (
    <>
      <div className="hometop2cont mt-4 mb-4">
        {data?.slice(0, 6)?.map((i, index) => (
          <Dropdown
            overlay={
              <Menu className="Cat_Drop">
                {i.subCategory?.map((item) => (
                  <Menu.Item key={item._id}>
                    <div className="Drop_Categories">
                      <p
                        onClick={() =>
                          navigate(
                            `/complete/subcategorywise/product/${item._id}`
                          )
                        }
                      >
                        {" "}
                        {item.name}{" "}
                      </p>
                    </div>
                  </Menu.Item>
                ))}
              </Menu>
            }
            key={index}
            getPopupContainer={(trigger) => trigger.parentNode}
          >
            <div className="hometopitm">
              <p style={{ fontWeight: "600", fontSize: "18px" }}>
                {i.categories?.name}
                <span className="ml-2 mt-3">
                  <i className="fa-solid fa-angle-down" />
                </span>
              </p>
            </div>
          </Dropdown>
        ))}
      </div>
    </>
  );
};

export default NavbarCategory2;

import React, { useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory2 from "../Homepage/NavbarCategory/NavbarCategory2";
import Footer from "../Homepage/Footer/Footer";
import Baseurl from "../../Baseurl";
import axios from "axios";

export default function PaymentSuccess() {
  //apply condition if success delete all card detail else not
  // const getDeleteData=async()=>{
  //   const url=`${Baseurl()}api/v1/cart/remove/cart/all`
  //       try {
  //           const res=await axios.delete(url,{
  //               headers: {
  //                 Authorization: `Bearer ${localStorage.getItem("boon")}`,
  //               },
  //             })
  //       } catch (error) {
  //           console.log(error);
  //       }
  // }

  // useEffect(()=>{
  //   getDeleteData();
  // },[])

  return (
    <>
      <Navbar />
      {/* <NavbarCategory2 />

      <p>payment is successfull</p>

      <Footer /> */}
    </>
  );
}

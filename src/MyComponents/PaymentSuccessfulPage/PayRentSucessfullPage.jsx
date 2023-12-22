import React, { useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory2 from "../Homepage/NavbarCategory/NavbarCategory2";
import Footer from "../Homepage/Footer/Footer";
import Baseurl from "../../Baseurl";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function PayRentSucessfullPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const postHandler = async () => {
    try {
      const res = await axios.put(
        `https://lokender-backend-api.vercel.app/api/v1/pay/rent/update/status/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("boon")}`,
          },
        }
      );
      // alert("Success");
      navigate("/");
    } catch {}
  };

  useEffect(() => {
    postHandler();
  }, [id]);

  return (
    <>
      <Navbar />
    </>
  );
}

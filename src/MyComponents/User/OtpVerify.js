import React,{ useRef } from "react";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory2 from '../Homepage/NavbarCategory/NavbarCategory2';
import Footer from "../Homepage/Footer/Footer";
import { useFormik } from "formik";
import Baseurl from "../../Baseurl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OtpVerify = () => {
  const navigate = useNavigate();
  const otpRef = useRef();
  const signUp = async (data) => {

    const mobile = {
      mobileNumber: data.Mobile,
    }

    let url = `${Baseurl()}api/v1/verify/otp`;
    console.log("url", url)
    try {
      const res = await axios.post(url, mobile);
      console.log("signup", res);
      localStorage.setItem("boon", res.data.token);
      navigate("/user/login");
      toast.success("SingUp ! Success");
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = otpRef.current.value;
    console.log(otp)
  }
 

  return (
    <>
      <Navbar />
      <NavbarCategory2 />
      <section class="">
        <div class="container  px-6 py-12 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="w-full"
                alt="Phone image"
              />
            </div>
            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={handleSubmit}>
                
                {/* <!-- otp input --> */}
                <div class="mb-6">
                  <input
                    type="password"
                    name="otp"
                    ref={otpRef}
                    maxLength={10}                    
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="OTP"
                  />
                </div>               

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Verify
                </button>
                {/* <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p class="text-center font-semibold mx-4 mb-0">OR</p>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OtpVerify;

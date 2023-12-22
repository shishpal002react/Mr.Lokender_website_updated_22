import React, { useState } from "react";
import { BsCheckCircle, BsBox } from "react-icons/bs";
import SellerNav from "./SellerNav";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BiBookAlt } from "react-icons/bi";
import Footer from "../Homepage/Footer/Footer";
import done from "../Images/done.gif";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useFormik } from "formik";
import Navbar from '../Homepage/Navbar/Navbar'
import NavbarCategory2 from '../Homepage/NavbarCategory/NavbarCategory2'
import axios from "axios";
import Baseurl from "../../Baseurl";

const RegisterSeller = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const completeFormStep = () => {
    setStep((cur) => cur + 1);
  };


  const handleFormSubmit = async(data) => {
    try {
      let url = `${Baseurl()}api/v1/register/seller`;

      const body = {
        name: data.Name,
        email: data.email,
        number: data.Mobile,
        password: data.password,
        gstin: data.gstin,
        storeName: data.storeName,
        storeAddress: data.storeAddress,
      }
      console.log("body data", body)
      const res = await axios.post(url, body);
      console.log(res);
      completeFormStep();
    } catch (error) {
      console.log(error)
    }
  }
  const stepLoader = () => {
    return (
      <>
        {step === 0 && (
          <div class="container mx-auto py-5 w-full md:p-5">
            <div class="mx-4 p-4">
              <div class="flex items-center">
                <div class="flex items-center text-teal-600 relative">
                  <div class="rounded-full bg-black transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
                    <BsCheckCircle className="text-2xl items-center w-full" />
                  </div>
                  <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                    EMAIL ID & GST
                  </div>
                </div>
                <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
                <div class="flex items-center text-gray-500 relative">
                  <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                    <BsCheckCircle className="w-full items-center text-2xl" />
                  </div>
                  <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                    Password Creation
                  </div>
                </div>
                <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                <div class="flex items-center text-gray-500 relative">
                  <div class="rounded-full  transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                    <BsCheckCircle className="text-white text-2xl items-center w-full" />
                  </div>
                  <div class="absolute top-0 -ml-10 text-center mt-16 w-36 text-xs font-medium uppercase text-gray-500">
                    ONBOARDING DASHBOARD
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 1 && (
          <div class="container mx-auto py-5 w-full md:p-5">
            <div class="mx-4 p-4">
              <div class="flex items-center">
                <div class="flex items-center text-teal-600 relative">
                  <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
                    <BsCheckCircle className="text-2xl items-center w-full" />
                  </div>
                  <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                    EMAIL ID & GST
                  </div>
                </div>
                <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
                <div class="flex items-center text-gray-500 relative">
                  <div class="rounded-full bg-black transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                    <BsCheckCircle className="w-full items-center text-2xl" />
                  </div>
                  <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                    Password Creation
                  </div>
                </div>
                <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                <div class="flex items-center text-gray-500 relative">
                  <div class="rounded-full  transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                    <BsCheckCircle className="text-white text-2xl items-center w-full" />
                  </div>
                  <div class="absolute top-0 -ml-10 text-center mt-16 w-36 text-xs font-medium uppercase text-gray-500">
                    ONBOARDING DASHBOARD
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div class="container mx-auto py-5 w-full md:p-5">
            <div class="mx-4 p-4">
              <div class="flex items-center">
                <div class="flex items-center text-teal-600 relative">
                  <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
                    <BsCheckCircle className="text-2xl items-center w-full" />
                  </div>
                  <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                    EMAIL ID & GST
                  </div>
                </div>
                <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
                <div class="flex items-center text-gray-500 relative">
                  <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                    <BsCheckCircle className="w-full items-center text-2xl" />
                  </div>
                  <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                    Password Creation
                  </div>
                </div>
                <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                <div class="flex items-center text-gray-500 relative">
                  <div class="rounded-full bg-black transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                    <BsCheckCircle className="text-white text-2xl items-center w-full" />
                  </div>
                  <div class="absolute top-0 -ml-10 text-center mt-16 w-36 text-xs font-medium uppercase text-gray-500">
                    ONBOARDING DASHBOARD
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  // Formik
  const formik = useFormik({
    initialValues: {
      password: "",
      Name: "",
      email: "",
      Mobile: data ? data : "",
      gstin: "",
      storeName: "",
      storeAddress: "",

    },
    onSubmit: (values, { resetForm }) => {
      console.log("formik called")
      console.log(values);
      handleFormSubmit(values);
      resetForm();
    },
  });

  const style = {
    backgroundColor: "#C1C7E3",
    border: "1px solid #213EC2",
    borderRadius: "10px",
  };

  const style2 = {
    backgroundColor: "#BEBEBE",
    border: "1px solid #3D3D3E",
    borderRadius: "10px",
  };
  const [isGst, setIsGst] = useState(true);
  const [isPan, setIsPan] = useState(false);

  const handleClick = () => {
    setIsGst(true);
    setIsPan(false);
  };
  const handleClick2 = () => {
    setIsGst(false);
    setIsPan(true);
  };
  return (
    <>
      {stepLoader()}
      <form onSubmit={formik.handleSubmit}>
        {step === 0 && (
          <section>
            <div className="container rounded-md shadow-2xl space-y-6 bg-white p-6 md:w-3/5 mx-auto mt-20 mb-10">
              <div className="  flex rounded-md items-center border-[#0000003b] border justify-between">
                <input
                  value={formik.values.Mobile}
                  onChange={formik.handleChange}
                  className="outline-none py-2 pl-2 w-full bg-transparent"
                  type="tel"
                  name="Mobile"
                  id="mobile"
                  required
                  placeholder="Enter Mobile Number"
                />
                <button
                  className="bg-black text-white px-10 py-[5px] m-1 rounded-md"
                  style={{
                    backgroundColor: "rgba(196, 196, 196, 0.21)",
                    color: "#333",
                  }}
                >
                  Sent OTP
                </button>
              </div>

              <div className="  flex rounded-md items-center border-[#0000003b] border justify-between">
                <input
                  className="outline-none py-4 w-full bg-transparent  pl-2"
                  type="email"
                  name="email"
                  required
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Enter Email ID"
                />
              </div>
              <h2 className="text-lg font-medium">
                Do you have a GSTIN? Please Selectone of the following options
              </h2>
              <div className="flex items-center space-x-6 ">
                <div
                  className="flex items-center border border-[#0000003b] space-x-4 p-3 rounded-md cursor-pointer"
                  onClick={handleClick}
                  style={isGst ? style : style2}
                >
                  <h3 className="text-base">I have GST IN</h3>
                </div>
                <div
                  className="flex items-center border border-[#0000003b] space-x-4 p-3 rounded-md cursor-pointer"
                  style={isPan ? style : style2}
                  onClick={handleClick2}
                >
                  <h3 className="text-base">I do not have a GST IN</h3>
                </div>
              </div>
              {
                isGst ? 
              <div className=" space-y-3">
                <input
                  className="border-[#0000003b] border outline-none rounded-md py-2 w-full bg-transparent  pl-2"
                  type="text"
                  name="gstin"
                  id="gstin"
                  placeholder="Enter GSTIN"
                  value={formik.values.gstin}
                  onChange={formik.handleChange}
                />
                <p className="text-gray-500">
                  GSTIN is required to sell products on Boon. You can also share
                  it in the final step.
                </p>
              </div>
              :
              <div className=" space-y-3">
                <input
                  className="border-[#0000003b] border outline-none rounded-md py-2 w-full bg-transparent  pl-2"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter PAN Number"
                />
                <p className="text-gray-500">
                  PAN is required to sell books on Boon. You can also share it
                  in the final step.
                </p>
              </div>}
              <p>
                By continuing, I agree to Boon Terms of Use & Privacy Policy
              </p>
              <div
                onClick={completeFormStep}
                className="flex items-center cursor-pointer space-x-3 bg-black w-52 text-white justify-center py-2 rounded-md font-medium"
                style={{backgroundColor:"#0039CC", color:"#fff"}}
              >
                <h2>Register & Continue</h2>
                <HiArrowNarrowRight className="text-lg" />
              </div>
            </div>
          </section>
        )}
        {step === 1 && (
          <section>
            <div className="container rounded-md shadow-2xl space-y-6 bg-white p-6 md:w-3/5 mx-auto mt-20 mb-10">
              <div className="rounded-md items-center ">
                <h2 className="text-xl mb-2 font-medium">we have sent verification link to your email</h2>
                <p>
                  We need these details to set up your account. You can also
                  choose to fill them in the next step.
                </p>
              </div>
              <div className="  flex rounded-md items-center border-[#0000003b] border justify-between">
                <input
                  className="outline-none py-2 w-full bg-transparent  pl-2"
                  type="password"
                  name="password"
                  id="password"
                  required
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="Create Password"
                />
              </div>
              <div className="rounded-md items-center ">
                <h2 className="text-xl mb-2 font-medium">Suggested Password</h2>
              </div>
              <div className="  flex rounded-md items-center border-[#0000003b] border justify-between">
                <input
                  className="outline-none py-2 w-full bg-transparent  pl-2"
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="Enter your Full Name"
                  value={formik.values.Name}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="  flex rounded-md items-center border-[#0000003b] border justify-between">
                <input
                  className="outline-none py-2 w-full bg-transparent  pl-2"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your Display Name"
                />
              </div>
              
              <div
                onClick={completeFormStep}
                className="flex items-center cursor-pointer space-x-3 bg-black w-32 text-white justify-center py-2 rounded-md font-medium"
                style={{backgroundColor:"#0039CC", color:"#fff"}}
              >
                <h2>Continue</h2>
                <HiArrowNarrowRight className="text-lg" />
              </div>
            </div>
          </section>
        )}
        {step === 2 && (
          <section>
            <div className="container rounded-md shadow-2xl space-y-6 bg-white p-6 md:w-2/5 mx-auto mt-20 mb-10">
              <div className="rounded-md items-center ">
                <h2 className="text-xl mb-2 font-medium">Last Step...</h2>
              </div>
              <div className="  flex rounded-md items-center border-[#0000003b] border justify-between">
                <input
                  className="outline-none py-2 w-full bg-transparent  pl-2"
                  type="text"
                  name="storeName"
                  id="storeName"
                  placeholder="Enter Your Store Name"
                  value={formik.values.storeName}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="  flex rounded-md items-center border-[#0000003b] border justify-between">
                <textarea
                  placeholder="Enter Store Address"
                  className="outline-none py-2 w-full bg-transparent  pl-2"
                  name="storeAddress"
                  id="storeAddress"
                  rows="3"
                  value={formik.values.storeAddress}
                  onChange={formik.handleChange}
                ></textarea>
              </div>
              <button
                // onClick={completeFormStep}
               type="submit"
                className="flex items-center cursor-pointer space-x-3 bg-black w-52 text-white justify-center py-2 rounded-md font-medium"
                style={{backgroundColor:"#0039CC", color:"#fff"}}
              >
                <h2>Create Account</h2>
                
                <HiArrowNarrowRight className="text-lg" />
              </button>
            </div>
          </section>
        )}
      </form>
      {step === 3 && (
        <section>
          <div className="container rounded-md shadow-2xl space-y-6 bg-white p-6 md:w-2/5 mx-auto mt-20">
            <div className="rounded-md justify-center flex flex-col items-center ">
              <img src={done} alt="" />
              <h2 className="text-xl mb-2 font-medium">
                Your Account Created a Successfully
              </h2>
            </div>
            <div
              onClick={() => {
                navigate("/");
              }}
              className="flex items-center cursor-pointer space-x-3 bg-black  text-white justify-center py-2 rounded-md font-medium"
            >
              <h2>Thank You</h2>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RegisterSeller;

import React, { useState } from "react";
import img from "../../Images/d41.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Table, Modal, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import Baseurl from "../../Baseurl";

const ReactCont = () => {
  const [landlord, setLandlord] = useState(false);
  const [tuition, setTuition] = useState(false);
  const [society, setSociety] = useState(false);
  const [office, setOffice] = useState(false);
  const [school, setSchool] = useState(false);
  // data information
  const [data, setData] = useState("");

  //payment api
  // const createOrderHandler = async () => {
  const createOrderHandler = async (cartDetails) => {
    try {
      const options = {
        key: "rzp_test_JLYSrkvFXSpSQv",
        // amount: cartDetails.totalAmount * 100,
        amount: 100 * 100,
        currency: "INR",
        // name: cartDetails.title,
        description: "Tutorial of RazorPay",
        image: "https://example.com/your_logo",
        handler: function (response) {
          // alert("Payment Done");
          window.location.href = `/payment/payRentsuccessfullpage/${cartDetails._id}`;
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log(error);
    }
  };

  // Post model
  function MyVerticallyCenteredModallandlord(props) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [payment, setPayment] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [confirm, setConfiorm] = useState("");
    const [ifsc, setIFSC] = useState("");
    const [bhk, setBHK] = useState("");
    const [rent, setRent] = useState("");
    const [address, setAddress] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [pan, setPan] = useState("");

    const postData = async (e) => {
      e.preventDefault();
      console.log("ls", localStorage.getItem("token"));
      let url = `https://lokender-backend-api.vercel.app/api/v1/pay/rent/add`;
      try {
        const res = await axios.post(
          url,
          {
            type: "landlord",
            landlord: {
              name: name,
              number: number,
              payment: payment,
              accountNumber: accountNumber,
              confirm: confirm,
              ifsc: ifsc,
              bhk: bhk,
              rent: rent,
              address: address,
              pinCode: pinCode,
              pan: pan,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("boon")}`,
            },
          }
        );
        toast("Data is save successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        setLandlord(false);
        createOrderHandler(res?.data?.rentPayment);
      } catch (error) {
        toast(error.response.data.message, {
          position: toast.POSITION.TOP_LEFT,
        });
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {"Pay Landlord Rent"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postData}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                Label="Enter name"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Payment Method</Form.Label>
              <Form.Control
                type="text"
                value={payment}
                placeholder="Enter Amount"
                onChange={(e) => setPayment(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Account Number"
                value={confirm}
                onChange={(e) => setConfiorm(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>IFSC Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter IFSC code"
                value={ifsc}
                onChange={(e) => setIFSC(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>BHK</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter HBK"
                value={bhk}
                onChange={(e) => setBHK(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rent</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Rent"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>pinCode</Form.Label>
              <Form.Control
                placeholder="Enter PinCode"
                type="text"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pan Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Pan Number"
                value={pan}
                onChange={(e) => setPan(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              style={{
                backgroundColor: "#19376d",
                borderRadius: "0",
                border: "1px solid #19376d",
              }}
              type="submit"
              id="mobile_rent_buttons"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function MyVerticallyCenteredModaltuition(props) {
    const [name, setName] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [payment, setPayment] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [confirm, setConfirm] = useState("");
    const [ifsc, setIfsc] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    const postData = async (e) => {
      e.preventDefault();
      console.log("ls", localStorage.getItem("token"));
      let url = `https://lokender-backend-api.vercel.app/api/v1/pay/rent/add`;
      try {
        const res = await axios.post(
          url,
          {
            type: "tuition",
            data: {
              name: name,
              rollNumber: rollNumber,
              contactNumber: contactNumber,
              email: email,
              payment: payment,
              accountNumber: accountNumber,
              confirm: confirm,
              ifsc: ifsc,
              address: address,
              city: city,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("boon")}`,
            },
          }
        );
        console.log("Data is create successfully", res.data);
        toast("Data is create successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        setTuition(false);
        createOrderHandler(res?.data?.rentPayment);
      } catch (error) {
        toast(error.response.data.message, {
          position: toast.POSITION.TOP_LEFT,
        });
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {"Tuition Rent"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postData}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Roll Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Roll Number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Payment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Payment"
                value={payment}
                s
                onChange={(e) => setPayment(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Confirm Account Number"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>IFSC code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter IfSC Code"
                value={ifsc}
                onChange={(e) => setIfsc(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address Information </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              style={{
                backgroundColor: "#19376d",
                borderRadius: "0",
                border: "1px solid #19376d",
                "@media only screen and (max-width: 400px)": {
                  // Mobile styles
                  width: "90%",
                  margin: "auto",
                  borderRadius: "5px",
                  backgroundColor: "#f0f0f0",
                  border: "none",
                },
              }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function MyVerticallyCenteredModalsociety(props) {
    const [name, setName] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [payment, setPayment] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [confirm, setConfirm] = useState("");
    const [ifsc, setIfsc] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    const postData = async (e) => {
      e.preventDefault();
      console.log("ls", localStorage.getItem("token"));
      let url = `https://lokender-backend-api.vercel.app/api/v1/pay/rent/add`;
      try {
        const res = await axios.post(
          url,
          {
            type: "society",
            data: {
              name: name,
              rollNumber: rollNumber,
              contactNumber: contactNumber,
              email: email,
              payment: payment,
              accountNumber: accountNumber,
              confirm: confirm,
              ifsc: ifsc,
              address: address,
              city: city,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("boon")}`,
            },
          }
        );
        console.log("Data is create successfully", res.data);
        createOrderHandler();
        toast("Data is create successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        setSociety(false);
        createOrderHandler(res?.data?.rentPayment);
      } catch (error) {
        toast(error.response.data.message, {
          position: toast.POSITION.TOP_LEFT,
        });
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {"Society Rent"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postData}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Roll Number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Payment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Payment"
                value={payment}
                s
                onChange={(e) => setPayment(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Confirm Account Number"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>IFSC code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter IfSC Code"
                value={ifsc}
                onChange={(e) => setIfsc(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address Information </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              style={{
                backgroundColor: "#19376d",
                borderRadius: "0",
                border: "1px solid #19376d",
                "@media only screen and (max-width: 400px)": {
                  // Mobile styles
                  width: "90%",
                  margin: "auto",
                  borderRadius: "5px",
                  backgroundColor: "#f0f0f0",
                  border: "none",
                },
              }}
              type="submit"
              onClick={() => createOrderHandler()}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function MyVerticallyCenteredModalOffice(props) {
    const [name, setName] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [payment, setPayment] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [confirm, setConfirm] = useState("");
    const [ifsc, setIfsc] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    const postData = async (e) => {
      e.preventDefault();
      console.log("ls", localStorage.getItem("token"));
      let url = `https://lokender-backend-api.vercel.app/api/v1/pay/rent/add`;
      try {
        const res = await axios.post(
          url,
          {
            type: "office",
            data: {
              name: name,
              rollNumber: rollNumber,
              contactNumber: contactNumber,
              email: email,
              payment: payment,
              accountNumber: accountNumber,
              confirm: confirm,
              ifsc: ifsc,
              address: address,
              city: city,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Data is create successfully", res.data);
        toast("Data is create successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        setOffice(false);
        createOrderHandler(res?.data?.rentPayment);
      } catch (error) {
        toast(error.response.data.message, {
          position: toast.POSITION.TOP_LEFT,
        });
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {"Office Rent"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postData}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Roll Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Roll Number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Payment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Payment"
                value={payment}
                s
                onChange={(e) => setPayment(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Confirm Account Number"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>IFSC code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter IfSC Code"
                value={ifsc}
                onChange={(e) => setIfsc(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address Information </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              style={{
                backgroundColor: "#19376d",
                borderRadius: "0",
                border: "1px solid #19376d",
                "@media only screen and (max-width: 400px)": {
                  // Mobile styles
                  width: "90%",
                  margin: "auto",
                  borderRadius: "5px",
                  backgroundColor: "#f0f0f0",
                  border: "none",
                },
              }}
              type="submit"
              onClick={() => createOrderHandler()}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function MyVerticallyCenteredModalSchool(props) {
    const [name, setName] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [payment, setPayment] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [confirm, setConfirm] = useState("");
    const [ifsc, setIfsc] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    const postData = async (e) => {
      e.preventDefault();
      console.log("ls", localStorage.getItem("token"));
      let url = `https://lokender-backend-api.vercel.app/api/v1/pay/rent/add`;
      try {
        const res = await axios.post(
          url,
          {
            type: "school",
            data: {
              name: name,
              rollNumber: rollNumber,
              contactNumber: contactNumber,
              email: email,
              payment: payment,
              accountNumber: accountNumber,
              confirm: confirm,
              ifsc: ifsc,
              address: address,
              city: city,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("boon")}`,
            },
          }
        );
        console.log("Data is create successfully", res.data);
        toast("Data is create successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        setSchool(false);
        createOrderHandler(res?.data?.rentPayment);
      } catch (error) {
        toast(error.response.data.message, {
          position: toast.POSITION.TOP_LEFT,
        });
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {"School Rent"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postData}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Roll Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Roll Number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Payment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Payment"
                value={payment}
                s
                onChange={(e) => setPayment(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Confirm Account Number"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>IFSC code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter IfSC Code"
                value={ifsc}
                onChange={(e) => setIfsc(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address Information </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              style={{
                backgroundColor: "#19376d",
                borderRadius: "0",
                border: "1px solid #19376d",
                "@media only screen and (max-width: 400px)": {
                  // Mobile styles
                  width: "90%",
                  margin: "auto",
                  borderRadius: "5px",
                  backgroundColor: "#f0f0f0",
                  border: "none",
                },
              }}
              type="submit"
              onClick={() => createOrderHandler()}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModallandlord
        show={landlord}
        onHide={() => setLandlord(false)}
      />
      <MyVerticallyCenteredModaltuition
        show={tuition}
        onHide={() => setTuition(false)}
      />
      <MyVerticallyCenteredModalsociety
        show={society}
        onHide={() => setSociety(false)}
      />
      <MyVerticallyCenteredModalOffice
        show={office}
        onHide={() => setOffice(false)}
      />
      <MyVerticallyCenteredModalSchool
        show={school}
        onHide={() => setSchool(false)}
      />
      <div className="rentcont">
        <h3>My Payment</h3>

        <div className="rentitem">
          <img src={img} alt="" />
          <p>Landlord</p>
          <button onClick={() => setLandlord(true)}>Pay</button>
        </div>
        <div className="rentitem">
          <img src={img} alt="" />
          <p>Tuition</p>
          <button onClick={() => setTuition(true)}>Pay</button>
        </div>
        <div className="rentitem">
          <img src={img} alt="" />
          <p>Society</p>
          {/* <button onClick={() => handleData("society")}>Pay</button> */}
          <button onClick={() => setSociety(true)}>Pay</button>
        </div>
        <div className="rentitem">
          <img src={img} alt="" />
          <p>office</p>
          <button onClick={() => setOffice(true)}>Pay</button>
        </div>
        <div className="rentitem">
          <img src={img} alt="" />
          <p>school</p>
          <button onClick={() => setSchool(true)}>Pay</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ReactCont;

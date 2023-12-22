import React, { useEffect, useState } from "react";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory2 from "../Homepage/NavbarCategory/NavbarCategory2";
import Footer from "../Homepage/Footer/Footer";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiTwotoneDelete,
} from "react-icons/ai";
import Baseurl from "../../Baseurl";
import axios from "axios";
import { TbTruckDelivery } from "react-icons/tb";
import img from "../../Images/d42.png";
import { toast } from "react-toastify";

// import Razorpay1 from "./Razorpay1";
const Cart = () => {
  const [pop, setPop] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartDetails, setCartDetails] = useState({});
  const [add, setAdd] = useState("");
  const [total, setTotal] = useState([]);

  const getCart = async () => {
    console.log("ls", localStorage.getItem("boon"));
    let url = `${Baseurl()}api/v1/cart`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      // setCartPro(res.data.data.products);
      // console.log("cart produts",res.data);
      setCartProducts(res?.data?.products);
      console.log("cart data is printed ", res.data.products);
      setCartDetails(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  // Increase
  const inc = async (id) => {
    let url = `${Baseurl()}api/v1/cart/increase/quantity`;
    let formData = {
      productId: id,
    };
    try {
      const res = await axios.put(url, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      getCart();
      console.log(res, "pppopopop");
    } catch (error) {
      console.log(error);
    }
  };

  //user data
  const userData = JSON.parse(localStorage.getItem("userDataBoon"));

  console.log(userData);

  console.log("userdata ", userData);

  const createOrderHandler = async (cartDetails) => {
    let url = `${Baseurl()}api/v1/orders`;
    try {
      const body = { address: "123 street" };
      const config = {
        headers: {
          Token: `${localStorage.getItem("boon")}`,
        },
      };
      config.headers["Authorization-Type"] = "Bearer Token";

      const res = await axios.post(url, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });

      const options = {
        key: "rzp_test_JLYSrkvFXSpSQv",
        amount: cartDetails.totalAmount * 100,
        currency: "INR",
        name: cartDetails.title,
        description: "Tutorial of RazorPay",
        image: cartDetails?.productimage?.[0],
        handler: function (response) {
          // alert("Payment Done");
          window.location.href = `/payment/successfullpage/${res.data.orderId}`;
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

  // Decrease
  const dec = async (id) => {
    let url = `${Baseurl()}api/v1/cart/decrease/quantity`;
    let formData = {
      productId: id,
    };
    try {
      const res = await axios.put(url, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      getCart();
      console.log(res, "pppopopop");
    } catch (error) {
      console.log(error);
    }
  };

  // remove
  const del = async (id) => {
    let url = `${Baseurl()}api/v1/cart/remove/${id}`;
    try {
      const res = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      getCart();
      console.log(res, "pppopopop");
    } catch (error) {
      console.log(error);
    }
  };

  // Checkout
  const check = async () => {
    let url = `${Baseurl()}api/order/checkout`;
    let url2 = `${Baseurl()}api/order/place-order`;
    const payload = {
      address: add,
    };

    try {
      const res = await axios.post(url, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      setAdd("");
      setTotal(res.data.order);

      setPop(true);
      const res2 = await axios.post(
        url2,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("boon")}`,
          },
        }
      );
      localStorage.setItem("orderID", res2.data.data.orderId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <NavbarCategory2 />
      <div className="cartcont">
        <div className="cartcontl">
          <div className="cartconttop">
            <div className="cartconttopl">
              <h3>My Cart</h3>
            </div>
            <div className="cartconttopr">
              <p style={{ display: "flex", marginRight: "10px" }}>
                {" "}
                <TbTruckDelivery />{" "}
                <p style={{ marginLeft: "10px" }}> Delivered to</p>
              </p>
              <select className="cartselect">
                <option value="New Delhi">New Delhi</option>
                <option value="baraut">Jaipur</option>
                <option value="baghpat">Agra</option>
              </select>
            </div>
          </div>
          {cartProducts.length > 0 &&
            cartProducts.map((product, i) => {
              return (
                <div className="cartcont2">
                  <div className="cartcont2l">
                    <div className="cartprod">
                      <div className="cartprodl">
                        <img src={product?.productId?.images?.[0]} alt="" />
                      </div>
                      <div className="cartprodr">
                        <h6>Product Name: {product?.productId?.name}</h6>
                        <p>
                          Product color detail:{" "}
                          {product?.productId?.color?.join(",")}
                        </p>
                        <p>
                          Price: {product?.name} &#x20b9;{" "}
                          <strong>{product?.price}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="cartcont2r">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        marginRight: "90px",
                      }}
                    >
                      <button
                        type="button"
                        style={{
                          fontSize: "20px",
                          fontWeight: "700",
                          cursor: "pointer",
                          border: "1px solid black",
                          borderRadius: "2px",
                          padding: "3px",
                        }}
                        onClick={() => del(product?.productId?._id)}
                      >
                        <AiTwotoneDelete />
                      </button>
                    </div>

                    <h6>Deliverd Expected Date {product?.expectedDate}</h6>
                    <p>7 Days Replacement Policy</p>

                    <div
                      style={{
                        display: "flex",
                        marginRight: "90px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid black",
                        borderRadius: "10px",
                        marginTop: "5px",
                      }}
                    >
                      <button
                        type="button"
                        style={{
                          fontSize: "25px",
                          fontWeight: "700",
                          cursor: "pointer",
                          paddingLeft: "20px",
                        }}
                        onClick={() => inc(product?.productId?._id)}
                      >
                        <AiFillPlusCircle />
                      </button>
                      <p
                        style={{
                          borderLeft: "1px solid black",
                          borderRight: "1px solid black",
                          paddingLeft: "12px",
                          paddingRight: "12px",
                        }}
                      >
                        {product?.quantity}
                      </p>
                      <button
                        type="button"
                        style={{
                          fontSize: "25px",
                          fontWeight: "700",
                          cursor: "pointer",
                          paddingRight: "25px",
                          marginLeft: "2px",
                        }}
                        onClick={() => dec(product?.productId?._id)}
                      >
                        <AiFillMinusCircle />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* <div className="cartcont2">
            <div className="cartcont2l">
              <div className="cartprod">
                <div className="cartprodl">
                  <img src={img} alt="" />
                </div>
                <div className="cartprodr">
                  <h6>Product Name</h6>
                  <p>Product color detail</p>
                  <p>Seller:</p>
                  <p> &#x20b9; 199</p>
                </div>
              </div>
            </div>
            <div className="cartcont2r">
              <h6>Deliverd by Tue Apr 26</h6>
              <p>7 Days Replacement Policy</p>
            </div>
          </div> */}
        </div>

        {cartDetails && (
          <div className="cartcontr">
            <h5>Price Details</h5>
            <hr style={{ width: "90%", marginTop: "2%" }} />
            <div className="cartprice">
              <p>Price ({cartDetails?.totalQuantity} Item)</p>
              <p>
                &#x20b9;{" "}
                {cartDetails?.totalAmount - cartDetails?.deliveryCharge}
              </p>
            </div>

            <div className="cartprice">
              <p>Discount</p>
              <p>&#x20b9; {cartDetails?.discount}</p>
            </div>
            <div className="cartprice">
              <p>Delivery Charge</p>
              <p>&#x20b9; {cartDetails?.deliveryCharge}</p>
            </div>
            <hr style={{ width: "90%", marginTop: "2%", color: "#333" }} />
            <div className="cartprice">
              <p style={{ fontWeight: "500px" }}>Total Amount</p>
              <p>&#x20b9; {cartDetails?.totalAmount}</p>
            </div>
            <hr style={{ width: "90%", marginTop: "2%", color: "#333" }} />

            <button
              onClick={() => createOrderHandler(cartDetails)}
              className="bg-gray-700 text-white text-sm py-[2px] px-2 rounded-md"
              style={{ marginTop: "20px" }}
            >
              Place Order
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;

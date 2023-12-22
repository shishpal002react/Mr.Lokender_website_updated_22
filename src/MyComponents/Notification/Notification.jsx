import React, { useEffect, useState } from "react";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import Footer from "../Homepage/Footer/Footer";
import Baseurl from "../../Baseurl";
import axios from "axios";

const Notification = () => {
  // coupon all products
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    let url = `${Baseurl()}api/v1/notify`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("coupon ", res.data.message);
      setProducts(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <NavbarCategory />
      <div className="Coupon-design">
        <table className="Coupon-under">
          <tr>
            <th className="coupon-gap">Notification Message</th>
            <th className="coupon-gap">ActivationDate</th>
          </tr>
          {products?.map((item) => (
            <tr>
              <td className="coupon-gap">{item.message}</td>
              <td className="coupon-gap">
                {new Date(item.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Notification;

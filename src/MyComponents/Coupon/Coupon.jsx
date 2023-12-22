import React, { useEffect, useState } from "react";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import Footer from "../Homepage/Footer/Footer";
import Baseurl from "../../Baseurl";
import axios from "axios";

const Coupon = () => {
  // coupon all products
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    let url = `${Baseurl()}api/v1/coupon/all`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("coupon ", res.data.coupons);
      setProducts(res.data.coupons);
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
            <th className="coupon-gap">Coupon Code</th>
            <th className="coupon-gap">ActivationDate</th>
            <th className="coupon-gap">ExpirationDate</th>
            <th className="coupon-gap">Discount Apply</th>
            <th className="coupon-gap">MinOrder</th>
          </tr>
          {products?.map((item) => (
            <tr>
              <td className="coupon-gap">{item.couponCode}</td>
              <td className="coupon-gap">
                {new Date(item.activationDate).toLocaleDateString()}
              </td>
              <td className="coupon-gap">
                {new Date(item.expirationDate).toLocaleDateString()}
              </td>
              <td className="coupon-gap">{item.discount}</td>
              <td className="coupon-gap">{item.minOrder}</td>
            </tr>
          ))}
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Coupon;

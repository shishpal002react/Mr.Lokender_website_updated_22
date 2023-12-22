import React, { useEffect, useState } from "react";
import { OfferData } from "../../../ArrayData/ArrayData";
import Baseurl from "../../../Baseurl";
import axios from "axios";

const OfferSection = () => {
  const [offerData, setOfferData] = useState([]);
  const getProducts = async () => {
    console.log("ls", localStorage.getItem("boon"));
    let url = `${Baseurl()}api/v1/my/products/offers`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("offer product", res.data.data);
      setOfferData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="hidden md:grid grid-cols-3 mx-3 ">
        {offerData.length > 0 &&
          offerData?.slice(0, 3)?.map((product) => {
            return (
              <div className="mx-4 p-4">
                <img src={product.images[0]} alt="" />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default OfferSection;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Homepage/Navbar/Navbar";
import Baseurl from "../../Baseurl";
import axios from "axios";
import Card from "../Homepage/ProductSection/Card";

const Common = () => {
  const location = useLocation();
  const id = location.state;
  const [products, setProducts] = useState([]);
  const [sc, setSc] = useState("");
  const [subCat, setSubCat] = useState([]);
  const [updated, setUpdated] = useState([]);
  const [final, setFinal] = useState([]);
  // Get Sub Category
  const getSubCat = async () => {
    let url = `${Baseurl()}api/v1/admin/allSubCategory`;
    try {
      const res = await axios.get(url);
      setSubCat(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Get Products
  const getProducts = async () => {
    let url = `${Baseurl()}api/v1/products`;
    try {
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  //   filetr
  const filterPro = () => {
    const res = products.filter((item) => {
      return item.category === id;
    });
    console.log(res);
    setUpdated(res);
  };
  useEffect(() => {
    getProducts();
    getSubCat();
    filterPro();
  }, []);
  const filter2 = (event) => {
    const res = updated?.filter((item) => {
      return item.category === event;
    });
    setFinal(res);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center gap-5  bg-white py-6 px-10 ">
        {subCat
          ?.filter((item) => {
            return item?.owner === id;
          })
          .map((s, i) => {
            return (
              <div key={i}>
                <h2
                  onClick={() => {
                    filter2(s._id);
                  }}
                  className="text-lg cursor-pointer font-medium"
                >
                  {s.subcategory}
                </h2>
              </div>
            );
          })}
      </div>
      <div className="container mx-auto sm:px-0 p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {final.length >= 0
            ? final
            : products.map((e) => {
                return (
                  <>
                    <Card e={e} />
                  </>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default Common;

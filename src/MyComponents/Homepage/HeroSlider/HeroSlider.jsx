import React, { useEffect, useState } from "react";
import img from "../../../Images/d10.png";
import img2 from "../../../Images/d11.png";
import Baseurl from "../../../Baseurl";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

const HeroSlider = () => {
  const [data, setData] = useState([]);

  const getProducts = async () => {
    console.log("ls", localStorage.getItem("token"));
    let url = `${Baseurl()}api/v1/banner`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("product from shoes section", res.data.banners);
      setData(res.data.banners);
      console.log("admin product data", res.data.banners);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  //slider data
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    // <>
    //   <div
    //     id="carouselExampleControls"
    //     class="carousel slide relative slidcont"
    //     data-bs-ride="carousel"
    //   >
    //     <div class="carousel-inner relative w-full overflow-hidden">
    //       <div class="carousel-item active relative float-left w-full">
    //         {data &&
    //           data.map((item) => (
    //             <img
    //               src={item?.image}
    //               class="block w-full"
    //               alt="Wild Landscape"
    //               className="slidimg"
    //             />
    //           ))}
    //       </div>
    //     </div>
    //     <button
    //       class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    //       type="button"
    //       data-bs-target="#carouselExampleControls"
    //       data-bs-slide="prev"
    //     >
    //       <span
    //         class="carousel-control-prev-icon inline-block bg-no-repeat"
    //         aria-hidden="true"
    //       ></span>
    //       <span class="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    //       type="button"
    //       data-bs-target="#carouselExampleControls"
    //       data-bs-slide="next"
    //     >
    //       <span
    //         class="carousel-control-next-icon inline-block bg-no-repeat"
    //         aria-hidden="true"
    //       ></span>
    //       <span class="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </>
    <>
      <div style={{ width: "98%", margin: "auto" }}>
        <Carousel
          data-bs-theme="dark"
          data-bs-ride="carousel"
          activeIndex={index}
          onSelect={handleSelect}
        >
          {data &&
            data.map((item) => (
              <Carousel.Item>
                <img src={item?.image} className="hero-image" />
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
    </>
  );
};

export default HeroSlider;

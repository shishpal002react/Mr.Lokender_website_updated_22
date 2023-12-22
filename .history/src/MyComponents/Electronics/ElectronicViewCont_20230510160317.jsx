/** @format */

import React, { useEffect, useState } from "react";
import img from "../../Images/d22.png";
import img2 from "../../Images/d26.png";
import img3 from "../../Images/d27.png";
import img4 from "../../Images/d26.png";
import img5 from "../../Images/d57.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import newImg from '../../Images/Group 38051.png' ;

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ElectronicViewCont = () => {
  const SlideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const SlideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };


  
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(100/4); 

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth <= 760) {
        setCenterSlidePercentage(100/2); 
      } else if (viewportWidth <= 1220) {
        setCenterSlidePercentage(100/2); 
      } else {
        setCenterSlidePercentage(100/4);
      }
    };

    window.addEventListener("resize", handleResize); 
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="fashviewcont mt-6">
        <div className="fashviewcontl">
          <h3>Filters</h3>
          <div className="filtercont ft">
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>CATEGORIES</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>PRICE</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>BRAND</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>RATINGS</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>RAM</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>INTERNAL STORAGE</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>NETWORK TYPE</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>SCREEN SIZE</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>SIM TYPE</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span> offers</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>TYPE</span>
                  <i class="fa-solid fa-caret-down dpci"></i>
                </div>
              </div>
            </div>
            <div className="filteritem">
              <div class="dropdown">
                <div className="dpc">
                  <span>AVAILABILITY</span>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="fashviewcontr">
          <Carousel
        dynamicHeight={false}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        interval={2000}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerMode={true}
        className="LogoCarousel"
        renderArrowPrev={() => null}
        renderArrowNext={() => null}
        centerSlidePercentage={centerSlidePercentage}
      >
      <img
          src="https://techcrunch.com/wp-content/uploads/2013/03/youtube-logo.jpg"
          alt="Image1"
          className="logoImage"
        />
        <img
          src="https://thumbs.dreamstime.com/b/golden-falcon-bird-vector-logo-design-white-background-182823944.jpg"
          alt="Image2"
          className="logoImage"
        />
        <img
          src="https://thumbs.dreamstime.com/b/paypal-logo-white-background-vector-image-eps-72682465.jpg"
          alt="Image3"
          className="logoImage"
        />
        <img
          src="https://www.seekpng.com/png/detail/397-3971371_tata-logo-vector-symbol-tata-logo-png.png"
          alt="Image3"
          className="logoImage"
        />
        <img
          src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/08/10/194330-tata-chemicals-twitter.png?itok=szqYh2H6"
          alt="Image3"
          className="logoImage"
        />
      </Carousel>
          <div className="fashrightprod">
            <div className="fashrightproditm">
              <div className="rff">
                <div className="proditm">
                  <img className="mobileallimg" src={img} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img className="mobileallimg" src={img2} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img className="mobileallimg" src={img3} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img className="mobileallimg" src={img4} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
              </div>
            </div>
            <div className="fashrightproditm">
              <div className="rff">
                <div className="proditm">
                  <img src={img} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img2} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img3} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img4} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
              </div>
            </div>
            <div className="fashrightproditm">
              <div className="rff">
                <div className="proditm">
                  <img src={img} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img2} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img3} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img4} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
              </div>
            </div>
            <div className="fashrightproditm">
              <div className="rff">
                <div className="proditm">
                  <img src={img} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img2} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img3} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img4} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
              </div>
            </div>
            <div className="fashrightproditm">
              <div className="rff">
                <div className="proditm">
                  <img src={img} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img2} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img3} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
                <div className="proditm">
                  <img src={img4} alt="" />
                  <div className="proditmflex">
                    <h5>Product Name</h5>
                    <button>80% off</button>
                  </div>
                  <div className="proditmflex">
                    <p>Lorem Ipsum</p>
                    <div className="staricon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="proditmflex">
                    <h6>&#x20B9; 845</h6>
                    <img src={img5} alt="" />
                  </div>
                  <p className="lsttxt">Free delivery Shubharambh99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectronicViewCont;

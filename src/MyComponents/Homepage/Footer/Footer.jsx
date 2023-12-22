import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../../Images/d52.png";
import img from "../../../Images/d54.png";
import img2 from "../../../Images/d56.png";
import img3 from "../../../Images/d72.png";
import img4 from "../../../Images/d73.png";
import img5 from "../../../Images/d74.png";
import axios from "axios";
import Baseurl from "../../../Baseurl";

const Footer = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userDataBoon"));
  // const id = userData._id;

  //category
  const [categary, setCategory] = useState([]);
  const allCategary = async () => {
    console.log("ls", localStorage.getItem("boon"));
    let url = `${Baseurl()}api/v1/admin/allCategory`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      setCategory(res.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  //footer detail
  const [footerDescription, setFooterDescription] = useState([]);

  const getFooterData = async () => {

    let url = `${Baseurl()}api/v1/detail`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("product from categary golu", res.data.categories);
      setFooterDescription(res.data.detail);
    } catch (error) {
      console.log(error);
    }
  };

  // get all products
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    let url = `${Baseurl()}api/v1/products`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  //cat-subcategory_data
  const [catSubWiseData, setatSubWiseData] = useState([]);
  const getCatSubProducts = async () => {
    let url = `${Baseurl()}api/v1/admin/all/cat/sub`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("product from product section", res.data);
      setatSubWiseData(res.data.slice(0, 5).reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allCategary();
    getFooterData();
    getProducts();
    getCatSubProducts();
  }, []);

  return (
    <>
      <hr className="w-full text-white" />
      <p
        style={{
          width: "97%",
          margin: "auto",
          marginTop: "5%",
          marginBottom: "3%",
        }}
      >
        <h2>
          <strong>Top Stories: Brand Directory</strong>
        </h2>
        <p style={{ marginTop: "20px" }}>
          MOST SEARCHED FOR ON SHUBHARAMBH :
          {products.map((item) => (
            <span
              onClick={() => navigate(`/singleprodoctview/${item._id}`)}
              style={{ cursor: "pointer" }}
            >
              {item?.name} |{" "}
            </span>
          ))}{" "}
          {/* Shubharambh Axis Bank Super Elite Credit card | Primebook Laptops |
          Bounce Infinity E1 | Buy Laptop on EMI | Infinix Zero Book Utra | OPPO
          Reno8 5G | OPPO Reno8 Pro 5G | Fresh Flower Bouquet | Holi Hampers |
          Holi Gifts | Bouquet | Oneplus Monitors | Sell Old Mobile Phones |
          Premium Laptops | Electronics Store | Phone cover | Infinix INBook Y1
          Plus | Okaya Electric Vehicles | bgauss electric scooter | OPPO Reno?
          Pro 5G | iPhone 13 | iPhone 13 Pro | iPhone 13 Pro Max | iPhone 13
          Mini | Google Pixel 6a covers | Shubharambh Quick | Ampere Magnus |
          Shubharambh Help Centre | Online Bost Store | Covers from Rs 99 |
          Shubharambh Track Orders | Shubharambh Manage Orders | Shubharambh
          Return Orders | Shubharambh Gift Cards Store | Shubharambh Axis Bank
          Credit Cad | Shubharambh Pay Later */}
        </p>
        {catSubWiseData.map((item) => (
          <>
            <p style={{ marginTop: "10px" }}>
              {item.name} :
              {item.subcategories.map((items) => (
                <span
                  onClick={() =>
                    navigate(`/complete/subcategorywise/product/${items?._id}`)
                  }
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  {items?.name} |{" "}
                </span>
              ))}
            </p>
          </>
        ))}
        {/* MOBILES: iPhone 126468 | iPhone 12 Pro $1268 | Phone 121288 | Vivo Y91i
        | Vivo Y11 | Vivo Y15 | Vivo Y50 | Vivo Y12 | Reno2 F | Oppo AT2 | Oppo
        F15 | Oppo A31 | Samsung A7! | Samsung AS! | Samsung A31 | Realmi X2 |
        iPhone 11 | Phone 11 Pro | Mobile Cover | Mobile Offers | iphone x | 4G
        Mobile | Nokia Mobie | Samsung Mobile | iphone | Oppo Mobile | Vivo
        Mobile
        <p style={{ marginTop: "10px" }}>
          CAMERA: GoPro Action Camera | Nikon Camera | Canon Camera | Sony
          Camera | Canon DSLR | Nikon DSLR
        </p>
        <p style={{ marginTop: "10px" }}>
          LAPTOPS: MacBook Pro M2 | Premium Laptop | acer Ryzen 3 Dual Core
          3250U - (8 GB/256 GB SSD/Windows 11 Home) 22-493 Thin and Light Laptop
          | ASUS Vivobook S14 OLED (2022) | ASUS Zenbook 14 OLED (2022) | Realme
          Book Prime Core i5 11th Gen | Microsoft Surface Go Pentiur 12868 |
          Branded Laptops | Apple Laptops | Acer Laptops | Lenovo Laptops | Dell
          Laptops | Asus Laptops | HP Laptops | Gaming Laptops | 2in 1 Laptops |
          Laptops | Dell latest aptops 2022 | HP latest laptops 2022 | nfiix
          INBook Y1 Plus | SAMSUNG Galaxy Book3 | 12th Gen Intel Core Laptops
        </p>
        <p style={{ marginTop: "10px" }}>
          TVS: Nokia TV | Panasonic TV | Thomsen TV | Vu TV | Reslme TV |
          Motorola TV | OnePlus TVs | LG TV | TV | Sony TV | Semsung TV |
          Android Televison | falcon Tv | MITV
        </p>
        <p style={{ marginTop: "10px" }}>
          LARGE APPLIANCES: TV & Appliances End of Season Sale | Television |
          Washing Machines | Refrigerators | Ar Conditioners | Electric Cookers
          | Electric Jug(Heate) / Travel Kettes | Induction Cooktops | Inverters
          / stabilizer | Irons / Iron Box | Mixer Grinder Juicer | Wet
        </p>
        <p style={{ marginTop: "10px" }}>
          Grinders | Chimney | Microwave Ovens | Vacuum Cleaners | Water
          Purifier | Fan | MarQ Customer Care:
        </p>
        <p style={{ marginTop: "10px" }}>
          CLOTHING: Men Shirts | Kurta Pajama | Kurtas | Men T-Shirts | Jeans |
          Saree | Dresses | Kids Dresses | Designer Salwar Suits | Bra |
          Designer Kurtis | Track Pant | Men Kurtas | Gym Wear | Party Dresses |
          Palazzo Suits | Boys Clothing | Gloves | Nighty | Maxi
        </p>
        <p style={{ marginTop: "10px" }}>
          Dresses | Anarkal | Gowns | Culottes | Salwar Suits | Kurtis |
          Designer Sarees | Leggings | Shorts | Georgette Sarees | Ethnic Wear |
          Briefs & Trunks | Nike Watches | Ascot Tie | Corset Tops Tunics |
          Leather PU Skirts | Corset tops camisales | Women magenta earrings |
          No colar Jackets | Green dress materia! | Black pata kurt set | Men
          camel shoes casual | Black pathan | Tassel Sarees | Khaki dresses |
          Kids formal dresses | Mauve shits | Women henley | uppada pattu sarees
          | Leopard dresses | Sieeveless shrugs
        </p>
        <p style={{ marginTop: "10px" }}>
          FOOTWEAR: Shoes | Adidas Shoes | Reebok Shoes | Nike Shoes | Puma
          Shoes | Boots | Bata Shoes | Woodland Shoes | Skechers Shoes |
          Sneakers | Womens Boots | Sports Shoes | Loafers | Sandals | Lotto
          Sports Shoes | Casual Shoes | Womens Skechers Shoes | Asics Sports.
          Shoes | Formal Shoes | School Shoes
        </p>
        <p style={{ marginTop: "10px" }}>
          ‘GROCERIES: PhonePe Grocery Voucher | Hand Wash | Sosp | Cashew Nuts |
          Sunflower Oi | Eggs | Tollet Cleaner | Harpic Toilet Cleaner | Dettol
          Soap | Mustard Ol | Biscuits | Cheese | Patanjali Ata | Fortune Oi |
          Aashirvead Atta | Tea
        </p>
        <p style={{ marginTop: "10px" }}>
          BEST SELLING ON SHUBHARAMBH: Fire-Boltt Ninja Calling Pro Bluetooth
          Calling Smartwatch 1.69 inch HD Display Smartwatch | Best Gas Geyser |
          Kitchen Geyser | Nutri Blenders | Portable Air Cooler | Best Air
          Cooler | Bags | Hitachi Refrigerator 3
        </p>
        <p style={{ marginTop: "10px" }}>
          Door | Books | Toys | Candles | Helmets | Wal Clocks | Baby Food |
          Chocolates | Cycles | Calculators | Lipsticks | Mask | Vert UPS |
          Fastrack Watches | Wallets | Earrings | Gold Coins | Reaime Pad Mini |
          Handbags | conekt SW2 Smartwtch | Mivi DuoPods a350 | Speaker Cleaner
          FURNITURE: Furniture | Sofas | Beds | Diing sets | Wardrobes |
          Mattresses | TV Units | Tables | Chairs | Sheives | Bean Bags | Office
          Chairs | Computer Table | Office Tables | Red Sofa | Wakefit Beds |
          White Sofa | Wakefit Mattress | Green Sofa | Black Sofa | Brown Sofa
        </p>
        <p style={{ marginTop: "10px" }}>
          BGMH: Whey Protein | Homeopathy | Bounce Infinity | Velentine Gift for
          Boyfriend | Valentine Gift for friend | Valentines Day Gifts |
          Christmas Gifs | Calendar 2023 | Online Gut | Books Store | Musical
          Instrument Store| Dabur Chyawangrash | aidyanath Chyawanprash | Energy
          Drinks | Toys | Milk Drink Mixes | Rakhi | Chyawanprash | Indien Flag
          | Protein Supplements
        </p> */}
      </p>
      <p
        style={{
          width: "97%",
          margin: "auto",
          marginTop: "2%",
          marginBottom: "3%",
        }}
      >
        {" "}
        {footerDescription.map((item, i) => (
          <>
            <h2>
              <strong style={{ color: "grey" }}>{item?.title}</strong>
            </h2>
            <p style={{ color: "grey", marginTop: "10px" }}>{item?.detail}</p>
          </>
        ))}
        {/* <h2>
          <strong style={{ color: "grey" }}>
            Shubharambh: The One-stop Shopping Destination
          </strong>
        </h2>
        <p style={{ color: "grey", marginTop: "10px" }}>
          E-commerce is revolutionizing the way we al shop in Ini. Why do you
          want to hop from one store to another n search of the latest phone
          when you can find ton the Internet n a single cick? Not only mobiles.
          Shubharambh houses everything you can possibly imagine, from trending
          electronics ike Laptops, tablets, smartphones, and mobile accessories
          to In-vogue fashion staples ike shoes, clothing and LIfestyle
          accessories; fom modern funiture ike sofa Sets, ining tables, and
          wardrobes to appliances that make your fe easy fie washing machines,
          TVs, ACS, mixer grinder Juicers and other time-saving Kitchen and
          small appliances; from home furnishings like cushion covers,
          mattresses and bedsheets o toys and musical Instruments, we got them
          all covered. You name i, and you can stay assured about finding them
          al here. For those of you with erratic working hours, Shubharambh is
          your best bet. Shop n Your PJs, at night or in the wee hours of the
          morning. This &-commerce never shuts down.
        </p>
        <p style={{ color: "grey", marginTop: "10px" }}>
          What's more, with our year-round shopping festivals and events, our
          prices are irresistible. We're sure you'l find yourself picking up
          more than what you had in mind. If you are wondering why you should
          shop from Shubharambh when there are multiple options available to
          you, well the below will answer your question.
        </p>
        <h3 style={{ color: "grey", marginTop: "10px" }}>
          <strong>Shubharambh Plus</strong>
        </h3>
        <p style={{ color: "grey", marginTop: "10px" }}>
          A world of limitless possibilities awaits you - Shubharambh Plus was
          kick started as a loyalty reward programme for al its regular
          customers at zero subscription fee. All you need is 500 supercoins to
          be a part of this service. For every 100 rupees spent on Shubharambh
          order, Plus members earns 4 supercoins & non-plus members earn 2
          supercoins. Free delivery, early access during sales and shopping
          festivals, exchange offers and priority customer service are the. top
          benefits to a Flipkart Plus member. In short, earn more when you shop
          more!
        </p>
        <h3 style={{ color: "grey", marginTop: "10px" }}>
          <strong>No Cost EMI</strong>
        </h3>
        <p style={{ color: "grey", marginTop: "10px" }}>
          In an attempt to make high-end products accessible to all, our No Cost
          EMI plan enables you to shop with us under EMI, without shelling out
          any processing fee. Applicable on select mobiles, [aptops, large and
          small appliances, furniture, electronics and watches, you can now shop
          without burning a hole in your pocket. If you've been eyeing a product
          for a long time, chances are it may be up for a no cost EMI. Take a
          look ASAP! Terms and conditions. apply.
        </p>
        <h3 style={{ color: "grey", marginTop: "10px" }}>
          <strong>EMI on Debit Cards</strong>
        </h3>
        <p style={{ color: "grey", marginTop: "10px" }}>
          Shubharambh introduces EMI on Debit Cards, empowering you to shop
          confidently with us without having to worry about pauses in monthly
          cash flow. At present, we have partnered with Axis Bank, HDFC Bank,
          State Bank of India and ICICI Bank for this facility. More power to
          all our shoppers! Terms and conditions apply.
        </p>
        <h3 style={{ color: "grey", marginTop: "10px" }}>
          <stromg>EMI on Debit Cards</stromg>
        </h3>
        <p style={{ color: "grey", marginTop: "10px" }}>
          Get an instant discount on the phone that you have been eyeing on.
          Exchange your old mobile for a new one after the Shubharambh experts
          calculate the value of your old phone, provided its in a working
          condition without damage to the screen. If a phone is applicable for
          an exchange offer, you will see the ‘Buy with Exchange' option on the
          product description of the phone. So, be smart, always opt for an
          exchange wherever possible. Terms and conditions apply.
        </p>
        <h3 style={{ color: "grey", marginTop: "10px" }}>
          <strong>Mobile Phones</strong>
        </h3>
        <p style={{ color: "grey", marginTop: "10px" }}>
          From budget phones to state-of-the-art smartphones, we have a mobile
          for everybody out there. Whether you're looking for larger, fuller
          screens, power-packed batteries, biazing-fast processors,
          beautification apps, high-tech selfie cameras or just large internal
          space, we take care of all the essentials. Shop from top brands in the
          country like Samsung, Apple, Oppo, Xiaomi, Reale, Vivo, and Honor to
          name a few. Rest assed, you're buying from only the most reliable
          names in the market. What's more, with Flipkart's Complete Mobile
          Protection Pian, you will never again find the need to run around
          service centres. This plan entails you to a number of post-purchase
          solutions, starting at as low as Rupees 99 only! Broken screens,
          liquid damage to phone, hardware and software glitches, and
          replacements - the Shubharambh Complete Mobile Protection covers a
          comprehensive range of post-purchase problems, with door-to-door
          services.
        </p>
        <h3 style={{ color: "grey", marginTop: "10px" }}>
          <strong>Electronic Devices and Accessories</strong>
        </h3>
        <p style={{ color: "grey", marginTop: "10px" }}>
          When it comes to laptops, we are not far behind. Fiter among dozens of
          super-fast operating systems, hard disk capacity, RAM, lifestyle,
          screen size and many other criterias for personalized results in a
          flash. All you students out
        </p>
        <p style={{ color: "grey", marginTop: "10px" }}>
          Photography lovers, you couldn't land at a better page than ours.
          Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras,
          millennial favourite instant cameras or action cameras for adventure
          junkies: our range of ‘cameras is as much for beginners as it i for
          professionals. Canon, Nikon, GoPro, Sony, and Fujifim are some big
          names you'l find in our store. Photography lovers, you couldn't land
          at a better page than ours. Cutting-edge DSLR ‘cameras, ever reliable
          point-and-shoot cameras, millennial favourite instant cameras or
          action cameras for adventure junkies: our range of cameras is as much
          for beginners as it is for professionals. Canon, Nikon, GoPro, Sony,
          and Fujifilm are some big names you'll find in our store.
        </p>
        <h3 style={{ color: "grey", marginTop: "10px" }}>
          <strong>Large Appliances</strong>
        </h3>
        <p style={{ color: "grey", marginTop: "10px" }}>
          Sleek TVs, power-saving refrigerators, rapid-cooling ACs, resourceful
          washing machines - discover everything you need to run a house under
          one roof. Our Dependable TV and Appliance Store ensures zero transit
          damage, with a
        </p>
        <h3 style={{ color: "grey", marginTop: "10px" }}>
          <strong>Small Home Appliances</strong>
        </h3>
        <p style={{ color: "grey", marginTop: "10px" }}>
          Find handy and practical home appliances designed to make your life
          simpler: electric kettles, OTGs, microwave ovens, sandwich makers,
          hand blenders, coffee makers, and many more other time-saving
          appliances that are truly crafted for a quicker lifestyle. Live life
          king size with these appliances at home.
        </p>
        <h3 style={{ color: "grey", marginTop: "10px" }}>
          <strong>Lifestyle</strong>
        </h3>
        <p style={{ color: "grey", marginTop: "10px" }}>
          Shubharambh, ‘India ka Fashion Capital", is your one-stop fashion
          destination for anything and everything you need to look good. Our
          exhaustive range of Western and Indian wear, summer and winter
          clothing, formal and casual footwear, bridal and artificial jewellery,
          long-lasting make-up, grooming tools and accessories are sure to sweep
          you off your feet. Shop from crowd favourites like Vero Moda, Forever
          21, Only, Arrow, Woodland, Nike, Puma, Revlon, Mac, and Sephora among
          dozens of other top-of-the-ladder names. From summer staple maxi
          dresses, no-nonsense cigarette pants, traditional Bandhani kurtis to
          street-smart biker Jackets, you can rely on us for a
        </p>
        <h3 style={{ color: "grey", marginTop: "10px" }}>
          <strong>Home and Furniture</strong>
        </h3>
        <p style={{ color: "grey", marginTop: "10px" }}>
          Moving to a new place is never easy, especially If your'e buying new
          furniture. Beds, sofa sets, dining tables, wardrobes, and TV units -
          I's not easy to set up everything again. With the hundreds of options
          thrown at you, the ride could be overwhelming. What place is reliable,
          what furniture will stand the test of time? These are questions you
          must ask before you choose a store. Well our Durability Certified
          Furniture Store has not only curated a range of furniture keeping in
          mind the modern Indian consumer but furniture that comes with a ab
          certification, ensuring they last you for up to 10 years. Yes, al our
          furniture has gone through 35 stability and load tests so that you
          receive. only the best-quality furniture. Be FumiSure, always. Names
          to look out for are Nikamal, Godrej Inerio, Urban Ladder, HomeTown,
          Durian and Perfect Homes.
        </p>
        <p style={{ color: "grey", marginTop: "10px" }}>
          ‘You may have your furniture all set up, but they could end up looking
          flat and incomplete without complementary decor. Curtains, cushion
          covers, bed sheets, wall shelves, paintings, floor lamps - find
          everything that turns a house. to an inviting home under one roof at
          Shubharambh. Baby and Kids
        </p>
        <p style={{ color: "grey", marginTop: "10px" }}>
          ‘Your kids deserve only the best. From bodysuits, booties, diapers to
          strollers, if you're an expecting mother or a new mother, you wil find
          everything you need to set sail on a smooth parenting journey with the
          help of our baby care collection. When it comes to safety, hygiene and
          comfort, you can rely on us without a second thought. Huggies,
          Pampers, MamyPoko, and Johnson & Johnson: we host only the
          most-trusted names in the business for your baby.
        </p>
        <h3 style={{ color: "grey", marginTop: "10px" }}>
          <strong>Books, Sports and Games</strong>
        </h3>
        <p style={{ color: "grey", marginTop: "10px" }}>
          Work hard and no play? We don't believe in that. Get access to
          best-selling fiction and non-fiction books by your favourite authors,
          thriling English and Indian blockbusters, most-wanted gaming consoles,
          and a tempting range of fitness and sports gadgets and equipment bound
          to inspire you to get moving.
        </p>
        <h3 style={{ color: "grey", marginTop: "10px" }}>
          <strong>Grocery/Supermart</strong>
        </h3>
        <p style={{ color: "grey", marginTop: "10px" }}>
          Launching into the grocery vertical, Shubharambh introduces Supermart
          that is out to bring everyday essentials close to you. From pulses,
          spices, dairy, personal and sanitary care, breakfast essentials,
          health drinks, spreads, ready to cook, grooming to cleaning agents, we
          are happy to present everything you need to run a house. Now buy
          Grocery products for as low as 1 Rupee only - our 1 Rupee Store
          presents new products every day for a nominal price of 1 Rupee only.
          Terms and conditions apply.
        </p> */}
      </p>
      <div className="container-fluid flex gap-15 ml-1 mt-1 dark:bg-slate-800 p-1 text-black mx-auto footcont backGround-color width-footer">
        <div className="w-2/5 space-x-4  space-y-6 footitm ">
          <h3
            style={{
              fontWeight: "700",
              fontSize: "24px",
              marginLeft: "16px",
              color: "gray",
            }}
          >
            About
          </h3>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor, sit amet <br />
            consectetur adipisicing elit. Provident, odio. efrgbrefg
            tgrbhsrtgtrgtr fgbt5grtgrsfgrefd tgrfdc erfrefggrtrg trgfdgrtfgbtr
            trgfd
          </p>
          <div className="flex space-x-4 text-2xl">
            <FaFacebook style={{ color: "blue" }} />
            <FaInstagram style={{ color: "green" }} />
            <FaLinkedin style={{ color: "green" }} />
          </div>
        </div>
        <div className=" md:flex flex-col  w-1/5  space-y-6 footitm footer">
          <h2 className="text-xl font-medium " style={{ color: "gray" }}>
            Useful Links
          </h2>
          <ul className="space-y-2">
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/faq")}>FAQ</li>
            <li onClick={() => navigate("/shippingpolicy")}>Shipping Policy</li>
            <li onClick={() => navigate("/cancellationpolicy")}>
              Cancellation Policy
            </li>
            <li onClick={() => navigate("/return_refund")}>
              Return & Refund Policy
            </li>
            <li onClick={() => navigate("/terms_condition")}>
              Terms & Conditions
            </li>
            <li onClick={() => navigate("/privacypolicy")}>Privacy Policy</li>
            <li onClick={() => navigate("/contractus")}>Contact Us</li>
          </ul>
        </div>
        <div className=" md:flex flex-col  w-1/5 space-y-6 footitm footer-bottom">
          <h2 className="text-xl font-medium" style={{ color: "gray" }}>
            Account
          </h2>
          <ul className="space-y-2">
            <li
              onClick={() => {
                navigate("/profile");
              }}
            >
              My Account{" "}
            </li>
            <li
              onClick={() => {
                navigate("/mywallet");
              }}
            >
              {" "}
              My Wallet
            </li>
            <li onClick={() => navigate("/wishlist")}>Wishlist</li>
            <li onClick={() => navigate(`/orders`)}>Orders</li>
            <li onClick={() => navigate(`/track_order`)}>Track Orders</li>
            <li onClick={() => navigate(`/trucks_exchange`)}>
              Trucks & Exchange
            </li>
            <li
              onClick={() => {
                navigate("/seller-registration");
              }}
            >
              Become A Seller
            </li>
          </ul>
        </div>
        <div className=" md:flex flex-col  w-1/5 space-y-6 footitm footer-bottom">
          <h2 className="text-xl font-medium" style={{ color: "gray" }}>
            Shopping
          </h2>
          <ul className="space-y-2">
            {categary &&
              categary.slice(0, 5)?.map((item, i) => (
                <li
                  onClick={() => navigate(`/categoryproducts/${item._id}`)}
                  kay={i}
                >
                  {item.name.toUpperCase()}
                </li>
              ))}
          </ul>
        </div>
        <div className=" md:flex flex-col  w-1/5 space-y-6 footitm">
          <h2 className="text-xl font-medium" style={{ color: "gray" }}>
            Download Our App
          </h2>
          <ul className="space-y-2">
            <button
              style={{
                backgroundColor: "#333",
                width: "80%",
                height: "60px",
                color: "#fff",
                borderRadius: "12px",
              }}
            >
              <img src={img4} alt="" style={{ width: "100%" }} />
            </button>
            <button
              style={{
                backgroundColor: "#333",
                width: "80%",
                height: "60px",
                color: "#fff",
                borderRadius: "12px",
              }}
            >
              <img src={img3} alt="" style={{ width: "100%" }} />
            </button>
          </ul>
        </div>
      </div>

      <hr className="w-full text-white" />
      {/*<img src={img} style={{ width: "100%", marginLeft: "0" }} />*/}
      <div className="flex justify-between items-center text-white bg-black  p-4 footcont2">
        <div className="flex justify-between flex-wrap items-center text-white w-1/2 p-1 footitm2">
          <div className="flex gap-2">
            <i
              class="fa-solid fa-bag-shopping mt-1"
              style={{ color: "#ffbb03" }}
            ></i>
            <p>Become a Seller</p>
          </div>
          <div className="flex gap-2">
            <i
              class="fa-solid fa-bag-shopping mt-1"
              style={{ color: "#ffbb03" }}
            ></i>
            <p>Coupons</p>
          </div>
          <div className="flex gap-2">
            <i
              class="fa-sharp fa-solid fa-circle-question mt-1"
              style={{ color: "#ffbb03" }}
            ></i>
            <p>Help Center</p>
          </div>
          <div>
            <p>@2018-23 shubharambh99.com</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-white w-1/2 footitm2">
          <img className="footimg" src={img5} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import img from "../../Images/d34.png";
import img2 from "../../Images/d35.png";
import img3 from "../../Images/d36.png";
import img4 from "../../Images/d37.png";
import img5 from "../../Images/d38.png";
import { useNavigate } from "react-router-dom";


const GroceryProduct = ()=>{
    const navigate=useNavigate()
    
    return (
        <>
            <div className="fashioncont" style={{backgroundColor:"#fff"}}>
                <h3 >Top Offers</h3>
                <div className="fashioncont1" >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                navigate("/grocery-view");
                            }}
                            src={img}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img2}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img3}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img3}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img3}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="fashioncont" style={{backgroundColor:"#fff"}}>
                <h3>IED TV</h3>
                <div className="fashioncont1" >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img4}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img3}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img4}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img5}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img4}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img4}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="fashioncont" style={{backgroundColor:"#fff"}}>
                <h3>Latest Laptops</h3>
                <div className="fashioncont1" >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img5}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img4}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img3}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img4}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img5}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img4}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroceryProduct;
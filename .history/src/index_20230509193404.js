import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "tw-elements";
import Scroll from "./Scroll";
import {MyContext, MyContext2} from "./MyComponents/Homepage/MyContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyContext2>
  <React.StrictMode>
    <BrowserRouter >
      <Scroll />
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </MyContext2>
);

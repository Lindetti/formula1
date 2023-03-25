import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <App />
    <Footer />
  </BrowserRouter>
);

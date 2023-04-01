import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./Components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <NavBar />
    <App />
    <Footer />
  </Router>
);

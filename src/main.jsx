import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Gallery from "./pages/Gallery.jsx";
import GetOne from "./pages/GetOne.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import App from "./App";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

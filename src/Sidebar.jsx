import React from "react";
import Gallery from "./pages/Gallery.jsx";
import GetOne from "./pages/GetOne.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="offcanvas offcanvas-start show"
      tabindex="-1"
      id="offcanvas"
      aria-labelledby="offcanvasLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasLabel">
          Sidebar
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul>
            <li className="nav-item">
                <Link to="/">Gallery</Link>
            </li>
            <li className="nav-item">
                <Link to="/random">Get random image</Link>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import Sidebar from "./Sidebar";
import Gallery from "./pages/Gallery.jsx";
import GetOne from "./pages/GetOne.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="d-flex">
                <div className="col-auto">
                    <span className="material-icons"  data-bs-toggle="offcanvas" href="#offcanvas" aria-controls="offcanvas">
                        density_medium
                    </span>
                    <Sidebar />
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Gallery />}></Route>
                        <Route path="/random" element={<GetOne />}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/uts/Navbar";
import Home from "./component/uts/Home";
import Produk from "./component/uts/Produk";
import Testimonial from "./component/uts/Testimoni";
import Footer from "./component/uts/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
};

export default App;

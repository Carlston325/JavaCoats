import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductOne from "./pages/ProductOne";
import ProductTwo from "./pages/ProductTwo";
import ProductThree from "./pages/ProductThree";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product1" element={<ProductOne />} />
        <Route path="/product2" element={<ProductTwo />} />
        <Route path="/product3" element={<ProductThree />} />
      </Routes>
    </>
  );
}

export default App;

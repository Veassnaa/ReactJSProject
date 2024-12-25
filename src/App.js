import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // Import your styles
import Navbar from "./components/Navbar"; // Assuming Navbar component
import HeroSection from "./components/HeroSection"; // Assuming HeroSection component
import Features from "./components/Features"; // Assuming Features component
import AboutSection from "./components/AboutSection"; // Assuming AboutSection component
import TeamSection from "./components/TeamSection"; // Assuming TeamSection component
import Footer from "./components/Footer"; // Assuming Footer component
import Cart from "./components/Cart"; // Assuming Cart component
import Home from "./components/Home";
import Shop from "./components/Shop";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import Thankyou from "./components/Thankyou";
import Contact from "./components/Contact";


import { CartProvider } from "./components/CartContext";

const App = () => {
  // const [products, setProducts] = useState([]);

  // // Fetch products from Fake Store API
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // If the product already exists, increase the quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If it's a new product, add it to the cart with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    // <Router>
    //   <div className="site-wrap">
    //     {/* Navbar */}
    //     <Navbar />

    //     {/* Routes */}
    //     <Routes>
    //       {/* Home Page */}
    //       <Route
    //         path="/"
    //         element={
    //           <>
    //             {/* Hero Section */}
    //             <HeroSection />

    //             {/* Products Section */}
    //             <div className="site-section site-section-sm site-blocks-1 border-0" data-aos="fade">
    //               <div className="container">
    //                 <h2 className="text-center">Our Products</h2>
    //                 <div className="row">
    //                   {products.map((product) => (
    //                     <div
    //                       className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
    //                       key={product.id}
    //                       data-aos="fade-up"
    //                     >
    //                       <div className="icon mr-4 align-self-start">
    //                         <img
    //                           src={product.image}
    //                           alt={product.title}
    //                           style={{
    //                             width: "100px",
    //                             height: "100px",
    //                             objectFit: "contain",
    //                           }}
    //                         />
    //                       </div>
    //                       <div className="text">
    //                         <h2 className="text-uppercase">{product.title}</h2>
    //                         <p>{product.description.slice(0, 100)}...</p>
    //                         <p>
    //                           <strong>${product.price}</strong>
    //                         </p>
    //                       </div>
    //                     </div>
    //                   ))}
    //                 </div>
    //               </div>
    //             </div>

    //             {/* Features Section */}
    //             <Features />

    //             {/* About Section */}
    //             <AboutSection />

    //             {/* Team Section */}
    //             <TeamSection />
    //           </>
    //         }
    //       />

    //       {/* Cart Page */}
    //       <Route path="/cart" element={<Cart />} />
    //     </Routes>

    //     {/* Footer */}
    //     <Footer />
    //   </div>
    // </Router>
    <div className="site-wrap"> 
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Thankyou" element={<Thankyou/>} />
          <Route path="/product_detail" element={<ProductDetail addToCart={addToCart} />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
    </div>
  );
};

export default App;

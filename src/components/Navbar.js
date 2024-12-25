import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Navbar = () => {

  const {cartItems} = useCart();

  // <div className="site-navbar bg-white py-2">
  //   <div className="container">
  //     <div className="d-flex align-items-center justify-content-between">
  //       <div className="logo">
  //         <a href="index.html" className="js-logo-clone">
  //           ShopMax
  //         </a>
  //       </div>
  //       <nav className="main-nav d-none d-lg-block">
  //         <ul className="site-menu js-clone-nav d-none d-lg-block">
  //           <li><a href="/">Home</a></li>
  //           <li className="active"><a href="/shop">Shop</a></li>
  //           <li><a href="/catalogue">Catalogue</a></li>
  //           <li><a href="/new-arrivals">New Arrivals</a></li>
  //           <li><a href="/contact">Contact</a></li>
  //         </ul>
  //       </nav>
  //       <div className="icons">
  //         <a href="#" className="icons-btn d-inline-block js-search-open">
  //           <span className="icon-search"></span>
  //         </a>
  //         <a href="#" className="icons-btn d-inline-block">
  //           <span className="icon-heart-o"></span>
  //         </a>
  //         <a href="/cart" className="icons-btn d-inline-block bag">
  //           <span className="icon-shopping-bag"></span>
  //           <span className="number">2</span>
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  return(
    <div className="site-navbar bg-white py-2">
  <div className="search-wrap">
    <div className="container">
      <a href="#" className="search-close js-search-close">
        <span className="icon-close2" />
      </a>
      <form action="#" method="post">
        <input
          type="text"
          className="form-control"
          placeholder="Search keyword and hit enter..."
        />
      </form>
    </div>
  </div>
  <div className="container">
    <div className="d-flex align-items-center justify-content-between">
      <div className="logo">
        <div className="site-logo">
          <a href="index.html" className="js-logo-clone">
            ShopMax
          </a>
        </div>
      </div>
      <div className="main-nav d-none d-lg-block">
        <nav
          className="site-navigation text-right text-md-center"
          role="navigation"
        >
          <ul className="site-menu js-clone-nav d-none d-lg-block">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="icons">
        <a href="#" className="icons-btn d-inline-block js-search-open">
          <span className="icon-search" />
        </a>
        <a href="#" className="icons-btn d-inline-block">
          <span className="icon-heart-o" />
        </a>
        <Link to="/cart" className="icons-btn d-inline-block bag">
          <span className="icon-shopping-bag" />
          <span className="number">{cartItems.length}</span>
        </Link>
        <a
          href="#"
          className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
        >
          <span className="icon-menu" />
        </a>
      </div>
    </div>
  </div>
</div>
  )

  };

export default Navbar;

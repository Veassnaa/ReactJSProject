import React from 'react'
import { Link } from 'react-router-dom';

const Thankyou = () => {
  return (
    <div>
      <>
  <div className="bg-light py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-0">
          <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>{" "}
          <strong className="text-black">Thank You</strong>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <span className="icon-check_circle display-3 text-success" />
          <h2 className="display-3 text-black">Thank you!</h2>
          <p className="lead mb-5">You order was successfuly completed.</p>
          <p>
            <Link to ="/Shop"
              className="btn btn-sm height-auto px-4 py-3 btn-primary"
            >
              Back to shop
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  <footer className="site-footer custom-border-top">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <h3 className="footer-heading mb-4">Promo</h3>
          <a href="#" className="block-6">
            <img
              src="images/about_1.jpg"
              alt="Image placeholder"
              className="img-fluid rounded mb-4"
            />
            <h3 className="font-weight-light  mb-0">
              Finding Your Perfect Shirts This Summer
            </h3>
            <p>Promo from July 15 — 25, 2019</p>
          </a>
        </div>
        <div className="col-lg-5 ml-auto mb-5 mb-lg-0">
          <div className="row">
            <div className="col-md-12">
              <h3 className="footer-heading mb-4">Quick Links</h3>
            </div>
            <div className="col-md-6 col-lg-4">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Sell online</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Shopping cart</a>
                </li>
                <li>
                  <a href="#">Store builder</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Mobile commerce</a>
                </li>
                <li>
                  <a href="#">Dropshipping</a>
                </li>
                <li>
                  <a href="#">Website development</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Point of sale</a>
                </li>
                <li>
                  <a href="#">Hardware</a>
                </li>
                <li>
                  <a href="#">Software</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="block-5 mb-5">
            <h3 className="footer-heading mb-4">Contact Info</h3>
            <ul className="list-unstyled">
              <li className="address">
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li className="phone">
                <a href="tel://23923929210">+2 392 3929 210</a>
              </li>
              <li className="email">emailaddress@domain.com</li>
            </ul>
          </div>
          <div className="block-7">
            <form action="#" method="post">
              <label htmlFor="email_subscribe" className="footer-heading">
                Subscribe
              </label>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control py-4"
                  id="email_subscribe"
                  placeholder="Email"
                />
                <input
                  type="submit"
                  className="btn btn-sm btn-primary"
                  defaultValue="Send"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row pt-5 mt-5 text-center">
        <div className="col-md-12">
          <p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with{" "}
            <i className="icon-heart" aria-hidden="true" /> by{" "}
            <a
              href="https://colorlib.com"
              target="_blank"
              className="text-primary"
            >
              Colorlib
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
</>

    </div>
  )
}

export default Thankyou

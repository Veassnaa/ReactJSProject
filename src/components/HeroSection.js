import React from "react";

const HeroSection = () => (
  <div className="site-blocks-cover inner-page" data-aos="fade">
    <div className="container">
      <div className="row">
        <div className="col-md-6 ml-auto order-md-2 align-self-start">
          <div className="site-block-cover-content">
            <h2 className="sub-title">#New Summer Collection 2019</h2>
            <h1>Shop With Us</h1>
            <p>
              <a href="/shop" className="btn btn-black rounded-0">
                Shop Now
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6 order-1 align-self-end">
          <img src="images/model_7.png" alt="Hero" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;

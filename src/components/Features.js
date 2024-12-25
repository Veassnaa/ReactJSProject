import React from "react";

const Features = () => (
  <div className="site-section site-section-sm site-blocks-1 border-0" data-aos="fade">
    <div className="container">
      <div className="row">
        {[
          { icon: "icon-truck", title: "Free Shipping", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          { icon: "icon-refresh2", title: "Free Returns", text: "Phasellus at iaculis quam. Integer accumsan tincidunt." },
          { icon: "icon-help", title: "Customer Support", text: "Integer accumsan tincidunt fringilla." },
        ].map((feature, idx) => (
          <div className="col-md-4 d-flex mb-4 pl-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
            <div className="icon mr-4 align-self-start">
              <span className={feature.icon}></span>
            </div>
            <div className="text">
              <h2 className="text-uppercase">{feature.title}</h2>
              <p>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Features;

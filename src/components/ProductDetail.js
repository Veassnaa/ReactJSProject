import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductDetail = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const id = query.get("id");

  const { addToCart } = useCart();

  const [product, setProduct] = useState([]);

  const getProductbyId = async () => {
    try {
      const p = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(p.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductbyId();
  }, []);

  // test function
  const handleClick = (product) => {
    console.log(product);
  };

  return (
    <>
      <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-images">
                <img
                  src={product.image}
                  alt="product image"
                  // style={{ width: "100%", height: "480px" }}
                />
                {/* <img src="assets/images/single-product-02.jpg" alt="" /> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <h4 style={{ width: "75%", textAlign: "left" }}>
                  {product.title}
                </h4>
                <span className="price">${product.price}</span>
                <ul className="stars">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                </ul>
                <span>{product.description}</span>
                <div className="quote">
                  <i className="fa fa-quote-left" />
                </div>
                <div className="total">
                  <div >
                    <button className="btn btn-primary btn-lg btn-block"
                      onClick={() => addToCart(product)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;

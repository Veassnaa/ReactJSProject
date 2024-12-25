import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useCart } from "./CartContext";
import { Link } from 'react-router-dom';

function Cart() {

  const {
    cartItems,
    addToCart,
    removeFromCart,
    decrementQuantity,
    incrementQuantity,
    getTotalPrice,
    // clearCart,
  } = useCart();

  return (
    <div className="site-wrap">
      <div className="bg-light py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-0">
        <Link to="/">Home</Link> <span className="mx-2 mb-0">/</span>
        <strong className="text-black">Cart</strong>
        </div>
      </div>
    </div>
  </div>

      {/* Cart Table */}
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="site-blocks-table">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid"
                          style={{ maxWidth: "100px" }}
                        />
                      </td>
                      <td>
                        <h2 className="h5 text-black">{item.title}</h2>
                      </td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>
                        <div className="input-group">
                          <button
                            className="btn btn-outline-primary"
                            onClick={() => decrementQuantity(item.id)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="form-control text-center"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            className="btn btn-outline-primary"
                            onClick={() => incrementQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => removeFromCart(item)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <button className="btn btn-primary btn-block">Update Cart</button>
              <button className="btn btn-outline-primary btn-block">
                Continue Shopping
              </button>
            </div>
            <div className="col-md-6">
              <h4>Cart Totals</h4>
              <p>Subtotal: ${getTotalPrice().toFixed(2)}</p>
              <p>Total: ${getTotalPrice().toFixed(2)}</p>
              <button className="btn btn-primary btn-lg btn-block"
                onClick={() => (window.location.href = '/checkout')}
              >     
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} ShopMax. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Cart;

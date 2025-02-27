import React from 'react';
import { useCart } from "./CartContext";
import { Link } from 'react-router-dom';
import Paypal from './paypal/Paypal';

const Checkout = () => {
    const { cartItems } = useCart(); // Get cart items from context

  // Calculate subtotal (cart items * quantity)
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  // Calculate the order total (same as subtotal in this example)
  const calculateOrderTotal = () => {
    return calculateSubtotal();
  };
  return (
    <div className="site-wrap">
  <div className="bg-light py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-0">
        <Link to="/">Home</Link> <span className="mx-2 mb-0">/</span>
        <Link to="/cart">Cart</Link> <span className="mx-2 mb-0">/</span>
        <strong className="text-black">Checkout</strong>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="border p-4 rounded" role="alert">
            Returning customer? <a href="#">Click here</a> to login
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-5 mb-md-0">
          <h2 className="h3 mb-3 text-black">Billing Details</h2>
          <div className="p-3 p-lg-5 border">
            <div className="form-group">
              <label htmlFor="c_country" className="text-black">
                Country <span className="text-danger">*</span>
              </label>
              <select id="c_country" className="form-control">
                <option value={1}>Select a country</option>
                <option value={2}>bangladesh</option>
                <option value={3}>Algeria</option>
                <option value={4}>Afghanistan</option>
                <option value={5}>Ghana</option>
                <option value={6}>Albania</option>
                <option value={7}>Bahrain</option>
                <option value={8}>Colombia</option>
                <option value={9}>Dominican Republic</option>
              </select>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label htmlFor="c_fname" className="text-black">
                  First Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_fname"
                  name="c_fname"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="c_lname" className="text-black">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_lname"
                  name="c_lname"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12">
                <label htmlFor="c_companyname" className="text-black">
                  Company Name{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_companyname"
                  name="c_companyname"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12">
                <label htmlFor="c_address" className="text-black">
                  Address <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_address"
                  name="c_address"
                  placeholder="Street address"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Apartment, suite, unit etc. (optional)"
              />
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label htmlFor="c_state_country" className="text-black">
                  State / Country <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_state_country"
                  name="c_state_country"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="c_postal_zip" className="text-black">
                  Posta / Zip <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_postal_zip"
                  name="c_postal_zip"
                />
              </div>
            </div>
            <div className="form-group row mb-5">
              <div className="col-md-6">
                <label htmlFor="c_email_address" className="text-black">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_email_address"
                  name="c_email_address"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="c_phone" className="text-black">
                  Phone <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_phone"
                  name="c_phone"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="c_create_account"
                className="text-black"
                data-toggle="collapse"
                href="#create_an_account"
                role="button"
                aria-expanded="false"
                aria-controls="create_an_account"
              >
                <input type="checkbox" defaultValue={1} id="c_create_account" />{" "}
                Create an account?
              </label>
              <div className="collapse" id="create_an_account">
                <div className="py-2">
                  <p className="mb-3">
                    Create an account by entering the information below. If you
                    are a returning customer please login at the top of the
                    page.
                  </p>
                  <div className="form-group">
                    <label htmlFor="c_account_password" className="text-black">
                      Account Password
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="c_account_password"
                      name="c_account_password"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="c_ship_different_address"
                className="text-black"
                data-toggle="collapse"
                href="#ship_different_address"
                role="button"
                aria-expanded="false"
                aria-controls="ship_different_address"
              >
                <input
                  type="checkbox"
                  defaultValue={1}
                  id="c_ship_different_address"
                />{" "}
                Ship To A Different Address?
              </label>
              <div className="collapse" id="ship_different_address">
                <div className="py-2">
                  <div className="form-group">
                    <label htmlFor="c_diff_country" className="text-black">
                      Country <span className="text-danger">*</span>
                    </label>
                    <select id="c_diff_country" className="form-control">
                      <option value={1}>Select a country</option>
                      <option value={2}>bangladesh</option>
                      <option value={3}>Algeria</option>
                      <option value={4}>Afghanistan</option>
                      <option value={5}>Ghana</option>
                      <option value={6}>Albania</option>
                      <option value={7}>Bahrain</option>
                      <option value={8}>Colombia</option>
                      <option value={9}>Dominican Republic</option>
                    </select>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_diff_fname" className="text-black">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_fname"
                        name="c_diff_fname"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_diff_lname" className="text-black">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_lname"
                        name="c_diff_lname"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label
                        htmlFor="c_diff_companyname"
                        className="text-black"
                      >
                        Company Name{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_companyname"
                        name="c_diff_companyname"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_diff_address" className="text-black">
                        Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_address"
                        name="c_diff_address"
                        placeholder="Street address"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, suite, unit etc. (optional)"
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label
                        htmlFor="c_diff_state_country"
                        className="text-black"
                      >
                        State / Country <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_state_country"
                        name="c_diff_state_country"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_diff_postal_zip" className="text-black">
                        Posta / Zip <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_postal_zip"
                        name="c_diff_postal_zip"
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-5">
                    <div className="col-md-6">
                      <label
                        htmlFor="c_diff_email_address"
                        className="text-black"
                      >
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_email_address"
                        name="c_diff_email_address"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_diff_phone" className="text-black">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_diff_phone"
                        name="c_diff_phone"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="c_order_notes" className="text-black">
                Order Notes
              </label>
              <textarea
                name="c_order_notes"
                id="c_order_notes"
                cols={30}
                rows={5}
                className="form-control"
                placeholder="Write your notes here..."
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row mb-5">
            <div className="col-md-12">
              <h2 className="h3 mb-3 text-black">Coupon Code</h2>
              <div className="p-3 p-lg-5 border">
                <label htmlFor="c_code" className="text-black mb-3">
                  Enter your coupon code if you have one
                </label>
                <div className="input-group w-75">
                  <input
                    type="text"
                    className="form-control"
                    id="c_code"
                    placeholder="Coupon Code"
                    aria-label="Coupon Code"
                    aria-describedby="button-addon2"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary btn-sm px-4"
                      type="button"
                      id="button-addon2"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-wrap">
      {/* Breadcrumbs */}
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <Link to="/">Home</Link> <span className="mx-2 mb-0">/</span>
              <strong className="text-black">Checkout</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="row mb-5">
        <div className="col-md-12">
          <h2 className="h3 mb-3 text-black">Your Order</h2>
          <div className="p-3 p-lg-5 border">
            <table className="table site-block-order-table mb-5">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {item.title} <strong className="mx-2">x</strong> {item.quantity}
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <td className="text-black font-weight-bold">
                    <strong>Cart Subtotal</strong>
                  </td>
                  <td className="text-black">${calculateSubtotal()}</td>
                </tr>
                <tr>
                  <td className="text-black font-weight-bold">
                    <strong>Order Total</strong>
                  </td>
                  <td className="text-black font-weight-bold">
                    <strong>${calculateOrderTotal()}</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Payment Methods */}
            {/* <div className="border p-3 mb-3">
              <h3 className="h6 mb-0">
                <a
                  className="d-block"
                  data-toggle="collapse"
                  href="#collapsebank"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapsebank"
                >
                  Direct Bank Transfer
                </a>
              </h3>
              <div className="collapse" id="collapsebank">
                <div className="py-2">
                  <p className="mb-0">
                    Make your payment directly into our bank account. Please use your
                    Order ID as the payment reference. Your order won’t be shipped
                    until the funds have cleared in our account.
                  </p>
                </div>
              </div>
            </div>

            <div className="border p-3 mb-3">
              <h3 className="h6 mb-0">
                <a
                  className="d-block"
                  data-toggle="collapse"
                  href="#collapsecheque"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapsecheque"
                >
                  Cheque Payment
                </a>
              </h3>
              <div className="collapse" id="collapsecheque">
                <div className="py-2">
                  <p className="mb-0">
                    Make your payment directly into our bank account. Please use your
                    Order ID as the payment reference. Your order won’t be shipped
                    until the funds have cleared in our account.
                  </p>
                </div>
              </div>
            </div>

            <div className="border p-3 mb-5">
              <h3 className="h6 mb-0">
                <a
                  className="d-block"
                  data-toggle="collapse"
                  href="#collapsepaypal"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapsepaypal"
                >
                  Paypal
                </a>
              </h3>
              <div className="collapse" id="collapsepaypal">
                <div className="py-2">
                  <p className="mb-0">
                    Make your payment directly into our bank account. Please use your
                    Order ID as the payment reference. Your order won’t be shipped
                    until the funds have cleared in our account.
                  </p>
                </div>
              </div>
            </div> */}
            <Paypal total={calculateOrderTotal()} />

            {/* Place Order Button */}
            {/* <div className="form-group">
              <button
                className="btn btn-primary btn-lg btn-block"
                onClick={() => (window.location.href = '/thankyou')}
              >
                Place Order
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
      {/* </form> */}
    </div>
  </div>
</div>

  )
}

export default Checkout

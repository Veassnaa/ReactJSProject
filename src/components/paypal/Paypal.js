import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = ({total}) => {
  const initialOptions = {
    "client-id": "AV1QsXjBHx8_hK8bKdbOT0ZFRO4qQMRYLpd8axg4hDzImMz2vL13DhuoMk-O9KqkkaG8ueZzUHodlfYw", // Replace with your sandbox Client ID
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div style={{ maxWidth: "750px", margin: "0 auto" }}>
        <h2>PayPal Payment</h2>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total, // Set the amount to charge
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Transaction completed by ${details.payer.name.given_name}`);
              localStorage.clear()
              window.location.reload()
            });
          }}
          onError={(err) => {
            console.error("PayPal Checkout onError", err);
            alert("An error occurred with the PayPal transaction.");
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default Paypal;

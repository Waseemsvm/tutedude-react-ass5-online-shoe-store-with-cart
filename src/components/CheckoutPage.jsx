import { useState } from "react";
import CheckoutPageStyle from "../styles/CheckoutPage.module.css";
import { useNavigate } from "react-router";
import { connect, useDispatch } from "react-redux";
import { resetCart } from "../app_state/reducers/catalogueReducer";

function CheckoutPage() {
  const [paymentMode, setPaymentMode] = useState("cod");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={CheckoutPageStyle.form}>
      <div className={CheckoutPageStyle["form-body"]}>
        <div className={CheckoutPageStyle["form-payment-opts"]}>
          <div>
            <label htmlFor="cod">Cash on Delivery</label>
            <input
              id="cod"
              type="radio"
              name="payment-mode"
              checked={paymentMode == "cod"}
              onChange={(e) => {
                setPaymentMode("cod");
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="cc">Credit Card</label>
            <input
              id="cc"
              type="radio"
              checked={paymentMode == "cc"}
              onChange={(e) => {
                setPaymentMode("cc");
              }}
              name="payment-mode"
            ></input>
          </div>
        </div>
        <div
          className={`${CheckoutPageStyle["credit-card-form"]} ${
            paymentMode == "cc" ? "" : CheckoutPageStyle.hide
          }`}
        >
          <div className="form-item">
            <input id="credit-name" placeholder="Enter your full name" />
          </div>
          <div className="form-item">
            <input id="credit-no" placeholder="Enter your Credit card number" />
          </div>
          <div className="form-item">
            <input id="credit-expdate" placeholder="Enter expiry date" />
          </div>
          <div className="form-item">
            <input id="credit-cvv" placeholder="Enter CVV" />
          </div>
        </div>
        <button
          className={CheckoutPageStyle["order-btn"]}
          onClick={() => {
            dispatch(resetCart());
            navigate("/catalogue");
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = () => {
  return {
    resetCart: resetCart,
  };
};

export default connect(mapDispatchToProps)(CheckoutPage);

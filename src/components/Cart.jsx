import { connect, useSelector } from "react-redux";
import "../styles/Cart.css";
import closeIcon from "../assets/symbols/close-icon.svg";
import { useCart } from "./CartContext";
import CartItem from "./CartItem";
import backButton from "../assets/symbols/back-button.svg";
import rupeeIcon from "../assets/symbols/Indian_Rupee_symbol.svg";
import { useMessageToast } from "./MessageToastContext";

function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  const count = cartItems.reduce((o, i) => (o += i.quantity), 0);
  const totalPrice = cartItems.reduce((o, i) => o + i.quantity * i.price, 0);
  const { showMessageToast } = useMessageToast();

  const {
    isCartOpen,
    closeCart,
    setIsCheckout,
    isCheckout,
    paymentMode,
    setPaymentMode,
  } = useCart();

  return (
    <>
      <div className={"overlay"}></div>
      <div className={`modal ${isCartOpen ? "open" : ""}`}>
        <div className="cart-toolbar">
          {isCheckout ? (
            <div className="startContent">
              <button
                className="back-button"
                onClick={() => {
                  setIsCheckout(false);
                }}
              >
                <img src={backButton}></img>
              </button>
              <h1> Checkout</h1>
            </div>
          ) : (
            <h1>Cart {!!cartItems.length && `( ${count} )`} </h1>
          )}

          {isCheckout || (
            <button
              className="close-btn"
              onClick={() => {
                closeCart();
                setIsCheckout(false);
              }}
            >
              <img src={closeIcon} />
            </button>
          )}
        </div>
        {isCheckout ? (
          <div className="checkout-body">
            <form
              className="checkout-form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h1>Choose your Payment method </h1>
              <div className="form-body">
                <div className="form-payment-opts">
                  <div>
                    <label htmlFor="radio-input">Cash on Delivery</label>
                    <input
                      id="radio-input"
                      type="radio"
                      name="payment-mode"
                      checked={paymentMode == "cod"}
                      onChange={(e) => {
                        setPaymentMode("cod");
                      }}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="radio-input">Credit Card</label>
                    <input
                      id="radio-input"
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
                  className={`credit-card-form ${
                    paymentMode == "cc" ? "" : "hide"
                  }`}
                >
                  <div className="form-item">
                    <input
                      id="credit-name"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-item">
                    <input
                      id="credit-no"
                      placeholder="Enter your Credit card number"
                    />
                  </div>
                  <div className="form-item">
                    <input
                      id="credit-expdate"
                      placeholder="Enter expiry date"
                    />
                  </div>
                  <div className="form-item">
                    <input id="credit-cvv" placeholder="Enter CVV" />
                  </div>
                </div>
              </div>
              <p></p>
            </form>
          </div>
        ) : (
          <div className={`cart-body ${cartItems.length ? "" : "empty"}`}>
            {cartItems.length ? (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            ) : (
              <h1>Cart is Empty</h1>
            )}
          </div>
        )}
        <div className="cart-footer">
          <p>
            Total: {<img src={rupeeIcon} />} {totalPrice}
          </p>
          {isCheckout ? (
            <button
              onClick={() => {
                setIsCheckout(false);
                closeCart();
                showMessageToast(true);
              }}
            >
              Order Now
            </button>
          ) : (
            <button
              disabled={!cartItems.length}
              onClick={() => {
                setIsCheckout(true);
              }}
            >
              Proceed to Payment
            </button>
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(Cart);

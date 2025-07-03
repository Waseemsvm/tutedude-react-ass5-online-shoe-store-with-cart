import { connect, useSelector } from "react-redux";
import "../styles/Cart.css";
import closeIcon from "../assets/symbols/close-icon.svg";
import { useCart } from "./CartContext";

function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  const count = cartItems.reduce((o, i) => (o += i.quantity), 0);
  const { isCartOpen, closeCart } = useCart();
  return (
    <>
      <div className={"overlay"}></div>
      <div className={`modal ${isCartOpen ? "cart-open" : ""}`}>
        <div className="cart-toolbar">
          <h1>Cart ({count}) </h1>

          <button
            className="close-btn"
            onClick={() => {
              closeCart();
            }}
          >
            <img src={closeIcon} />
          </button>
        </div>
        <div className="cart-body">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>{`${item.text} x${item.quantity}`}</li>
            ))}
          </ul>
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

const mapDispatchToProps = (state) => {
  // return {};
};
export default connect(mapStateToProps)(Cart);

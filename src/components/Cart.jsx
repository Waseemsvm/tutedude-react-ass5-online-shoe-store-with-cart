import { connect, useSelector } from "react-redux";
import "../styles/Cart.css";
import closeIcon from "../assets/symbols/close-icon.svg";
import { useCart } from "./CartContext";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  const count = cartItems.reduce((o, i) => (o += i.quantity), 0);
  const { isCartOpen, closeCart } = useCart();
  return (
    <>
      <div className={"overlay"}></div>
      <div className={`modal ${isCartOpen ? "cart-open" : ""}`}>
        <div className="cart-toolbar">
          <h1>Cart {!!cartItems.length && count} </h1>

          <button
            className="close-btn"
            onClick={() => {
              closeCart();
            }}
          >
            <img src={closeIcon} />
          </button>
        </div>
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

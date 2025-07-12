import { useLocation, useNavigate } from "react-router";
import CartStyles from "../styles/CartPage.module.css";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { removeItem, resetCart } from "../app_state/reducers/catalogueReducer";

function CartPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = useSelector((state) => state.cartItems);
  // const count = cartItems.reduce((o, i) => (o += i.quantity), 0);
  const totalPrice = cartItems.reduce((o, i) => o + i.quantity * i.price, 0);
  return (
    <div className={CartStyles["cart-page"]}>
      <h2>My Cart</h2>
      {cartItems.length ? (
        <div className={CartStyles["cart-items"]}>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className={CartStyles["cart-empty"]}>
          <h1>Cart is Empty</h1>
        </div>
      )}

      <div className={CartStyles["cart-footer"]}>
        <div className={CartStyles["cart-actions"]}>
          <p className={CartStyles["total-display"]}>Total: Rs. {totalPrice}</p>{" "}
          <button
            disabled={
              location.pathname.includes("checkout") ? false : !cartItems.length
            }
            className={CartStyles["checkout-button"]}
            onClick={() => {
              location.pathname.includes("checkout")
                ? navigate("/catalogue")
                : navigate("/catalogue/checkout");
            }}
          >
            {location.pathname.includes("checkout")
              ? "Keep Shopping"
              : "Proceed To Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(CartPage);

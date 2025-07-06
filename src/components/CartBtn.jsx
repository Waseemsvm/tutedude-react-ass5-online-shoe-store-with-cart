import { connect, useSelector } from "react-redux";
import cartLogo from "../assets/symbols/cart-icon.svg";
import closeIcon from "../assets/symbols/close-icon.svg";
import navbarStyles from "../styles/Navbar.module.css";
import { useCart } from "../components/CartContext";
function CartBtn(props) {
  const cartItems = useSelector((state) => state.cartItems);
  const productsCount = cartItems.reduce((a, i) => (a += i.quantity), 0);
  const { isCartOpen, toggleCart } = useCart();

  return (
    <button
      className={navbarStyles.cartbtn}
      onClick={() => {
        toggleCart();
      }}
    >
      <img src={isCartOpen ? closeIcon : cartLogo} />
      {productsCount ? (
        <span className={isCartOpen ? navbarStyles.hide : ""}>
          {productsCount > 9 ? "9+" : productsCount}
        </span>
      ) : null}
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(CartBtn);

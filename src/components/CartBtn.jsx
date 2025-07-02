import { connect, useSelector } from "react-redux";
import cartLogo from "../assets/symbols/cart-icon.svg";
import navbarStyles from "../styles/Navbar.module.css";

function CartBtn(props) {
  const cartItems = useSelector((state) => state.cartItems);
  const productsCount = cartItems.reduce((a, i) => (a += i.quantity), 0);
  return (
    <button className={navbarStyles.cartbtn}>
      <img src={cartLogo} />
      {productsCount ? (
        <span>{productsCount > 9 ? "9+" : productsCount}</span>
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

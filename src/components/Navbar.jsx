import { Link, NavLink } from "react-router";
import navbarStyles from "../styles/Navbar.module.css";
import logo from "../assets/logos/logo.png";
import hamMenu from "../assets/symbols/ham-menu.svg";
import closeIcon from "../assets/symbols/close-icon.svg";
// import CartBtn from "./CartBtn";
import { useState } from "react";
// import { useCart } from "./CartContext";

export default function Navbar() {
  const links = [
    { route: "/", displaytext: "Home" },
    { route: "/catalogue", displaytext: "Catalogue" },
    { route: "/aboutus", displaytext: "About Us" },
    { route: "/contactus", displaytext: "Contact Us" },
  ];

  const [open, setOpen] = useState(false);
  // const { isCartOpen } = useCart();

  const onClickMenu = (e) => {
    setOpen(!open);
  };

  return (
    <div className={navbarStyles.navbar}>
      <div className={navbarStyles["logo-cont"]}>
        <button
          // className={`${navbarStyles.menuBtn} ${open ? "open" : "close"} ${
          className={`${navbarStyles.menuBtn}`}
          onClick={onClickMenu}
        >
          <img src={open ? closeIcon : hamMenu} />
        </button>
        <img src={logo} alt="online-shoe-store" />
        <p>Online Shoe Store</p>
      </div>
      <div className={navbarStyles.endContent}>
        {/* <nav
          className={`${open ? navbarStyles.open : ""} ${
            isCartOpen ? navbarStyles["cart-open"] : ""
          }`}
        > */}
        <nav className={`${open ? navbarStyles.open : ""}`}>
          <ul className={navbarStyles.navItems}>
            {links.map((link) => (
              <li key={link.route}>
                <NavLink
                  style={({ isActive }) => {
                    if (!isActive) return;
                    return {
                      backgroundColor: "#b6acac",
                      color: "white",
                    };
                  }}
                  to={link.route}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {" "}
                  {link.displaytext}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {/* <CartBtn /> */}
      </div>
    </div>
  );
}

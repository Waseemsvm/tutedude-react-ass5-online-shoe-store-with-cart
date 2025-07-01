import { Link, NavLink } from "react-router";
import navbarStyles from "../styles/Navbar.module.css";
import logo from "../assets/logos/logo.png";
import cartLogo from "../assets/symbols/cart-icon.svg";
import hamMenu from "../assets/symbols/ham-menu.svg";

export default function Navbar() {
  const links = [
    { route: "/", displaytext: "Home" },
    { route: "/catalogue", displaytext: "Catalogue" },
    { route: "/aboutus", displaytext: "About Us" },
    { route: "/contactus", displaytext: "Contact Us" },
  ];

  const productsCount = 1;

  return (
    <div className={navbarStyles.navbar}>
      <div className={navbarStyles["logo-cont"]}>
        <button className={navbarStyles.menuBtn}>
          <img src={hamMenu} />
        </button>
        <img src={logo} alt="online-shoe-store" />
        <p>Online Shoe Store</p>
      </div>
      <div className={navbarStyles.endContent}>
        <nav>
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
                >
                  {" "}
                  {link.displaytext}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button className={navbarStyles.cartbtn}>
          <img src={cartLogo} />
          {productsCount ? (
            <span>{productsCount > 9 ? "9+" : productsCount}</span>
          ) : null}
        </button>
      </div>
    </div>
  );
}

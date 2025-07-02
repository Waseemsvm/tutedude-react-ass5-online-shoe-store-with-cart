import LayoutStyles from "../styles/Layout.module.css";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import { connect } from "react-redux";

export default function Layout() {
  return (
    <div className={LayoutStyles.main}>
      <Navbar />
      <Main />
    </div>
  );
}


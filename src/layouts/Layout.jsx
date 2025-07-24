import LayoutStyles from "../styles/Layout.module.css";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import { connect } from "react-redux";
import MessageToast from "../components/MessageToast";

export default function Layout() {
  return (
    <div className={LayoutStyles.main}>
      <Navbar />
      <Main />
      <MessageToast />
    </div>
  );
}


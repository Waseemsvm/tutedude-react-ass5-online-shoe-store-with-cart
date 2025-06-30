import LayoutStyles from "../styles/Layout.module.css";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

export default function Layout() {
  return (
    <div className={LayoutStyles.main}>
      <Navbar />
      <Main />
    </div>
  );
}

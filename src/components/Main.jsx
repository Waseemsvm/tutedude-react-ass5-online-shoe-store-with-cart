import mainStyles from "../styles/Main.module.css";
import HomePage from "./HomePage";
import Catalogue from "./Catalogue";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import { BrowserRouter, Route, Routes } from "react-router";
import NotfoundPage from "./NotfoundPage";

export default function Main() {
  return (
    <div className={mainStyles.main}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </div>
  );
}

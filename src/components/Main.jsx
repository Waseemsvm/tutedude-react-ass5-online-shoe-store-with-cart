import mainStyles from "../styles/Main.module.css";
import HomePage from "./HomePage";
import Catalogue from "./Catalogue";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import { Route, Routes } from "react-router";
import NotfoundPage from "./NotfoundPage";
import CataloguePageLayout from "../layouts/CataloguePageLayout";
import CheckoutPage from "./CheckoutPage";
export default function Main() {
  return (
    <div className={`${mainStyles.main} main-div`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="catalogue" element={<CataloguePageLayout />}>
          <Route path="" element={<Catalogue />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </div>
  );
}

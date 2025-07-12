import { Outlet } from "react-router";
import CartPage from "../components/CartPage";
import Catalogue from "../components/Catalogue";

export default function CataloguePageLayout(){
    return<>
        <CartPage />      
        <Outlet />
    </>
}
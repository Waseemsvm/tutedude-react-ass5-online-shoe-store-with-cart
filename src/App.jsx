import { BrowserRouter } from "react-router";
import Layout from "./layouts/Layout";
import appStyles from "./styles/App.module.css";
import { Provider } from "react-redux";
import catalogueStore from "./app_state/store/catalogueStore";

import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <div className={appStyles.app}>
      <BrowserRouter>
        <Provider store={catalogueStore}>
          <CartProvider>
            <Layout />
          </CartProvider>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

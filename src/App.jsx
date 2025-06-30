import { BrowserRouter } from "react-router";
import Layout from "./layouts/Layout";
import appStyles from "./styles/App.module.css";

function App() {
  return (
    <div className={appStyles.app}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;

import catalogueStyles from "../styles/Catalogue.module.css";
import CatalogueItem from "../components/CatalogueItem";
import { connect } from "react-redux";

function Catalogue(props) {
  const { products } = props;
  return (
    <div className={catalogueStyles["catalogue-container"]}>
      <div className={catalogueStyles.toolbar}>
        <input placeholder="Search shoes" />
      </div>
      <div className={catalogueStyles.catalogue}>
        <ul className={catalogueStyles["products-container"]}>
          {products.map((product) => (
            <CatalogueItem key={product.id} item={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Catalogue);

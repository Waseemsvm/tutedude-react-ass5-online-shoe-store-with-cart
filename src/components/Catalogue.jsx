import catalogueStyles from "../styles/Catalogue.module.css";
import CatalogueItem from "../components/CatalogueItem";
import { connect, useDispatch } from "react-redux";
import { filterItems } from "../app_state/reducers/catalogueReducer";

function Catalogue(props) {
  const { products } = props;
  const dispatch = useDispatch();
  return (
    <div className={catalogueStyles["catalogue-container"]}>
      <div className={catalogueStyles.toolbar}>
        <input
          placeholder="Search shoes"
          onChange={(e) => {
            dispatch(filterItems(e.target.value));
          }}
        />
      </div>

      {products.length ? (
        <div className={catalogueStyles.catalogue}>
          <ul className={catalogueStyles["products-container"]}>
            {products.map((product) => (
              <CatalogueItem key={product.id} item={product} />
            ))}
          </ul>
        </div>
      ) : (
        <div className={catalogueStyles["no-products"]}>
          <h1>No Products to Show</h1>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Catalogue);

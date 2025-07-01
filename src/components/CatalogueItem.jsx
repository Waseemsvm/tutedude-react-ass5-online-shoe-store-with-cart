import catalogueStyles from "../styles/Catalogue.module.css";
import rupee_symbol from "../assets/symbols/Indian_Rupee_symbol.svg";

export default function CatalogueItem(props) {
  const { item } = props;

  if (!item) return <div>Loading...</div>;
  return (
    <div className={catalogueStyles["catalogue-item"]}>
      <div className={catalogueStyles["img-cont"]}>
        <img src={item.url} alt={item.text} />
      </div>
      <p>{item.text}</p>
      <form>
        <div className={catalogueStyles["product-price"]}>
          <img src={rupee_symbol} />
          <p>{item.price}</p>
        </div>
        <div>
          <button className={catalogueStyles["add-to-cart"]}>Add to Cart</button>
        </div>
      </form>
    </div>
  );
}

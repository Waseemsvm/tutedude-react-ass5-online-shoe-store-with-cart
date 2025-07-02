import catalogueStyles from "../styles/Catalogue.module.css";
import rupee_symbol from "../assets/symbols/Indian_Rupee_symbol.svg";
import { connect, useDispatch, useSelector } from "react-redux";
import { addItem } from "../app_state/reducers/catalogueReducer";
import { useState } from "react";
import StepCounterButton from "./StepCounterButton";

function CatalogueItem({ item, cartItems }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => {
    return state.products.find((product) => product.id == item.id);
  });

  const inCart = !!cartItems.find((i) => i.id == cartItem.id);

  const onAddToCart = (e) => {
    e.preventDefault();
  };

  return (
    <li>
      <div className={catalogueStyles["catalogue-item"]}>
        <div className={catalogueStyles["img-cont"]}>
          <img src={cartItem.url} alt={cartItem.text} />
        </div>
        <p>{cartItem.text}</p>
        <form onSubmit={onAddToCart}>
          <div className={catalogueStyles["product-price"]}>
            <img src={rupee_symbol} />
            <p>{cartItem.price}</p>
          </div>
          <div>
            {inCart ? (
              <StepCounterButton id={cartItem.id} />
            ) : (
              <button
                className={catalogueStyles["add-to-cart"]}
                onClick={(e) => {
                  dispatch(addItem(cartItem.id));
                }}
              >
                Add to Cart
              </button>
            )}
          </div>
        </form>
      </div>
    </li>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps, { addToCart: addItem })(CatalogueItem);

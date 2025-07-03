import { connect, useDispatch, useSelector } from "react-redux";
import StepCounterButton from "./StepCounterButton";
import { deleteItem } from "../app_state/reducers/catalogueReducer";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cartItems.find((i) => i.id == item.id)
  );

  return (
    <div className="cart-item">
      <div className="item-details">
        <img src={cartItem.url} alt={cartItem.text} />
        <div className="item-quantity">
          <p>{cartItem.text}</p>
          <p>
            {" "}
            {cartItem.price} x {cartItem.quantity}
          </p>
          <button
          className="delete-button"
            onClick={() => {
              dispatch(deleteItem(cartItem.id));
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <StepCounterButton id={cartItem.id} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = () => {
  return {
    deleteItem: deleteItem,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

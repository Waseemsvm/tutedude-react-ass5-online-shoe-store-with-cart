import { connect, useDispatch, useSelector } from "react-redux";
import StepCounterButton from "./StepCounterButton";
import { deleteItem } from "../app_state/reducers/catalogueReducer";
import CartItemStyles from "../styles/CartItem.module.css";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cartItems.find((i) => i.id == item.id)
  );

  return (
    <div className={CartItemStyles["cart-item"]}>
      <div className={CartItemStyles["cart-item-details"]}>
        <img src={item.url} className={CartItemStyles["cart-item-img"]} />
        <div className={CartItemStyles["cart-item-display"]}>
          <h6 title={item.text}>{item.text}</h6>
          <p>
            {" "}
            {cartItem.price} x {cartItem.quantity}
          </p>
          <div className={CartItemStyles["step-counter"]}>
            <StepCounterButton id={item.id} />
          </div>
          <button className={CartItemStyles["delete"]} onClick={() =>{
            dispatch(deleteItem(cartItem.id))
          }}>Delete</button>
        </div>
      </div>
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

//     <div className="cart-item">
//       <div className="item-details">
//         <img src={cartItem.url} alt={cartItem.text} />
//         <div className="item-quantity">
//           <p>{cartItem.text}</p>
//           <p>
//             {" "}
//             {cartItem.price} x {cartItem.quantity}
//           </p>
//           <button
//           className="delete-button"
//             onClick={() => {
//               dispatch(deleteItem(cartItem.id));
//             }}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//       <StepCounterButton id={cartItem.id} />
//     </div>

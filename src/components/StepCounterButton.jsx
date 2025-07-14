import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../app_state/reducers/catalogueReducer";
import catalogueStyles from "../styles/Catalogue.module.css";
export default function StepCounterButton({ id }) {
  const dispatch = useDispatch();

  const count = useSelector((state) => {
    return state.cartItems.find((i) => i.id == id)?.quantity ?? 0;
  });
  return (
    <div className={`${catalogueStyles["step-counter"]}`}>
      <button
        onClick={() => {
          dispatch(removeItem(id));
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        // disabled={count > 4}
        onClick={() => {
          dispatch(addItem(id));
        }}
      >
        +
      </button>
    </div>
  );
}

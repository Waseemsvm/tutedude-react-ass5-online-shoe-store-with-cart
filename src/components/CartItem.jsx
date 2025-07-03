import StepCounterButton from "./StepCounterButton";

export default function CartItem({ item }) {
  return (
    <div className="cart-item">
      <div className="item-details">
        <img src={item.url} alt={item.text} />
        <div className="item-quantity">
          <p>{item.text}</p>
          <p>
            {" "}
            {item.price} x {item.quantity}
          </p>
          <button>delete</button>
        </div>
      </div>
      <StepCounterButton id={item.id} />
    </div>
  );
}

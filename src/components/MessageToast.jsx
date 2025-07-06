import MessageToastStyles from "../styles/MessageToast.module.css";
import { useMessageToast } from "./MessageToastContext";
export default function MessageToast() {
  const { isMessageToastOpen, showMessageToast } = useMessageToast();
  return (
    <div
      className={`${MessageToastStyles["message-toast"]} ${
        isMessageToastOpen ? "" : MessageToastStyles.hide
      }`}
    >
      <h1>Order placed Successfully</h1>
      <p>Your order reference number is #111222333</p>
      <button
        onClick={() => {
          showMessageToast(false);
        }}
      >
        Dismiss
      </button>
    </div>
  );
}

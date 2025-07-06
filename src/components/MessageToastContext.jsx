import { createContext, useContext, useState } from "react";

const MessateToastContext = createContext();

export const MessageToastProvider = ({ children }) => {
  const [isMessageToastOpen, setIsMessageToastOpen] = useState(false);
  const showMessageToast = (value) => {
    setIsMessageToastOpen(value);
  };

  return (
    <MessateToastContext.Provider
      value={{ showMessageToast, isMessageToastOpen }}
    >
      {children}
    </MessateToastContext.Provider>
  );
};

export const useMessageToast = () => useContext(MessateToastContext);

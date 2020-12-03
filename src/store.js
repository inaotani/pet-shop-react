import { createContext, useEffect, useState } from "react";

const store = createContext([]);

const { Provider } = store;

const StoreProvider = ({ children }) => {
  const cart = window.localStorage.getItem("cart")
    ? JSON.parse(window.localStorage.getItem("cart"))
    : [];

  const [state, setState] = useState(cart);
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);
  return <Provider value={{ state, setState }}>{children}</Provider>;
};

export { StoreProvider, store };

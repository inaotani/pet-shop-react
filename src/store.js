import { createContext, useEffect, useState } from "react";

const store = createContext([]);

const login = createContext([]);

const { Provider } = store;

const StoreProvider = ({ children }) => {
  const cart = window.localStorage.getItem("cart")
    ? JSON.parse(window.localStorage.getItem("cart"))
    : [];
  const [state, setState] = useState(cart);
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const auth = window.localStorage.getItem("auth")
    ? window.localStorage.getItem("auth")
    : false;
  const [login, setLogin] = useState(auth);
  useEffect(() => {
    window.localStorage.setItem("auth", JSON.stringify(login));
  }, [login]);

  return (
    <Provider value={{ state, setState, login, setLogin }}>{children}</Provider>
  );
};

export { StoreProvider, store, login };

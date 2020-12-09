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

  let localAuth = JSON.parse(window.localStorage.getItem("auth"));
  const auth = localAuth
    ? localAuth
    : { status: false, admin: false, auth: "" };
  const [login, setLogin] = useState(auth);
  useEffect(() => {
    window.localStorage.setItem("auth", JSON.stringify(login));
  }, [login]);

  return (
    <Provider value={{ state, setState, login, setLogin }}>{children}</Provider>
  );
};

export { StoreProvider, store };

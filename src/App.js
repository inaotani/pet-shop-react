import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Racoes from "./pages/Racoes";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import SingUp from "./pages/SingUp";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";
import AdminProduct from "./pages/AdminProduct";
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/racoes" component={Racoes} />
          <Route path="/login" component={Login} />
          <Route path="/p/:id" component={Product} />
          <Route path="/carrinho" component={Cart} />
          <Route path="/cadastra-se" component={SingUp} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/minha-conta" component={MyAccount} />
          <Route path="/estoque" component={AdminProduct} />
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;

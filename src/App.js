import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Racoes from './pages/Racoes';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/racoes" component={Racoes} />
        <Route path="/login" component={Login} />
        <Route path="/produto" component={Product} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;

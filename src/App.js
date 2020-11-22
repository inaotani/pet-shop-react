import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

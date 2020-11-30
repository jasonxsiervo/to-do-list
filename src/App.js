import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './styles/App.css';
import ProtectedRoute from './ProtectedRoute';
import Nav from './components/Nav';
import Home from './Home';
import Login from './Login';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Nav logout={logout} isAuthenticated={isAuthenticated} />
        <Switch>
          <Route path="/login" exact>
            {
              isAuthenticated ? <Redirect to="/" exact /> : <Route path="/login" exact render={() => <Login login={login} />} />
            }
          </Route>
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path="/" exact
            logout={logout}
            component={Home}
          />
          <Route path="*">
            <div>404 Not found</div>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

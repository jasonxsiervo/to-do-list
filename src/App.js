import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetail';


function App() {
  const tasks = useSelector(state => state.tasks);
  // const isLogged = useSelector(state => state.isLogged);
  // const dispatch = useDispatch();
  console.log('Tasks: ', tasks);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>

        {/* <h1>Counter {tasks}</h1> */}
        {/* <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        {
          isLogged ?
            <h3>valuable information i shouldn't see</h3> : <h3>DENIED</h3>
        } */}
      </div>
    </Router>
  );
}

export default App;

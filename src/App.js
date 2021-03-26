import React from "react";
import { Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import Pizza from './pizza'
import './App.css'

const App = () => {
  return (
    <div >
      <nav>
      <h1 className='main-header'>Luis&apos;s Pizza Pies</h1>

        <div className='nav-links'>
          {/* Links to navigate us Home (`/`) and Shop (`/pizza`) */}
          <button id = 'homeButton' className = 'homeButton'><Link to="/">Home </Link></button>
          <button id = 'orderButton' className = 'orderButton'><Link to="/pizza">Order</Link></button>
        </div>
      </nav>

        <Switch>
          <Route path="/pizza">
            <Pizza/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </div>
  );
};
export default App;

import React from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import About from './Components/Home/About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Projects from './Components/Home/Projects/Projects';

function App() {
  return (
    <div className='body'>

      <Router>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path = '/projects'>
            <Projects></Projects>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;

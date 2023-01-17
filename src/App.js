import React from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header_m from './Components/Header_m/Header_m';
import Intro from './Components/Intro/Intro';
import Portfolio from './Components/Portfolio/Portfolio';
import Skill_m from './Components/Skill_m/Skill_m';
import Topbar from './Components/Topbar_m/Topbar';
// import Home from './Components/Home/Home/Home';
// import About from './Components/Home/About/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import Projects from './Components/Home/Projects/Projects';

function App() {
  return (
    <>
      <Header_m />
      <Topbar />
      <Intro />
      <Skill_m />
      <Portfolio />
      <Contact />
      <Footer/>

      {/* <Router>

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
      </Router> */}
    </>

  );
}

export default App;

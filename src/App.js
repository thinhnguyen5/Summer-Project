import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/menu' exact component={Menu}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/sign-up' exact component={SignUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;

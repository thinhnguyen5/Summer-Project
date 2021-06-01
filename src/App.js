import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Menu from './components/pages/Menu';
import Location from './components/pages/Location';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import constants from './constants.json';
import axios from 'axios';

export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      isAuthenticated: false,
      someData: []
    };
  }

  onLogin = () => {
    this.setState({ isAuthenticated: true })
    alert("Login Success")
  }

  onLoginFail = () => {
    this.setState({ isAuthenticated: false });
    alert("Login failed, wrong username or password, please try");
  }

  render() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/menu' exact component={Menu}/>
        <Route path='/location' exact component={Location}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/sign-up'
               exact
               render={
                 (routeProps) =>
                 <Register
                 redirectPathOnSuccess='/login'
                 {...routeProps}/>
                }/> 
        <Route path='/login'
               exact
               render={
                 (routeProps) => 
                 <Login 
                 loginSuccess = { this.onLogin }
                 loginFail = { this.onLoginFail }
                 userInfo={ this.state.userInfo }
                 redirectPathOnSuccess="/menu"
                 {...routeProps} />
               } />
      </Switch>
    </Router>
    </>
  );
}
}




import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Home from '../Routes/Home';
import Calendar from '../Routes/Calendar';
import Board from '../Routes/Board';
import Certi from '../Routes/Certi';
import User from '../Routes/User';

export default () => (
  <Router>
    <>
      <Navbar /> 
      <Switch>
        <Route path="/" exact component = {Home} />
        <Route path="/calendar" exact component = {Calendar} />
        <Route path="/board" exact component = {Board} />
        <Route path="/certi" exact component = {Certi} />
        <Route path="/user" exact component = {User} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
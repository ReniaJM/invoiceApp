import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./components/routes/HomePage"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </Router>

  );
}

export default App;

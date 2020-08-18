import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import UserAuth from './components/UserAuth';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        
        <Route path="/">
          <Header />
          <UserAuth/>
        </Route>

        </Switch>
    </Router>
      
    </div>
  );
}

export default App;

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Redirect from="/" to="/login" />
      <Switch>
        <Route exact path="/login" component={ LoginPage } />
      </Switch>
    </div>
  );
}

export default App;

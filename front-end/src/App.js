import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/" component={ HomePage } />
      </Switch>
    </div>
  );
}

export default App;

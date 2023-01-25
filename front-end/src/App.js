import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SellerOrdersPage from './pages/SellerOrdersPage/SellerOrdersPage';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/customer/products" component={ ProductsPage } />
        <Route exact path="/register" component={ RegisterPage } />
        <Route exact path="/seller/orders" component={ SellerOrdersPage } />
        {/* <Route path="*" component={ NotFound } /> */}
      </Switch>
    </div>
  );
}

export default App;

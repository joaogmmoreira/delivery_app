import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AdminPage from './pages/AdminPage/AdminPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import CustomerOrderDetailsPage
  from './pages/CustomerOrderDetailsPage/CustomerOrderDetailsPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import OrderDetailsPage from './pages/SellerOrderDetailsPage/SellerOrderDetailsPage';
import SellerOrdersPage from './pages/SellerOrdersPage/SellerOrdersPage';
import CustomerPage from './pages/CustomerPage/CustomerPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/index" component={ HomePage } />
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/customer/products" component={ ProductsPage } />
        <Route exact path="/register" component={ RegisterPage } />
        <Route exact path="/seller/orders" component={ SellerOrdersPage } />
        <Route exact path="/seller/orders/:id" component={ OrderDetailsPage } />
        {/* <Route path="*" component={ NotFound } /> */}
        <Route exact path="/admin/manage" component={ AdminPage } />
        <Route exact path="/customer/checkout" component={ CheckoutPage } />
        <Route exact path="/customer/orders/:id" component={ CustomerOrderDetailsPage } />
        <Route exact path="/customer/orders" component={ CustomerPage } />
      </Switch>
    </div>
  );
}

export default App;

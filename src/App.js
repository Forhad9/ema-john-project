
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetails/ProductDetail';


function App() {
  return (
    <div>
    <Header></Header>
    <Router>
    <Switch>
     <Route path="/shop">
     <Shop></Shop>
     </Route>
     <Route path="/review">
      <Review></Review>
     </Route>
     <Route path="/Inventory">
      <Inventory></Inventory>
     </Route>
     <Route exact path="/">
     <Shop></Shop>
     </Route>
     <Route path="/product/:ProductKey">
     <ProductDetail></ProductDetail>
     </Route>
     <Route path="*">
       <NotFound></NotFound>
     </Route>
     
    
    </Switch>
    
    </Router>
     
     
    
    </div>
  );
}

export default App;

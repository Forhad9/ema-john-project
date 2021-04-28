import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
   const first10 = fakeData.slice(0,10);
   const [products, setProduct]  =useState(first10);
    return (
        <div className ="shop-container">
           <div className="product-container">
        
           { 
               products.map(element => <Product product={element}></Product>)
          }
        
           </div>
           <div className = "card-container">
           <h1>i am forhad reza card container div</h1>
           </div>
        </div>
    );
};

export default Shop;
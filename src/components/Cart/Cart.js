import React from 'react';

const Cart = (props) => {
   const cart =props.cart;
//    const total = cart.reduce((total,prd) => total+prd.price, 0)
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
      const products = cart[i];
      total = total + products.price;
      
  }
  let shipping = 0;
  if(total > 35){
      shipping = 0;
  }
  else if(total > 15){
      shipping = 4.99;
  }
  else if(total > 0){
      shipping = 12.99
  } 

  const tax = total / 10;

  const formatNumber = num =>{
      const precision = num.toFixed(2);
      return Number(precision);
  }
    return (
        <div>
            <h4 style={{backgroundColor:'lightgray',padding:5,borderRadius:7}}>Order Summary</h4>
            <p>Items Ordered:{cart.length}</p>
            <p><small>Product Price:${formatNumber(total)}</small></p>
            <p><small>Shipping & Handling:${shipping}</small></p>
            <p><small>Total before tax:${formatNumber(shipping + total)}</small></p>
            <p><small>Estimated tax:${formatNumber(tax)}</small></p>
            <h4 style={{color:'#FB3640'}}>Order Total: ${formatNumber(total + shipping + tax)}</h4>
            <button className="main-button">Review your Product</button>
        </div>
    );
};

export default Cart;
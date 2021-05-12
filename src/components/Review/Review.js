import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';


const Review = () => {
    const [cart, setCart] = useState([]);
    const [placeOrder, setPlaceOrder] =useState(false);

    const handlePlaceOrder =()=>{
       setCart([]);
       setPlaceOrder(true);
       processOrder();
    }
    let confirmOrder;
    if(placeOrder){
        confirmOrder = <img src={happyImage} alt=""/>
    }
    const removeProduct = (productKey) =>{
       const newCart = cart.filter(pd =>pd.key !== productKey);
       setCart(newCart);
       removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cartProducts);

    }, [])
    return (
        <div className="twin-container">
           <div className="product-container">
           {
            cart.map(pd => <ReviewItem product={pd} removeProduct={removeProduct} key ={pd.key}></ReviewItem>)
          }
         {confirmOrder}
           </div>
           <div className="card-container">
           <Cart cart={cart}>
           <button onClick={handlePlaceOrder} className="main-button">Place order</button>
           </Cart>
           </div>
          
        </div>
    );
};

export default Review;
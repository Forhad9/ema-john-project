import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity, img, seller, stock, price, key } = props.product;
    return (
        <div className="product">
        <div className="image-div">
            <img src={img} alt="" />
        </div>
        <div className="container-div">
            <h4 className="details-div">{name}</h4>
            <br />
            <h3><small>by: {seller}</small></h3>
            <h1>Quantity: {quantity}</h1>
            <p>${price * quantity}</p>
            <p>Only left {stock} left in stock-Order soon!</p>
            <button onClick={()=>props.removeProduct(key)} className="main-button">Remove</button>
        </div>
       
    </div>
    );
};

export default ReviewItem;
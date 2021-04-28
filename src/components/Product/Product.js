import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div className="image-div">
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="details-div">{name}</h4>
                <br />
                <h3><small>by: {seller}</small></h3>
                <p>${price}</p>
                <p>Only left {stock} left in stock-Order soon!</p>
                <button className="main-button">Add to card</button>
            </div>
        </div>
    );
};

export default Product;
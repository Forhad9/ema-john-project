import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div className="image-div">
                <img src={img} alt="" />
            </div>
            <div className="container-div">
                <h4 className="details-div">{name}</h4>
                <br />
                <h3><small>by: {seller}</small></h3>
                <p>${price}</p>
                <p>Only left {stock} left in stock-Order soon!</p>
                <button onClick={() => props.handleAddProduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} /> Add to card</button>
            </div>
        </div>
    );
};

export default Product;
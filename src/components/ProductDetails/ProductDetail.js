import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {ProductKey} = useParams();
    const product = fakeData.find(pd=> pd.key === ProductKey )
    
    return (
        <div>
            <h3>we give best uses oppurtunity</h3>
            <h5>pick your product as soon as possible</h5>
            <Product showAddCart ={false} product ={product}></Product>
            
        </div>
    );
};

export default ProductDetail;
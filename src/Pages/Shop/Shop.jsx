import React, { useState } from 'react';
import ProductsAPI from '../../ProductsApi';
import Product from './product'; 
import './shop.css';

function Shop(props) {
    const [data,setdata]= useState(ProductsAPI)
    return (
       <div className="shop">
        <div className="shoptitle">
            <h1>SHOP OUR PRODUCTS</h1>
        </div>
        <div className="products">
            {data.map((res) =>(
                <Product data={res}/>
            ))}
        </div>
       </div>
    );
}

export default Shop;
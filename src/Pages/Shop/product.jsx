import React, { useContext } from 'react';
import { ShopContext } from '../../Context/shop-context';

function Product(props) {
    const {id,image,title,price,amount,fprice} = props.data;
    const {addToCart,cartItems}=useContext(ShopContext);
    const cartItemAmount= cartItems[id]
    return (
        <div className='product'>
            <img src={image} />
            <div className='description'>
                <h1 className='title'>{title}</h1>
                <p>{price}: <span className='text-decoration-line-through'>{amount}</span>-Rs.{fprice}</p>
                <button className='addToCartBttn' onClick={()=>addToCart(id)}>
                     ADD TO CART {cartItemAmount > 0 && <> ({cartItemAmount })</>
                }</button>
            </div>
        </div>
        
    );
}

export default Product;
import React, {useContext} from 'react';
import { ShopContext } from '../../Context/shop-context';


function CartItem(props) {
    const {id,image,title,price,amount,fprice} = props.data;
    const {cartItems, addToCart,RemoveFromCart ,updateCart}=useContext(ShopContext);


    return (
        <>
        <div className='cartItem'>
            <img src={image}/>
            <div className='description'>
                <p>{title}</p>
                <p>{fprice}</p>
                <div className='countHandler'>
                    <button onClick={()=> RemoveFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e)=> updateCart(Number(e.target.value),id)} />
                    <button onClick={()=> addToCart(id)}>+</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default CartItem;
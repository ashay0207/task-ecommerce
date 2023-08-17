import React , {useContext}from 'react';
import { Link } from 'react-router-dom';
import ProductsAPI from '../../ProductsApi';
import { ShopContext } from '../../Context/shop-context';
import CartItem from './cart-item';
import './cart.css'

function Cart() {
    const {cartItems,getTotalCartAmount}=useContext(ShopContext);
    const totalAmount = getTotalCartAmount ();

    return (
        <div className='cart'>
            <div>
                 <h1> CART ITEMS</h1>
            </div>
            <div className="cartItems">
                {ProductsAPI.map((data) =>{
                if (cartItems[data.id] !== 0){
                  return <CartItem data = {data}/>  
                }
                })}
            </div>

            <div className='checkout'>
                <p>Subtotal: Rs. {totalAmount}</p>
                <Link to={'/cart'}><button> Continue Shopping</button></Link>
            </div>
        </div>
    );
}

export default Cart;
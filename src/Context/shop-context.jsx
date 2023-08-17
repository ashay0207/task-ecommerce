import React, { createContext, useState } from 'react'
import ProductsAPI from '../ProductsApi';

export const ShopContext= createContext(null);

const getDefaultCart=()=>
{
    let cart = {}
    for (let i= 1; i < ProductsAPI.length+1;i++){
        cart[i]=0;
    }
    return cart;
};

export const ShopcontextProvider= (props) => {  
    const [cartItems,setCartItems] =useState(getDefaultCart);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
           if (cartItems[item]> 0 ) {
            let itemInfo= ProductsAPI.find((res) => res.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price
           }
            
        }
        return totalAmount;
    };

    const addToCart = (itemId)=> {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}) );
    };

    const RemoveFromCart = (itemId)=> {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}) );
    };

    const updateCart =(newAmount,itemId)=> {
        setCartItems((prev)=>({...prev,[itemId]: newAmount}))
    }

    const contextValue = {cartItems,addToCart,RemoveFromCart,updateCart,getTotalCartAmount};
    

  return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

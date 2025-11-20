import React, { createContext, useState } from 'react'
import { food_list } from '../assets/assets'



export const Context = createContext(null)

const ContextProvider = (props) => {

    // const [cartItems, setCartItems] = useState({});

    // add item to cart if not already in cart, else increase quantity by 1
    // const addToCart = (itemId) => {
    //     console.log("Adding to cart:", itemId);
    //     if (!cartItems(itemId)) {
    //         setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    //     }
    //     else {
    //         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    //     }
    // }

    // const removeFromCart = (itemId) => {
    //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    // }


    const contextValue = {
        food_list
        // cartItems,
        // setCartItems,
        // addToCart,
        // removeFromCart

    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider



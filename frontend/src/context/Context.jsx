import React, { createContext, useEffect, useState } from 'react'
import { food_list } from '../assets/assets'



export const Context = createContext(null)

const ContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    // add item to cart if not already in cart, else increase quantity by 1
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))

        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    // decreases quantity of item in cart by 1
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    useEffect(() => {
        console.log("Cart Items Updated:", cartItems);
    }, [cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart

    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider



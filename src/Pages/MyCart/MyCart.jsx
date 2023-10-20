import { useLoaderData } from "react-router-dom";
import CartItem from "../../Components/CartItem/CartItem";
import { useState } from "react";

const MyCart = () => {
    const loadedCartItems = useLoaderData();    
    const [cartItems, setCartItems]= useState(loadedCartItems);
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center my-8 text-white">My Cart</h1>
            <div className="md:grid md:grid-cols-3 lg:grid-cols-3 justify-center gap-10 mx-auto">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem._id} product={cartItem} cartItems={cartItems} setCartItems={setCartItems} />)
                }
            </div>
        </div>
    );
};

export default MyCart;
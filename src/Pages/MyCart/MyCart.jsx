import { useLoaderData } from "react-router-dom";
import CartItem from "../../Components/CartItem/CartItem";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyCart = () => {
    const {user}= useContext(AuthContext);
    const currentEmail= user.email;
    const loadedCartItems = useLoaderData();    
    const userCart= loadedCartItems.filter(cart=>cart.userEmail==currentEmail);
    const [cartItems, setCartItems]= useState(userCart);
    
    return (
        <div className="h-screen  max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center my-8 dark:text-black text-white">My Cart</h1>
            <div className="md:grid md:grid-cols-3 lg:grid-cols-3 justify-center gap-10 mx-auto">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem._id} product={cartItem} cartItems={cartItems} setCartItems={setCartItems} />)
                }
            </div>
        </div>
    );
};

export default MyCart;
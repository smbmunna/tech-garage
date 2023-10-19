import { useLoaderData } from "react-router-dom";
import CartItem from "../../Components/CartItem/CartItem";

const MyCart = () => {
    const cartItems = useLoaderData();    
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center my-8">My Cart</h1>
            <div className="md:grid md:grid-cols-3 lg:grid-cols-3 justify-center gap-10 mx-auto">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem._id} product={cartItem} />)
                }
            </div>
        </div>
    );
};

export default MyCart;
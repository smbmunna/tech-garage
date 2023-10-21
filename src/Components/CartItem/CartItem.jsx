import Swal from "sweetalert2";

const CartItem = ({ product, cartItems, setCartItems }) => {
    
    const { _id, name, image, price, sDescription, } = product.product;
    //delete from cart
    const handleDeleteFromCart = (id) => {
        fetch(`https://tech-garage-server.vercel.app/delete/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Success!',
                        'Product has been Removed From Your Cart!',
                        'success'
                    )
                    const remainingItems = cartItems.filter(item => item.product._id != _id);
                    console.log(remainingItems);
                    setCartItems(remainingItems);
                }

            })
    }
    return (
        <div>
            <div className="card bg-[#2c2c2c91] shadow-xl rounded-none text-white h-[450px] mb-4 mx-4 md:mb-0 md:mx-0">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl w-36" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{sDescription}</p>
                    <h2 className="font-bold text-xl">TK: {price}</h2>
                    <div className="card-actions">
                        <button onClick={() => handleDeleteFromCart(_id)} className="btn btn-warning bg-red-600 text-white rounded-none border-none">Delete From Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
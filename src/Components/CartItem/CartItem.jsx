import { Link } from "react-router-dom";

const CartItem = ({ product }) => {
    const { _id, name, image, price, sDescription } = product;
    //delete from cart
    const handleDeleteFromCart = (id) => {
        fetch(`http://localhost:5000/delete/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl w-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{sDescription}</p>
                    <div className="card-actions">
                        <button onClick={() => handleDeleteFromCart(_id)} className="btn btn-warning bg-red-600 text-white">Delete From Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
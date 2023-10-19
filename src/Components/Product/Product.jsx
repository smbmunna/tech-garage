import { Link } from "react-router-dom";

const Product = ({product}) => {
    const {_id, name, image, price, sDescription}= product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-24" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{sDescription}</p>
                <div className="card-actions">
                    <Link to={`/details/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
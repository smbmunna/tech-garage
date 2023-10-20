import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { _id, name, image, price, sDescription, brand, type, rating } = product;
    return (
        <div className="bg-[#2c2c2c91] shadow-xl lg:flex grid items-center text-left px-4">

            <div>
                <img src={image} alt="Shoes" className="rounded-xl w-48" />
            </div>

            <div className="card-body text-white">
                <h2 className="card-title">{name}</h2>
                <p>Brand: {brand}</p>
                <p>Type: {type}</p>
                <p>Price: {price}</p>
                {/* <p>Description: {sDescription}</p> */}
                <p>Rating: {rating}</p>
                <div className="flex gap-4">
                    <div className="card-actions">
                        <Link to={`/details/${_id}`} className="btn btn-primary bg-[#2c2c2c91] rounded-none px-2">Details</Link>
                    </div>
                    <div className="card-actions">
                        <Link to={`/update/${_id}`} className="btn btn-primary bg-[#2c2c2c91] rounded-none px-2">Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
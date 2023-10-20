import { Link } from "react-router-dom";


const Brand = ({brand}) => {
    const {name, photo, _id}= brand;
    return (
        <Link to={`/brand/${name}`} className="card bg-[#2c2c2c91]  rounded-none  w-48 shadow-xl flex mb-6">
            <figure className="px-10 pt-10">
                <img className="w-24" src={photo} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-lg font-semibold text-gray-300">{name}</h2>
            </div>
        </Link>);
};

export default Brand;
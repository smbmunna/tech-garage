

const Brand = ({brand}) => {
    const {name, photo, _id}= brand;
    return (
        <div className="card bg-base-100  w-48 shadow-xl flex mb-6">
            <figure className="px-10 pt-10">
                <img className="w-24" src={photo} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{name}</h2>
            </div>
        </div>);
};

export default Brand;
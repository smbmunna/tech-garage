import { useContext, useState } from "react";
import { ProductContext } from "../../Providers/ProductProvider";

const PhoneEntry = () => {
    const { brands, types } = useContext(ProductContext);

    //Type Dropdown
    const [type, setType] = useState('');
    const handleType = (e) => {
        setType(e.target.value);
    }
    
    //Brand Dropdown
    const [brand, setBrand] = useState('');
    const handleBrand = (e) => {
        setBrand(e.target.value);
    }

    const handleAddPhone = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.photo.value;
        const name = form.name.value;
        //const brand = form.brand.value;
        //const type = form.type.value;
        const price = form.price.value;
        const sDescription = form.short_description.value;
        const rating = form.rating.value;

        const product = { image, name, brand, type, price, sDescription, rating };
        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full">
                    <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleAddPhone} className="card-body">
                            <h1 className="text-3xl font-bold text-center mb-4">Add Phone</h1>
                            <div className="form-control">
                                <input type="text" name="photo" placeholder="Phone Image" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Phone Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                {/* <input type="text" name="brand" placeholder="Brand" className="input input-bordered" required /> */}
                                <select className="form-control" value={brand} onChange={handleBrand}>
                                    <option value="">Selete Brand</option>
                                    {
                                        brands.map(brand => <option key={brand._id} value={brand.name}>{brand.name}</option>)
                                    }
                                </select>
                            </div>
                            <div className="form-control">
                                {/* <input type="text" name="type" placeholder="Product Type" className="input input-bordered" required /> */}
                                <select className="form-control" value={type} onChange={handleType}>
                                    <option value="">Selete Product Type</option>
                                    {
                                        types.map(type=><option key={type.id} value={type.name}>{type.name}</option>)
                                    }
                                </select>
                            </div>
                            <div className="form-control">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required />
                            </div>
                            <div>
                                <p className="text-red-700">{ }</p>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Add Phone</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneEntry;
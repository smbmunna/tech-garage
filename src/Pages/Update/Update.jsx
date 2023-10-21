import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ProductContext } from "../../Providers/ProductProvider";
import Swal from "sweetalert2";

const Update = () => {
    const product = useLoaderData();
    const { _id, image, name, price, sDescription, rating, announced, display, os, ram, camera, battery } = product;
    const { brands, types } = useContext(ProductContext);
    //Type Dropdown
    const [type, setType] = useState(product.type);
    const handleType = (e) => {
        setType(e.target.value);
    }    
    //Brand Dropdown
    const [brand, setBrand] = useState(product.brand);
    const handleBrand = (e) => {
        setBrand(e.target.value);
    }

    
    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;
        const image = form.photo.value;
        const name = form.name.value;
        //const brand = form.brand.value;
        //const type = form.type.value;
        const price = form.price.value;
        const sDescription = form.short_description.value;
        const rating = form.rating.value;
        const announced= form.announced.value;
        const display= form.display.value;
        const os= form.os.value;
        const ram= form.ram.value;
        const camera= form.camera.value;
        const battery= form.battery.value;

        const updatedProduct = { image, name, brand, type, price, sDescription, rating, announced,display,os, ram, camera,battery};

        //update 
        fetch(`https://tech-garage-server.vercel.app/product/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updatedProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                Swal.fire(
                    'Success!',
                    'Product has been Updated!',
                    'success'
                  )
            }
        })
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-transparent">
                    <div className="hero-content w-full">
                        <div className="card w-full max-w-lg shadow-2xl  bg-[#2c2c2c91] rounded-none text-white">
                            <form onSubmit={handleUpdateProduct} className="card-body">
                                <h1 className="text-3xl font-bold text-center mb-4">Update Product: {name}</h1>
                                <div className="form-control">
                                    <input type="text" name="photo" defaultValue={image} placeholder="Product Image" className="input input-bordered rounded-none  text-white bg-gray-800" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered rounded-none  text-white bg-gray-800" required />
                                </div>
                                <div className="form-control">
                                    {/* <input type="text" name="brand" placeholder="Brand" className="input input-bordered" required /> */}
                                    <select className="form-control text-gray-400 bg-gray-800 p-4" value={brand} onChange={handleBrand}>
                                        <option value="">Selete Brand</option>
                                        {
                                            brands.map(brand => <option key={brand._id} value={brand.name}>{brand.name}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="form-control">
                                    {/* <input type="text" name="type" placeholder="Product Type" className="input input-bordered" required /> */}
                                    <select className="form-control text-gray-400 bg-gray-800 p-4" value={type} onChange={handleType}>
                                        <option value="">Selete Product Type</option>
                                        {
                                            types.map(type => <option key={type.id} value={type.name}>{type.name}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="form-control">
                                    <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered rounded-none  text-white bg-gray-800" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="short_description" defaultValue={sDescription} placeholder="Short Description" className="input input-bordered  rounded-none text-white bg-gray-800" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="rating" placeholder="Rating" defaultValue={rating} className="input input-bordered  rounded-none text-white bg-gray-800" required />
                                </div>

                                <div className="form-control">
                                    <input type="text" name="announced" defaultValue={announced} placeholder="Announcement Date" className="input input-bordered  rounded-none text-white bg-gray-800" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="display" defaultValue={display} placeholder="Display" className="input input-bordered  rounded-none text-white bg-gray-800" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="os" defaultValue={os} placeholder="Operating System" className="input input-bordered  rounded-none text-white bg-gray-800" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="ram" defaultValue={ram} placeholder="RAM" className="input input-bordered  rounded-none text-white bg-gray-800" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="camera" defaultValue={camera} placeholder="Camera" className="input input-bordered  rounded-none text-white bg-gray-800" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="battery" defaultValue={battery} placeholder="Battery" className="input input-bordered  rounded-none text-white bg-gray-800" required />
                                </div>
                                <div>
                                    <p className="text-red-700">{ }</p>
                                </div>
                                <div className="form-control mt-2">
                                    <button className="btn btn-primary bg-[#2c2c2c91] rounded-none text-white">Update Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
    const product= useLoaderData();    
    const  {_id, image, name, brand, type, price, sDescription, rating, announced,display,os, ram, camera,battery} = product; 

    //add to cart
    const handleAddToCart=()=>{
        fetch('https://tech-garage-server-ad3y9riqt-mahmud-munnas-projects.vercel.app/cart',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire(
                    'Success!',
                    'Product has been added to your Cart!',
                    'success'
                  )
            }
        })
    }
    return (
        <div className="lg:grid lg:grid-cols-2 w-3/4 lg:w-1/2 mx-auto gap-10 items-center justify-between mt-20">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="text-white">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="mt-10">{sDescription}</p>
                <p>Announcement: {announced}</p>
                <p>Display: {display}</p>
                <p>Operating System: {os}</p>
                <p>RAM: {ram}</p>
                <p>Camera: {camera}</p>
                <p>Battery: {battery}</p>

                <button onClick={handleAddToCart} className="btn btn-primary bg-[#2c2c2c91] rounded-none  mt-8">Add To Cart</button>
            </div>
            <Link to='/myCart' className="btn btn-primary bg-[#2c2c2c91] rounded-none mt-4 ">My Cart</Link>
        </div>
    );
};

export default Details;
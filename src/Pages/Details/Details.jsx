import { useLoaderData } from "react-router-dom";

const Details = () => {
    const product= useLoaderData();    
    const  {_id, image, name, brand, type, price, sDescription, rating, announced,display,os, ram, camera,battery} = product; 

    //add to cart
    const handleAddToCart=()=>{
        fetch('http://localhost:5000/cart',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=> console.log(data))
    }
    return (
        <div className="lg:grid lg:grid-cols-2 w-1/2 mx-auto gap-10 items-center justify-between">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="mt-10">{sDescription}</p>
                <p>Announcement: {announced}</p>
                <p>Display: {display}</p>
                <p>Operating System: {os}</p>
                <p>RAM: {ram}</p>
                <p>Camera: {camera}</p>
                <p>Battery: {battery}</p>

                <button onClick={handleAddToCart} className="btn btn-primary mt-8">Add To Cart</button>
            </div>
        </div>
    );
};

export default Details;
import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import Slider from "../Slider/Slider";

const Products = () => {
    const products = useLoaderData();    
    //get the brand name
    const { brand } = useParams();

    return (
        <div className="max-w-6xl mx-auto">
            <Slider/>
            <h1 className="text-3xl font-bold text-center text-white my-10">{brand} Products</h1>
            {/* <div className="md:grid md:grid-cols-3 lg:grid-cols-3 justify-center gap-10 mx-auto"> */}
            <div className="lg:grid lg:grid-cols-2 items-center gap-10 mx-auto w-4/5">
                {
                    products.map(product=><Product key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;
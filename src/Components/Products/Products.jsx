import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
    const products = useLoaderData();
    console.log(products);
    //get the brand name
    const { brand } = useParams();

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-center">{brand} Products</h1>
            <div className="md:grid md:grid-cols-3 lg:grid-cols-3 justify-center gap-10 mx-auto">
                {
                    products.map(product=><Product key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;
import { useContext } from "react";
import { ProductContext } from "../../Providers/ProductProvider";
import Brand from "../Brand/Brand";

const Brands = () => {
    const { brands } = useContext(ProductContext);
    return (
        <div>
            <h1 className="text-4xl font-bold  text-center my-12 text-white">Top Brands</h1>
            <div className="md:grid md:grid-cols-5 lg:grid-cols-5 justify-center gap-4 mx-auto">
                {
                    brands.map(brand => <Brand key={brand._id} brand={brand} />)
                }
            </div>
        </div>
    );
};

export default Brands;
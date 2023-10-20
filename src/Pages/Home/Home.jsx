import Header from "../../Components/Header/Header";
import Brands from "../../Components/Brands/Brands";
import Banner from "../../Components/Banner/Banner";
import { useContext } from "react";
import { ProductContext } from "../../Providers/ProductProvider";


const Home = () => {
    const {handleThemeSwitch}= useContext(ProductContext)
    return (
        <div className="">
            <Banner className=""/>
            {/* <button onClick={handleThemeSwitch} className="btn">Toggle</button> */}
            <div className="max-w-6xl mx-auto">                
                <Brands />
            </div>
        </div>
    );
};

export default Home;
import Header from "../../Components/Header/Header";
import Brands from "../../Components/Brands/Brands";
import Banner from "../../Components/Banner/Banner";
import { useContext } from "react";
import { ProductContext } from "../../Providers/ProductProvider";
import Featured from "../../Components/Featured/Featured";


const Home = () => {
    const {handleThemeSwitch}= useContext(ProductContext)
    return (
        <div className="">
            <Banner className=""/>
            {/* <button onClick={handleThemeSwitch} className="btn">Toggle</button> */}
            <div className="max-w-6xl mx-auto">                
                <Brands />
                <Featured/>
            </div>
        </div>
    );
};

export default Home;
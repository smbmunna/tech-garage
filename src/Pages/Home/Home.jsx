import Header from "../../Components/Header/Header";
import Brands from "../../Components/Brands/Brands";
import Banner from "../../Components/Banner/Banner";


const Home = () => {
    return (
        <div className="">
            <Banner className=""/>
            <div className="max-w-6xl mx-auto">                
                <Brands />
            </div>
        </div>
    );
};

export default Home;
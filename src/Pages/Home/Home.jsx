import Header from "../../Components/Header/Header";
import Brands from "../../Components/Brands/Brands";


const Home = () => {
    return (
        <div>
            <Header />
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold text-center my-10">Home Page </h1>
                <Brands />
            </div>
        </div>
    );
};

export default Home;
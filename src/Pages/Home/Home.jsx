import Header from "../../Components/Header/Header";
import Brands from "../../Components/Brands/Brands";
import Banner from "../../Components/Banner/Banner";

import Featured from "../../Components/Featured/Featured";
import Special from "../../Components/Special/Special";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";


const Home = () => {    
    return (
        <div className="">
            <Banner className=""/>
            {/* <button onClick={handleThemeSwitch} className="btn">Toggle</button> */}
            <div className="max-w-6xl mx-auto">                
                <Brands />
                <Featured/>
                <GetInTouch/>
                <Special/>
            </div>
        </div>
    );
};

export default Home;
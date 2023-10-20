import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { useContext, useEffect } from "react";
import { ProductContext } from "../Providers/ProductProvider";


const Root = () => {

    return (
        <div className="bg-[url('https://i.ibb.co/3ch67TH/symbol-scatter-haikei-1.png')] dark:bg-[url('https://i.ibb.co/BZ4z4xG/symbol-scatter-haikei-2.png')]">
            < Navbar />
            <Outlet />
            <Footer />
        </div >
    );
};

export default Root;
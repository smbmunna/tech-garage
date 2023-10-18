import { useContext } from "react";
import Header from "../../Components/Header/Header";
import { AuthContext } from "../../Providers/AuthProvider";


const Home = () => {
    const {user}= useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <Header/>
            <h1 className="text-2xl font-bold">Home Page </h1>            
        </div>
    );
};

export default Home;
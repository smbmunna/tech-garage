import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import './Login.css'


const Login = () => {
    const [loginError, setLoginError] = useState('');
    const { loginUser, googleLogin } = useContext(AuthContext);
    //redirect to homepage after login
    const navigate = useNavigate();
    const location= useLocation();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        //Resetting Login error 
        setLoginError('');

        loginUser(email, password)
            .then(() => {
                //console.log(result.user);
                //redirecting to desired page after login
                navigate(location.state ? location.state : '/' );
            })
            .catch(error => {
                setLoginError(error.message);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                //redirecting to desired page after login
                navigate(location.state ? location.state : '/' );
            })
            .catch(error => {
                setLoginError(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-transparent">
                <div className="hero-content">
                    <div className="card w-full max-w-sm shadow-2xl bg-[#2c2c2c91] rounded-none text-white">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="email" className="input input-bordered rounded-none text-black" required />
                            </div>
                            <div className="form-control">
                                <input type="password" name="password" placeholder="password" className="input input-bordered rounded-none text-black" required />
                            </div>
                            <div className="form-control mt-2 text-sm">
                                <p>Don't have Account? <Link className="font-bold text-blue-500" to="/register">Register</Link></p>
                            </div>
                            <div>
                                <p className="text-red-700">{loginError}</p>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary bg-[#2c2c2c91] rounded-none text-white ">Login</button>
                            </div>
                            {/* Social Login */}
                            <div className="flex">
                                <div className="mx-auto">
                                    <button
                                        onClick={handleGoogleLogin}
                                        className="btn btn-primary bg-[#2c2c2c91] rounded-none text-white">
                                        <FcGoogle className="text-3xl" />  Google Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
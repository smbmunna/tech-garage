import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const [loginError, setLoginError]= useState('');
    const { loginUser } = useContext(AuthContext);
    //redirect to homepage after login
    const navigate= useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        //Resetting Login error 
        setLoginError('');      

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => {
                setLoginError(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-2 text-sm">
                                <p>Don't have Account? <Link className="font-bold text-blue-500" to="/register">Register</Link></p>
                            </div>
                            <div>
                                <p className="text-red-700">{loginError}</p>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const [regError, setRegError] = useState('');
    const { createUser, updateUser, setUser, googleLogin } = useContext(AuthContext);
    //redirect user to login page after registration
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


        //Resetting Reg error 
        setRegError('');

        if (password.length < 6) {
            setRegError('Password Must Have more than 6 characters.')
            return
        }
        if (!/^(?=.*[A-Z]).+$/.test(password)) {
            setRegError('Password Must Have at least one Upper Case Letter');
            return;
        }
        if ((!/^.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-].*$/.test(password))) {
            setRegError('Password must contain at least one Special Character');
            return;
        }

        //create user 
        createUser(email, password)
            .then(result => {
                //update profile
                updateUser(name, photo)
                    .then(() => {
                        console.log('profile updated');
                        setUser(null);
                        navigate('/login');
                    })
                    .catch(error => {
                        setRegError(error.message);
                    })
            })
            .catch(error => {
                setRegError(error.message);
            })
    }
    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result=>{
            console.log(result);
        })
        .catch(error=>{
            setRegError(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-transparent">
                <div className="hero-content">
                    <div className="shadow-2xl bg-[#2c2c2c91] rounded-none text-white">
                        <form onSubmit={handleRegister} className="card-body">
                            <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered rounded-none text-black" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="photo" placeholder="Profile Photo URL" className="input input-bordered rounded-none text-black" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="email" className="input input-bordered rounded-none text-black" required />
                            </div>
                            <div className="form-control">
                                <input type="password" name="password" placeholder="password" className="input input-bordered rounded-none text-black" required />
                            </div>
                            <div className="form-control mt-2 text-sm">
                                <p>Already Have Account? <Link className="font-bold text-blue-500" to="/login">Login</Link></p>
                            </div>
                            <div>
                                <p className="text-red-500 text-lg">{regError}</p>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary bg-[#2c2c2c91] rounded-none text-white ">Register</button>
                            </div>
                            {/* Social Login */}
                            <div className="flex">
                                <div className="mx-auto">
                                    <button
                                        onClick={handleGoogleLogin}
                                        className="btn btn-primary bg-[#2c2c2c91] rounded-none text-white ">
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

export default Register;
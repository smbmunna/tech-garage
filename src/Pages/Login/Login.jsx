import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
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
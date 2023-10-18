import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
                            <div className="form-control">                                
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">                                
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">                                
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />                                
                            </div>
                            <div className="form-control mt-2 text-sm">
                                <p>Already Have Account? <Link className="font-bold text-blue-500" to="/login">Login</Link></p>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Register</button>
                            </div>                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
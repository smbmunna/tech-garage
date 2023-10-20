import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => console.log('user logged out'))
            .catch(error => { console.log(error.message) })
    }
    const links = <>
        <Link className="btn btn-primary bg-[#2c2c2c91] rounded-none text-white" to='/'>Home</Link>
        <Link className="btn btn-primary bg-[#2c2c2c91] rounded-none text-white" to='/login'>Login</Link>
        <Link className="btn btn-primary bg-[#2c2c2c91] rounded-none text-white" to='/register'>Register</Link>
        <Link className="btn btn-primary bg-[#2c2c2c91] rounded-none text-white" to='/brandEntry'>Brand Entry</Link>
        <Link className="btn btn-primary bg-[#2c2c2c91] rounded-none text-white" to='/addProduct'>Add Product</Link>
    </>

    return (
        <div className="navbar  bg-[#2c2c2c91] sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/'><img className="w-20" src="https://i.ibb.co/vLp2sMh/LOGO.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user &&
                    <>
                        <img className="w-10 mr-2" src={user?.photoURL} alt="" />
                        <span className="mr-2 text-white dark:text-black">{user?.displayName}</span>
                        <Link onClick={handleLogout} className="btn btn-primary bg-[#2c2c2c91] rounded-none text-white" to='/login'>Logout</Link>
                    </>
                }                
            </div>
        </div>
    );
};

export default Navbar;
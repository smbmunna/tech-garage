import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ProductContext } from "../../Providers/ProductProvider"

import { FiSun, FiMoon } from 'react-icons/fi';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const { handleThemeSwitch, theme } = useContext(ProductContext)

    const handleLogout = () => {
        logout()
            .then(() => console.log('user logged out'))
            .catch(error => { console.log(error.message) })
    }

    //handle switch
    const changeTheme = () => {
        handleThemeSwitch();
    }

    const links = <>
        <Link className="btn btn-primary bg-[#2c2c2c91] dark:bg-slate-300 dark:text-black dark:border-none rounded-none text-white" to='/'>Home</Link>
        {
            !user &&
            <>
                <Link className="btn btn-primary bg-[#2c2c2c91] dark:bg-slate-300 dark:text-black dark:border-none rounded-none text-white" to='/login'>Login</Link>
                <Link className="btn btn-primary bg-[#2c2c2c91] dark:bg-slate-300 dark:text-black dark:border-none rounded-none text-white" to='/register'>Register</Link>
            </>
        }
        <Link className="btn btn-primary bg-[#2c2c2cd0] dark:bg-slate-300 dark:text-black dark:border-none rounded-none text-white" to='/brandEntry'>Brand Entry</Link>
        <Link className="btn btn-primary bg-[#2c2c2c91] dark:bg-slate-300 dark:text-black dark:border-none rounded-none text-white" to='/addProduct'>Add Product</Link>
        <Link className="btn btn-primary bg-[#2c2c2c91] dark:bg-slate-300 dark:text-black dark:border-none rounded-none text-white" to='/myCart'>My Cart</Link>

    </>

    return (
        <div className="navbar  bg-black dark:bg-white  sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="White"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex gap-2 items-center">
                    <Link to='/'><img className="w-16 hidden md:block" src="https://i.ibb.co/bFR69mg/2.png" alt="" /></Link>
                    <Link to="/"><h2 className="text-base md:text-xl text-white dark:text-black font-bold">Tech Garage</h2></Link>                    
                </div>
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
                        <span className="mr-2 dark:text-black text-white">{user?.displayName}</span>
                        <Link onClick={handleLogout} className="btn btn-primary bg-[#2c2c2c91] dark:bg-slate-300 dark:text-black dark:border-none rounded-none text-white" to='/login'>Logout</Link>
                    </>
                }
                
                {
                    theme == "dark" ? <FiMoon className="cursor-pointer text-3xl mx-2 text-black" onClick={changeTheme} /> :
                        <FiSun className="cursor-pointer text-3xl mx-2 text-white" onClick={changeTheme} />
                }
            </div>
        </div>
    );
};

export default Navbar;
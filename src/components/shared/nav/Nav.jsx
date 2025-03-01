import { Link, NavLink } from "react-router-dom";
import userImg from "../../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";


const Nav = () => {

    const {user, logOut} = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to = '/'>Home</NavLink></li>
        <li><NavLink to = '/about'>About</NavLink></li>
        <li><NavLink to = '/career'>Career</NavLink></li>
    </>

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <div>
                    {user && <p>{user.email}</p> }
                </div>
                <img className="w-8" src={userImg} alt="" />
                { user ? 
                    <Link onClick={logOut} to = '/login' className="py-1 px-5 bg-gray-600 text-white font-bold">Log Out</Link>
                    :
                    <Link to = '/login' className="py-1 px-5 bg-gray-600 text-white font-bold">Login</Link>
                }
            </div>
        </div>
    );
};

export default Nav;
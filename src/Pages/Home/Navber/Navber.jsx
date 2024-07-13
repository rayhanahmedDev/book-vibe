import { NavLink } from "react-router-dom";
import './Navber.css'

const Navber = () => {

    const links = <>
        <li><NavLink className='mr-6' to='/'>Home</NavLink></li>
        <li><NavLink className='mr-6' to='/listed'>Listed Books</NavLink></li>
        <li><NavLink to='/pages'>Pages to Read</NavLink></li>
    </>
    return (
        <div className="navbar bg-white py-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>

                <h2 className="text-2xl font-bold">Book Vibe</h2>
            </div>
            <nav className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1">
                    {links}
                </ul>
            </nav>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div>
                <button className="mr-5 p-3 px-6 rounded-lg bg-[#23BE0A] text-white font-semibold">Sign In</button>
                <button className="p-3 px-6 rounded-lg bg-[#59C6D2] text-white font-semibold">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navber;
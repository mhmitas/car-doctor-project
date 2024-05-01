import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Navbar = () => {
    const routes = [
        { name: 'Home', path: '/', id: 1 },
        { name: 'Home', path: '/', id: 2 },
    ]
    const navItems = routes.map(route => <li key={route.id}><NavLink to={route.path}>{route.name}</NavLink></li>)

    const { user, loading } = useContext(AuthContext)

    function handleSignOut() {
        console.log('pore');
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Genius Car</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {loading ?
                    <span className="loading loading-ring loading-md"></span>
                    :
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                    <img alt={user?.displayName && user.displayName} src={user?.photoURL ? user.photoURL : "https://i.ibb.co/tY0hxsg/default-profile.jpg"}
                                    />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-sm w-52 ">
                                <li><Link to="/profile"><button>Profile</button></Link></li>
                                <li><button onClick={handleSignOut}>Sign out</button></li>
                            </ul>
                        </div>
                        :
                        <div>
                            <Link to="/sign-in">
                                <button className='btn btn-sm btn-outline border-none btn-ghost font-semibold text-primary'>Sign in</button>
                            </Link>
                            <Link to="/sign-up">
                                <button className='btn btn-sm btn-ghost btn-outline font-semibold text-primary'>Sign up</button>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;
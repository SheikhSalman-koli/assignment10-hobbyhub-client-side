import React, { use } from 'react';
import { NavLink } from 'react-router';
import './nav.css'
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import logo from '../../assets/hibby-logo.jpg'

const Nav = () => {

    const { user, logOut } = use(AuthContext)

    // console.log(user, logOut);
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire('user logged out successfully!')
            }).catch((error) => {
                toast.error(error.message)
            });
    }

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <img className='w-14 h-14 rounded-full ' src={logo} alt="" />
                </div>

                <div className="navbar-end">
                    <div className="hidden lg:flex items-center">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/allgroup'>All Groups</NavLink>
                        <NavLink to='/create'>Create Group</NavLink>
                        <NavLink to='/mygroup'>My Groups</NavLink>
                        {
                            user ? <>
                                <div className="tooltip" data-tip={user.displayName}>
                                    <img className='w-14 h-14 rounded-full mr-1' src={user.photoURL} alt="" />
                                </div>
                                <button onClick={handleLogout} className='text-[12px] font-bold'>logout</button>
                            </>
                                :
                                <>
                                    <NavLink to='/signin'>Login</NavLink>
                                    <NavLink to='/signup'>Register</NavLink>
                                </>
                        }

                    </div>
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            {user && <div className="tooltip" data-tip={user.displayName}>
                                <img className='w-10 h-10 rounded-full mr-1' src={user.photoURL} alt="" />
                            </div>}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 right-0 mt-3 w-52 p-0 shadow">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/allgroup'>All Groups</NavLink>
                            <NavLink to='/create'>Create Group</NavLink>
                            <NavLink to='/mygroup'>My Groups</NavLink>
                            {
                                user ? <>
                                   <button onClick={handleLogout} className='text-[12px] font-bold'>logout</button>
                                </>
                                    :
                                    <>
                                        <NavLink to='/signin'>Login</NavLink>
                                        <NavLink to='/signup'>Register</NavLink>
                                    </>
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nav;
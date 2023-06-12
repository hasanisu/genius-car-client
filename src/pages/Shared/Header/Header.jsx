import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const {user, logoutUser} = useContext(AuthContext);
    const menuItems = <>
    <li className='font-semibold'><Link to="/">Home</Link></li>
    <li className='font-semibold'><Link to="/login">Login</Link></li>
    </>

  const handleToLogout=()=>{
    logoutUser()
    .then(()=>{})
    .catch(e => console.error(e))
  }

    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">
        <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menuItems}
    </ul>
  </div>
  
  <div className="navbar-end">
  {
    user?.uid ?
    <>
    <img src={user.photoURL} alt="" className='w-10 rounded-full mr-6' />
    <button onClick={handleToLogout} className="btn btn-link text-orange-600 no-underline hover:underline">Logout</button>
    </>
    :
    <FaUserCircle className='w-10 h-10 mr-6 text-orange-600'/>
  }
  <button className="btn btn-outline btn-warning">Appointment</button>
  </div>
  
</div>
    );
};

export default Header;
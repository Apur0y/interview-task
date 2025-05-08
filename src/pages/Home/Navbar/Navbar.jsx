import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdNotificationsOutline, IoMdSearch } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';

const Navbar = () => {
    const links=(
        <div className='text-base flex'>
            <li><a>Home</a></li>
            <li><a>Leads</a></li>
            <li><a>Campaings</a></li>
            <li><a>Accounts</a></li>
            <li><a>Task</a></li>
            <li><a>Deals</a></li>
        </div>
    )
    return (
        <div className=''>
            <div className="navbar bg-black shadow-sm md:px-14">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-lg">CRM</a>
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  </div>
  <div className="navbar-center hidden lg:flex">
   
    <input type="text" placeholder={` Search CRM`}  className='bg-white p-2 text-gray-900 rounded-lg w-72 ml-32' />
  </div>
  <div className="navbar-end">
    <div className='flex gap-5 mr-6'>
    <FaPhoneAlt className='size-5 my-auto' />
    <IoSettingsOutline className='size-6'/>
    <IoMdNotificationsOutline className='size-6' />
    </div>

    <div className='flex justify-center items-center'>
    <img src="" alt="" className='h-10 w-10 bg-white rounded-full mr-3' />
    <h1>Course Hunter</h1>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Navbar;
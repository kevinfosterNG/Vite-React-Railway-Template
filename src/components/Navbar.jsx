import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-neutral-600 text-neutral-content">
      <ul className="menu menu-horizontal p-0">
        <li className=""><Link to="/" className='btn btn-ghost normal-case '>Clinics</Link></li>
        <li className=""><Link to="/Markets" className='btn btn-ghost normal-case text-sm'>Markets</Link></li>
        <li className=""><Link to="/Call_Routes" className='btn btn-ghost normal-case text-sm'>Call Routes</Link></li>
        <li className=""><Link to="/Brands" className='btn btn-ghost normal-case text-sm'>Brands</Link></li>
        <li className=""><Link to="/Users" className='btn btn-ghost normal-case text-sm'>Users</Link></li>
      </ul>

      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="" alt="profile"  />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
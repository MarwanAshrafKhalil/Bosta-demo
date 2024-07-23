import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bosta-en.png';

export default function Navbar() {
  return (
    <div id="navbar" className="navbar bg-white border-b-2  ">
      <div className=" flex-1 justify-center text-xl font-bold lg:justify-between mx-5 gap-16 xl:mx-16">
        <div className=" items-center">
          <Link to="/" className="btn btn-ghost text-xl">
            <img src={logo} alt="logo" className="object-contain w-28  " />
          </Link>
        </div>

        <ul className=" hidden lg:flex px-1 text-xl sm:gap-10">
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/">Pricing</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
        <ul className=" flex flex-row px-1 shrink text-lg sm:text-xl gap-2 sm:gap-10">
          <li>
            <Link to="/track/1">Track Shipment</Link>
          </li>
          <li>
            <Link to="/" className="hidden sm:block">
              Sign In
            </Link>
          </li>
          <button>ENG</button>
        </ul>
      </div>
    </div>
  );
}

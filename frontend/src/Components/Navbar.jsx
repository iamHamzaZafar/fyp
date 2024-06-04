import React, { useState } from 'react';
import { IoLogoPolymer } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="bg-blue-400">
        <div className="flex justify-between items-center h-[70px] w-[80%] mx-auto">
          <div>
            <IoLogoPolymer size={50} style={{ cursor: "pointer" }} />
          </div>
          <div className="hidden md:flex">
            <ul className="flex font-bold cursor-pointer">
              <li className="px-4 hover:text-blue-700">
              <Link to="/">Home</Link>
              </li>
              <li className="px-4 hover:text-blue-700">
              <Link to="/projectideas">Fyp-Ideas</Link>

              </li>
              <li className="px-4 hover:text-blue-700">
              <Link to="/">About</Link>

              </li>
              <li className="px-4 hover:text-blue-700">
              <Link to="/">Documentation</Link>

              </li>
             
              <li className="px-4 hover:text-blue-700">
              <Link to="/login">Login</Link>

              </li>
            </ul>
          </div>
          <div className="md:hidden" onClick={handleNav}>
            {!nav ? <GiHamburgerMenu size={30} /> : <AiOutlineClose size={30} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          nav ? 'block' : 'hidden'
        } md:hidden bg-blue-400 absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center`}
      >
        <ul className="text-center">
          <li className="py-6 text-2xl hover:text-blue-700">Home</li>
          <li className="py-6 text-2xl hover:text-blue-700">About</li>
          <li className="py-6 text-2xl hover:text-blue-700">Fyp-Ideas</li>
          <li className="py-6 text-2xl hover:text-blue-700">Login</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

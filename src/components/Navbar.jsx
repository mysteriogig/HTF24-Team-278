import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gradient-to-b from-gray-800 to-gray-900 p-4 shadow-md flex justify-between items-center">
    <div className="text-white font-bold text-xl">
      D-Voting
    </div>
    <ul className="flex space-x-6 text-white mx-auto">
      <li>
        <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
      </li>
      <li>
        <Link to="/register" className="hover:text-gray-200 transition duration-300">Register</Link>
      </li>
      <li>
        <Link to="/vote" className="hover:text-gray-200 transition duration-300">Vote</Link>
      </li>
      <li>
        <Link to="/results" className="hover:text-gray-200 transition duration-300">Results</Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-gray-200 transition duration-300">Contact Us</Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-gray-200 transition duration-300">About</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

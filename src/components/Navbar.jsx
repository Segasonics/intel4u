import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-opacity-50 bg-black text-white py-6 font-sans z-50">
      <div className="container mx-auto flex justify-between items-center px-8">
        {/* Logo */}
        <Link to={'/'} className="text-2xl font-semibold">InTeL4U</Link>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-white text-3xl" />
          ) : (
            <FaBars className="text-white text-3xl" />
          )}
        </div>

        {/* Desktop Navbar Links */}
        <ul className="md:flex space-x-8 hidden">
          <li><Link to="/" className="hover:text-gray-300">HOME</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">ABOUT US</Link></li>
          <li><Link to="/howitworks" className="hover:text-gray-300">HOW IT WORKS</Link></li>
          <li><Link to="/services" className="hover:text-gray-300">SERVICES</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">CONTACT US</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-100 flex flex-col justify-center items-center space-y-6 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0 overflow-y-auto' : 'translate-x-full'
        }`}
      >
        <ul className="text-xl text-white space-y-6">
          <li><Link to="/" onClick={closeMenu} className="hover:text-gray-300">HOME</Link></li>
          <li><Link to="/about" onClick={closeMenu} className="hover:text-gray-300">ABOUT US</Link></li>
          <li><Link to="/howitworks" onClick={closeMenu} className="hover:text-gray-300">HOW IT WORKS</Link></li>
          <li><Link to="/services" onClick={closeMenu} className="hover:text-gray-300">SERVICES</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className="hover:text-gray-300">CONTACT US</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

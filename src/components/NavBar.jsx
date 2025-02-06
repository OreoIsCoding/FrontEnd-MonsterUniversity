import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Monsters-University-Logo.png';
import ConfirmModal from './ConfirmModal';

const NavBar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/');
  };

  return (
    <>
      <nav className="w-full bg-gradient-to-r from-blue-950 to-blue-950 py-4 drop-shadow-2xl">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Left Section: Logo and Title */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Monsters University"
              className="w-[6rem] h-[48px] shadow-lg rounded-full transform transition duration-500 hover:scale-105"
            />
            <div className="text-white text-3xl sm:logo-text font-semibold tracking-wide ">
              <Link
                to="/"
                className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Monsters University
              </Link>
            </div>
          </div>

          {/* Right Section: User Greeting and Logout Button */}
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-white text-lg font-medium">Welcome, Monster</span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 shadow-md transform hover:scale-105"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button className="text-white text-2xl" onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}>
              &#9776; {/* Hamburger Icon */}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="md:hidden hidden bg-gray-500 opacity-90 p-4">
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/"
              className="text-white text-xl font-medium hover:text-gray-300 transition duration-300 ease-in-out z-90"
              onClick={() => document.getElementById('mobile-menu').classList.add('hidden')}
            >
              Home
            </Link>

            <div className=''>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  document.getElementById('mobile-menu').classList.add('hidden');
                }}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 shadow-md transform hover:scale-105"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <ConfirmModal
        isOpen={isModalOpen}
        title="Confirm Logout"
        message="Are you sure you want to logout?"
        onConfirm={handleLogout}
        onCancel={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default NavBar;

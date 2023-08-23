import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MobileNavbar } from './MobileNavbar';

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className='overflow-hidden'>
      {isMobileView && <MobileNavbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />}
      {!isMobileView && (
        <nav className='md:flex flex-col items-center p-6 md:flex-row md:justify-between'>
          <h1 className='text-4xl text-white font-bold mb-2 md:mb-0' style={{ textShadow: '0 0 15px skyblue' }}>
            MyPortfolio
          </h1>
          <ul className='flex items-center space-x-6'>
            <li className='text-white hover:text-pink-500 font-semibold text-xl'>
              <Link to='/'>Home</Link>
            </li>
            <li className='text-white hover:text-pink-500 font-semibold text-xl'>
              <Link to='/about'>About</Link>
            </li>
            <li className='text-white hover:text-pink-500 font-semibold text-xl'>
              <Link to='/myskills'>Skills</Link>
            </li>
            <li className='text-white hover:text-pink-500 font-semibold text-xl'>
              <Link to='/projects'>Projects</Link>
            </li>
            <li className='text-white hover:text-pink-500 ml-20 font-semibold text-xl'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};


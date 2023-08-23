import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export const MobileNavbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    return (
        <div className='md:hidden flex justify-between items-center p-6'>
        <h1 className='text-2xl text-white font-bold' style={{ textShadow: '0 0 15px skyblue' }}>
          MyPortfolio
        </h1>
        <button onClick={toggleSidebar} className='text-white hover:text-pink-500'>
          {isSidebarOpen ? (
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          )}
        </button>
        {isSidebarOpen && (
          <div className='fixed top-0 right-0 h-full w-1/2 bg-gradient-to-t from-pink-400 via-orange-300 to-blue-500 transform transition-transform duration-300 ease-in-out translate-x-0'>
            <button onClick={toggleSidebar} className='text-white font-bold hover:text-pink-500 hover:underline p-4 text-2xl absolute top-0 right-0'>
              &times;
            </button>
            <ul className='pt-6 px-6'>
              <li className='text-white font-bold hover:text-pink-500 hover:underline mb-4' style={{textShadow: '0 0 15px lightblue'}}>
                <Link to='/' onClick={toggleSidebar}>
                  Home
                </Link>
              </li>
              <li className='text-white font-bold hover:text-pink-500 hover:underline mb-4' style={{textShadow: '0 0 15px lightblue'}}>
                <Link to='/about' onClick={toggleSidebar}>
                  About
                </Link>
              </li>
              <li className='text-white font-bold hover:text-pink-500 hover:underline mb-4'style={{textShadow: '0 0 15px lightblue'}} >
                <Link to='/myskills' onClick={toggleSidebar}>
                  My Skills
                </Link>
              </li>
              <li className='text-white font-bold hover:text-pink-500 hover:underline mb-4' style={{textShadow: '0 0 15px lightblue'}}>
                <Link to='/projects' onClick={toggleSidebar}>
                  Projects
                </Link>
              </li>
              <li className='text-white font-bold  hover:text-pink-500 hover:underline' style={{textShadow: '0 0 15px lightblue'}}>
                <Link to='/contact' onClick={toggleSidebar}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  };
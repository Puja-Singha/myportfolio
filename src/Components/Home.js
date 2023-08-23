import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Image1 from './Images/Image1.jpeg'
import { Navbar } from './Navbar';


export const Home = (props) => {

  const emailAddress = 'pujasinghaapr99@gmail.com';

  return (
     <div className='min-h-screen bg-gradient-to-b from-blue-950 via-blue-800 to-pink-400'>
      <Navbar/>
     
      <main className='overflow-hidden'>
      <div className='flex flex-col md:flex-row md:py-32 md:px-60 mx-6 mt-4'>
          <div className='md:w-full'>
            <h1 className='text-white md:text-6xl text-3xl font-bold' style={{ textShadow: '0 0 15px yellow' }}>Hello Everyone!</h1>
            <p className='text-yellow-300 my-6'>I'm Puja Singha, a passionate Frontend Developer based in Guwahati, Assam. With a background in Commerce and a deep love for technology, I've embarked on an exciting journey of web development and design. Through my experiences and projects, I'm here to showcase my skills and growth in the world of coding and creativity.</p>
            <div className='flex mt-2'>
              <Link to='/contact' className='text-white text-lg  font-bold w-1/2  hover:text-pink-500' style={{textShadow: '0 0 15px yellow'}}>Let's Connect! 
            </Link>
          </div>
            <div className="flex space-x-4 mt-5">
              <Link to="https://github.com/Puja-Singha" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="text-white hover:text-pink-500 cursor-pointer" />
              </Link>
              <Link to="https://www.linkedin.com/in/puja-singha-881134171" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="text-white hover:text-pink-500 cursor-pointer" />
              </Link>
              <Link to={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer" >
                <MdEmail size={30} className="text-white hover:text-pink-500 cursor-pointer" />
              </Link>
            </div>
           
          </div>
          <div className='md:w-1/2 md:flex md:ml-44 mt-12 mb-10 ml-11'>
            <img src={Image1} alt='Image1' className='md:w-96 md:h-96 w-60 h-56 md:rounded-full rounded-full border' style={{boxShadow:'0 0 20px white'}} loading="lazy"/>
          </div>
          
        </div>
      </main>
    </div>
  );
};

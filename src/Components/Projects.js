import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import Project1 from './Images/wikiproappImage.png';
import Project2 from './Images/wkipro2.png';
import Project3 from './Images/wikipro3.png';
import Project4 from './Images/wikipro4.png';
import DigitalDiary1 from './Images/digitalDiaryappimage.png';
import DigitalDiary2 from './Images/DigitalDiary2.png';
import DigitalDiary3 from './Images/digitaldiary3.png';

export const Projects = () => {
  return (
    <div className='overflow-hidden min-h-screen bg-gradient-to-b from-blue-800 via-orange-200 to-orange-500'>
    <Navbar />
    <main className='container mx-auto p-4'>
      <div className='text-center'>
        <h1 className='text-white md:text-4xl text-2xl font-bold' style={{ textShadow: '0 0 30px orange' }}>My Projects</h1>
        <p className='text-white my-3 ml-3 text-sm'>Throughout my journey, I've transformed my passion for coding into practical projects that showcase my abilities. Some of these projects include:</p>
      </div>
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4'>
          <div className='md:bg-gradient-to-b md:from-blue-700 md:via-orange-100 md:to-orange-300  bg-white rounded-lg shadow-md p-4 md:flex-1'>
          <h1 className='text-pink-600 text-4xl font-bold mb-4 mt-4 text-center' style={{ textShadow: '0 0 15px lightblue' }}>WikiPro</h1>
            <div className="grid grid-cols-2 gap-2">
              <img src={Project1} alt='Project 1' className='w-full h-full' loading="lazy"/>
              <img src={Project2} alt='Project 2' className='w-full h-full' loading="lazy"/>
              <img src={Project3} alt='Project 3' className='w-full h-full' loading="lazy"/>
              <img src={Project4} alt='Project 4' className='w-full h-full' loading="lazy"/>
            </div>
          </div>

          <div className='md:bg-gradient-to-b md:from-blue-700 md:via-orange-100 md:to-orange-300 rounded-lg shadow-md p-4 md:flex-1 bg-white'>
            <h1 className='md:text-white  text-pink-600 text-3xl font-bold' style={{ textShadow: '0 0 15px lightblue' }}>ABOUT</h1>
            <Link to='https://wikipro.vercel.app' className='text-yellow-500 font-bold text-lg mt-2'>wikipro.vercel.app</Link>
            <p className='text-black font-medium text-lg mt-6'>WikiPro is a website which has been created by utilizing IMDB API. This website serves as a platform where users can access information about various TV shows and movies. It provides details about the latest releases, trending titles, and trending TV shows and movies. Additionally, users can also find information about actors on this website. Essentially, WikiPro offers a comprehensive database of information related to the entertainment industry, making it a valuable resource for individuals seeking information about TV shows, movies, and actors.</p>
            <p className='text-red-600 text-lg mt-10'><strong className='text-blue-700 font-bold'>Skills:</strong> Microsoft Visual Studio Code · React.js · Tailwind CSS · JavaScript · Cascading Style Sheets (CSS) · HTML5</p>
            <div className='mt-5 mb-4'>
              <Link to='https://github.com/Puja-Singha' target='_blank' className='md:text-blue-700 bg-blue-700 text-white md:bg-white text-sm p-2 mt-8 rounded-xl font-bold '>More info on Github</Link>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-10'>
          <div className='md:bg-gradient-to-b md:from-orange-300 md:to-orange-500 rounded-lg shadow-md p-4 md:flex-1 md:w-1/2 md:h-1/2 bg-white'>
          <h1 className='md:text-white text-4xl font-bold mb-4 mt-4 text-center text-yellow-500' style={{ textShadow: '0 0 15px lightblue' }}>DigitalDiary</h1>
            <div className="grid grid-cols-2 gap-2">
              <img src={DigitalDiary1} alt='Project 1' className='w-full h-full' loading="lazy"/>
              <img src={DigitalDiary2} alt='Project 2' className='w-full h-full' loading="lazy"/>
              <img src={DigitalDiary3} alt='Project 3' className='w-full h-full' loading="lazy"/>
            </div>
          </div>

          <div className='md:bg-gradient-to-b md:from-orange-300 md:to-orange-500 rounded-lg shadow-md p-4 md:flex-1 bg-white'>
            <h1 className='md:text-white text-3xl font-bold text-yellow-500' style={{ textShadow: '0 0 15px lightblue' }}>ABOUT</h1>
            <Link to='https://digital-diary-sigma.vercel.app' className='text-red-500 font-bold text-lg mt-2'>digital-diary-sigma.vercel.app</Link>
            <p className='md:text-white text-black text-lg font-medium mt-6'>DigitalDiary is a diary/journaling website which has been developed using a REST API. This website serves as a platform where users can maintain a digital diary or journal. It allows users to maintain their daily entries in a manner that suits their preferences and needs. By utilizing REST API, DigitalDiary ensures seamless communication and interaction between the client (the user) and the server (the website).</p>
            <p className='text-red-600 text-lg mt-10'><strong className='text-blue-700 font-bold'>Skills:</strong>  REST APIs · Microsoft Visual Studio Code · React.js · Bootstrap · JavaScript · Cascading Style Sheets (CSS) · HTML5</p>
            <div className='mt-5 mb-4'>
              <Link to='https://github.com/Puja-Singha' target='_blank' className='md:text-blue-700 bg-blue-700 text-white md:bg-white text-sm p-2 mt-8 rounded-xl font-bold'>More info on Github</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
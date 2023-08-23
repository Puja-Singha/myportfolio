import React from 'react';
import Image3 from './Images/Image3.jpeg'
import { Navbar } from './Navbar';

export const About = (props) => {
  return (
    <div className='overflow-hidden min-h-screen bg-gradient-to-b from-black via-blue-800 to-blue-500'>
      <Navbar/>
      <main className='overflow-hidden'>    
      <div className='flex flex-col md:flex-row md:py-14 md:px-44'>
          <div className='md:w-1/2'>
            <h1 className='text-red-400 text-4xl font-bold ml-4' >About <span className='text-yellow-400' >Me</span></h1>
            <p className='text-white my-3 ml-3'><strong>Hi there, my name is Puja Singha</strong></p>
            <div className=' rounded-sm border-white w-full'>
             <p className='text-white mx-2 my-2 '><strong className='text-yellow-500'>Born and Brought Up in Guwahati, Assam</strong><br></br> I spent my formative years in the vibrant city of Guwahati, Assam. As a diligent student, I pursued my schooling at Kendriya Vidyalaya Sangathan, where I laid the foundation for my academic journey.
            </p><br></br>
            <p className='text-white mx-2'><strong>Education</strong><br></br><strong className='text-yellow-500'>
              Dedication and Achievement</strong><br></br>My commitment to education culminated in my Higher Secondary School Certificate (HSSC) graduation, where I secured an impressive 82.6% in the Commerce stream. This achievement propelled me to pursue a Bachelor of Commerce with a major in Business Management. During my college years, I honed my skills in business while nurturing a newfound passion for technology and development.</p><br></br>
              <p className='text-white mx-2 mb-4'><strong>Journey to Web Development</strong><br></br><strong className='text-yellow-500'>From MBA Aspirant to Frontend Enthusiast</strong><br></br><strong className='text-pink-500 '>MBA Aspiration:</strong>  My ambition initially led me towards the path of an MBA. Despite diligent preparation, my entrance examinations didn't go as planned. This setback prompted me to reassess my goals and explore new avenues.<br></br><strong className='text-pink-500'>Web Development Spark:</strong>  A newfound interest in web development soon captured my attention. What began as curiosity evolved into a deep understanding of frontend development. As I delved into JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, and React JS, I found myself embracing the world of code.<br></br><strong className='text-pink-500 '>Projects:</strong>  During my learning journey, I embarked on numerous projects that allowed me to refine my skills. I honed my proficiency in coding languages, tools like Git and VS Code, and frameworks such as React JS. My ongoing pursuit of knowledge now includes diving into the realm of Redux.</p><br></br>
              <div className='md:hidden  md:w-1/2 mb-6  md:flex-col md:ml-16 md:mt-10'>
            <img src={Image3} alt='Image3' className=' w-1/2 h-1/2 md:w-full md:h-full md:border-2 md:border-black md:rounded-xl ml-20 rounded-lg' style={{ boxShadow: "0 0 20px white" }} loading="lazy"/>
              </div>
              <p className='text-white mx-2'><strong>Achievements and Extracurriculars</strong><br></br><strong className='text-yellow-500'>National Youth Parliament</strong><br></br>Reflecting my active engagement during school days, I participated in the National Youth Parliament organized by the Ministry of Parliamentary Affairs and emerged victorious. This experience instilled in me the power of effective communication and leadership.<br></br>
              <strong className='text-yellow-500'>Digital Marketing Proficiency</strong><br></br>Eager to expand my skill set, I enrolled in Google's "The Fundamentals of Digital Marketing" course during my college years. This exposure equipped me with valuable insights into the digital landscape.</p><br></br>
             
            </div>
            </div>
            <div className='md:w-1/2 md:flex  md:flex-col  md:mt-10'>
            <img src={Image3} alt='Image3' className='hidden md:block w-1/2 h-1/2 md:w-full md:h-full md:border-2 md:border-black md:rounded-xl ml-20 rounded-lg md:ml-2' style={{ boxShadow: "0 0 20px white" }} loading="lazy"/>
            <div className='md:mt-8 mt-2'>
              <p className='text-white mx-2'><strong>Professional Experience</strong><br></br><strong className='text-yellow-500'>Sales Internship</strong><br></br>Seeking a broader perspective, I undertook two sales internships. These experiences enabled me to develop interpersonal skills and a business-oriented mindset.</p><br></br>
              <p className='text-white mx-2 mb-8'><strong>Continuous Learning</strong><br></br>
              <strong className='text-yellow-500'>Responsive Web Design</strong><br></br>My journey began with a free course on Responsive Web Design from FreeCodeCamp. This immersive learning experience laid the groundwork for my growth in the world of web development.</p>
            </div>
          </div>
          
          </div>
      </main>
    </div>
  )
}

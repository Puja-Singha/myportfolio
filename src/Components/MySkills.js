import React from 'react';
import { Navbar } from './Navbar';
import { SkillCard } from './SkillCard';
import Image2 from './Images/Image2.png';
import HTML from './Images/html-5.png';
import CSS from './Images/CSS.png';
import TAILWINDCSS from './Images/Tailwind CSS.png';
import Bootstrap from './Images/Bootstrap.png';
import reactjs from './Images/reactjs.png';
import Github from './Images/github.png';
import VSCode from './Images/VSCode.png';



export const MySkills = () => {
    const skills = [
       {
        skillName: 'JAVASCRIPT',
        imageUrl:Image2,
       },
      {
        skillName: 'HTML',
        imageUrl: HTML,
      },
      {
        skillName: 'CSS',
        imageUrl: CSS,
       
      },
      {
        skillName: 'TAILWIND CSS',
        imageUrl:TAILWINDCSS,
      },
      {
        skillName: 'REACT JS',
        imageUrl:reactjs,
      },
      {
        skillName: 'BOOTSRTAP',
        imageUrl:Bootstrap,
      },
      {
        skillName: 'GITHUB',
        imageUrl:Github,
      },
      {
        skillName: 'VS CODE',
        imageUrl:VSCode,
       },
          
      ];

      const containerStyle = {
        maxWidth: '600px', 
        margin: '0 auto', 
      };
     

  return (
    <div className='overflow-hidden min-h-screen bg-gradient-to-b from-black via-purple-950 to-purple-700'>
      <Navbar/>
      <main>
        <div className='flex flex-col md:flex-row '>
        <div className='md:w-full text-center'>
            <h1 className='text-white md:text-4xl text-2xl font-bold' style={{textShadow: '0 0 20px purple' }}>My Skills</h1>
            <p className='text-white my-3 ml-3 text-sm'>Languages, Frameworks and Tools: JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, React JS, Git, VS code</p>
            </div>
         </div>
         <div className='flex flex-wrap justify-center' style={containerStyle}>
          {skills.map((skill, index) => (
            <SkillCard key={index} imageUrl={skill.imageUrl} skillName={skill.skillName} />
          ))}
        </div>
      </main>
    </div>
  )
}

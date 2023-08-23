import React from 'react';

export   const SkillCard = ({ imageUrl, skillName }) => {
  return (
        <div className="bg-gradient-to-b from-black via-purple-950 to-purple-600  rounded-md shadow-white mx-6 my-6 md:w-32 md:h-48 pt-2"   style={{boxShadow: '0 0 10px white', }}>
          <img src={imageUrl} alt={skillName} className="md:w-28 md:h-32  w-24 h-20 mx-auto mb-3" loading="lazy"/>
          <p className="text-start text-white mx-2">{skillName}</p></div>
         


      );
}

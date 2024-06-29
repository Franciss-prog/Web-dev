import React from 'react';
import Techstack from './Techstack';

const About = () => {
  return (
    <>
      {/* my name */}
      <div className='flex flex-col gap-4 items-start'>
        <span className='text-8xl font-bold'>
          Welcome! I’m Francis
        </span>
        <p className='w-[1000px] text-justify text-2xl  pl-5'>
          a freelancer specializing in minimalist portfolio websites.
          With over years of experience, I deliver high-quality work
          for startups and established businesses. In my free time, 
          I enjoy exercising, coding, and cycling. Thank you for visiting my portfolio.
          I look forward to collaborating with you!
        </p>
      </div>
      <div className='pl-5 mt-6 flex flex-col gap-3 '>
        {/* sub header */}
        <span className='text-5xl font-bold'>Technologies used: </span>
        {/* tech */}
        <div className='flex gap-4 items-center'>
          <Techstack/>
        </div>
      </div> 
    </>
  );
}

export default About;

"use client"
import React, {useState} from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { handleNextClick, handlePrevClick } from '../utils/cardNavigation';
import Link from 'next/link';
const Carousel = () => {

    // prjects
    const projects = [
        {title: "Login Register Authentication", description: "I developed a secure, user-friendly authentication system using Next.js and Tailwind CSS, powered by a scalable serverless API with Database.", url: "https://next-login-authentication.vercel.app/"},
        {title: "To do List", description: "asdfasdfas", url: ""},
        {title: "Portfolio", description: "adfasdfasdf", url: ""},
    ]

    
    // index manager
    const [currentIndex, setCurrentIndex] = useState(0);

    

  return (
    <>
    <div className="flex items-center justify-center space-x-[40px]">
     {/* Left arrow */}
      <button 
        onClick={() => handlePrevClick(currentIndex ,setCurrentIndex, projects)} 
        className='relative transition-transform duration-300 hover:-translate-x-2'
      >
        <IoIosArrowDropleft size={50} />
      </button>

      {/* Cards and dots */}
      <div className="flex flex-col items-center">
        {/* Card */}
        <div className="border border-black  w-[700px] h-[350px] rounded-3xl flex flex-col justify-center items-start p-10 gap-6" id='card'>
          <div>
            <span className="text-3xl font-bold">{projects[currentIndex].title}</span>
            <p className="mt-2 text-xl text-justify">{projects[currentIndex].description}</p>
          </div>
          <div>
            <Link href={projects[currentIndex].url} className='bg-[#28282B] text-white px-7 py-3' target='_blank'> Live Demo</Link>
          </div>
        </div>

        {/* Dots */}
        <div className="flex mt-4 space-x-2">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-gray-400'}  transition-all duration-500`}
              id='dot'/>
          ))}
        </div>
      </div>

      {/* Right arrow */}
        <button 
          onClick={() => handleNextClick(currentIndex ,setCurrentIndex, projects)} 
          className='relative transition-transform duration-300 hover:translate-x-2'
        >
          <IoIosArrowDropright size={50} />
        </button>
    </div>
    </>

  )
}

export default Carousel
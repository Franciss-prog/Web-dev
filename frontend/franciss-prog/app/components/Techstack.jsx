import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaLinux, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si'
const Techstack = () => {
  return (
    <>
        <div className="tooltip">
          <FaHtml5 className='text-4xl' />
          <span className="tooltiptext">HTML5</span>
        </div>
        <div className="tooltip">
          <FaCss3 className='text-4xl' />
          <span className="tooltiptext">CSS3</span>
        </div>
        <div className="tooltip">
          <RiTailwindCssFill className='text-4xl' />
          <span className="tooltiptext">Tailwindcss</span>
        </div>
        <div className="tooltip">
          <IoLogoJavascript className='text-4xl' />
          <span className="tooltiptext">JavaScript</span>
        </div>
        <div className="tooltip">
          <FaReact className='text-4xl' />
          <span className="tooltiptext">React</span>
        </div>
        <div className="tooltip">
          <RiNextjsFill className='text-4xl' />
          <span className="tooltiptext">Next.js</span>
        </div>
        <div className="tooltip">
          <FaNodeJs className='text-4xl' />
          <span className="tooltiptext">Node.js</span>
        </div>
        <div className="tooltip">
          <SiExpress className='text-4xl' />
          <span className="tooltiptext">Express</span>
        </div>
        <div className="tooltip">
          <SiMongodb className='text-4xl' />
          <span className="tooltiptext">MongoDB</span>
        </div>
        <div className="tooltip">
          <FaLinux className='text-4xl' />
          <span className="tooltiptext">Linux</span>
        </div>
        <div className="tooltip">
          <FaGitAlt className='text-4xl' />
          <span className="tooltiptext">Git</span>
        </div>
    </>
  )
}

export default Techstack
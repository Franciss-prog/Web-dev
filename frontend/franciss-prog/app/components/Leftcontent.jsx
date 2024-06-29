import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import Link from 'next/link';
import { FaDiscord, FaInstagram, FaGithub,FaLinkedin } from "react-icons/fa";


const Leftcontent = () => {
  return (
    <div className='flex flex-col gap-5 text-center items-center'>
        {/* profile */}
        <div >
            <FaRegUserCircle className='text-[140px] '/>
        </div>

        {/* name */}
        <div>
            <span className='text-4xl cursor-default'>Franciss-prog</span>
        </div>

        {/* link accounts */}
        <div className='flex gap-5 text-3xl'>
            <Link href={"#"}>
                <FaDiscord/>
            </Link>
            <Link href={"https://github.com/Franciss-prog/Franciss-prog"} target='_blank'>
                <FaGithub/>
            </Link>
            <Link href={"#"}>
                <FaInstagram/>
            </Link>
            <Link href={"https://www.linkedin.com/in/francis-gil-abarintos-9b6788315/"} target='_blank'>
                <FaLinkedin/>
            </Link>
        </div>
    </div>
  )
}

export default Leftcontent
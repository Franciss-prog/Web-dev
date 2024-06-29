"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LuMoonStar, LuSun } from "react-icons/lu";
import { onDark } from '../utils/onDark';
import { VscListSelection } from "react-icons/vsc";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  return (
    <nav className='h-20 max-w-full flex justify-between mx-auto my-0 items-center text-2xl mt-[100px] max-xl:max-w-5xl'>
      <span className='hidden max-xl:block max-xl:text-2xl'>Franciss Prog</span>
      <ul className='flex justify-center items-center w-full h-20 gap-[200px] max-xl:gap-[150px] max-lg:hidden max-md:gap-[100px]'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <button onClick={() => onDark(setDark, dark)}>
          {dark ? <LuSun className='text-2xl' id="toggleDark"/> : <LuMoonStar className='text-2xl'/>}
        </button>
      </ul>
      {/* toggle nav */}
      <button>
        <VscListSelection className='text-2xl hidden max-lg:block'/>
      </button>
    </nav>
  );
};

export default Navbar;

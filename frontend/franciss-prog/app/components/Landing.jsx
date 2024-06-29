import React from 'react'

const Landing = () => {
  return (
   <main className='flex  items-center justify-start min-h-[60vh] gap-0 '>
      <div className='flex flex-col gap-1 text-left pl-10 max-lg:pl-0'>
            <span className='text-[250px] leading-none 
            max-xl:text-[200px] max-lg:text-[150px] max-md:text-[100px] 
            max-sm:text-[60px] cursor-default'>
              Fullstack
            </span>
            <span className='text-[100px] leading-none max-md:text-[80px] max-sm:text-[50px] cursor-default'>Developer.</span>
            <button className='w-[170px] p-2 border border-black border-1 mt-3' id='toggleBtn'>Download CV</button>
      </div>
   </main>
  )
}

export default Landing
"use client"
import React from 'react'
import Leftcontent from '../components/Leftcontent'

const Leftcontainer = () => {

  return (
   <div className={`border border-1 border-black w-[400px] h-[90vh] rounded-3xl grid place-items-center max-xl:hidden`} id='leftcontainer'>
        <Leftcontent/>
   </div>
  )
}

export default Leftcontainer
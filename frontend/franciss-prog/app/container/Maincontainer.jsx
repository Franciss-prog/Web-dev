import React from 'react'

const Maincontainer = ({children}) => {
  return (
    <div className='border border-1 border-black w-full rounded-3xl h-[90vh] max-xl:border-none max-xl:pl-16' id='maincontainer'>
      {children}
    </div>
  )
}

export default Maincontainer
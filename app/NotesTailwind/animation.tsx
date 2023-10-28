import React from 'react'

const Animation = () => {
  return (
    <>
    <div className='flex'>
    <div className='peer/test group/name grid place-items-center h-20 w-20 bg-blue-400 hover:bg-purple-400 transition-colors duration-300 ease-in-out delay-300'>
        <div className='h-5 w-5 bg-black group-hover/name:bg-red-600 transition-colors duration-300 ease-in-out delay-300'></div>
        <div className='h-5 w-5 bg-black group-hover/name:bg-red-600 transition-colors duration-300 ease-in-out delay-300'></div>
    </div>
    <div className='h-20 w-20 bg-green-400 peer-hover/test:bg-orange-500 transition-colors duration-300 ease-in-out delay-300'></div>
    <div className='animate-spin'>Animation</div>
    <div className='animate-ping'>Animation</div>
    <div className='animate-pulse'>Animation</div>
    <div className='animate-bounce'>Animation</div>
    </div>
    </>
  )
}

export default Animation
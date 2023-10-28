import React from 'react'

const Responsive = () => {
  return (
    <div className='grid grid-cols-2 gap-10 p-5 tablet:grid-cols-3 laptop:grid-cols-4'>
        <div className='w-full aspect-video bg-purple-400'></div>
        <div className='w-full aspect-video bg-purple-400'></div>
        <div className='w-full aspect-video bg-purple-400'></div>
        <div className='w-full aspect-video bg-purple-400'></div>
        <div className='w-full aspect-video bg-purple-400'></div>
        <div className='w-full aspect-video bg-purple-400'></div>
    </div>
  )
}

export default Responsive
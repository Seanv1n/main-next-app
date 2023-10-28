import React from 'react'

const PeerAndGroup = () => {
  return (
    <>
    <div className='flex'>
    <div className='peer/test group/name grid place-items-center h-20 w-20 bg-blue-400 hover:bg-purple-400'>
        <div className='h-5 w-5 bg-black group-hover/name:bg-red-600'></div>
        <div className='h-5 w-5 bg-black group-hover/name:bg-red-600'></div>
    </div>
    <div className='h-20 w-20 bg-green-400 peer-hover/test:bg-orange-500'></div>
    <div>PEER and GROUP</div>
    </div>
    </>
  )
}

export default PeerAndGroup 
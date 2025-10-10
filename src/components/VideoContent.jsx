import React from 'react'

const VideoContent = ({title,overview}) => {
  
  return (
    <div className='w-full text-white text-capitalize pt-48 px-10'>
    <h1 className='text-4xl text-bold'>{title}</h1>
    <p className='w-[20rem] py-4'>{overview}<span> ...</span></p>
    <div className='flex items-col gap-5'>
      <button className='bg-transparent border px-4 py-2 text-xl rounded-md'>PLAY</button>
      <button className='bg-transparent border px-4 py-2 text-xl rounded-md'>MORE</button>
    
    </div>
    </div>
  )
}

export default VideoContent

import React from 'react'
import { Image_path } from '../utils/Constants'

const MovieCart = ({posterPath}) => {
  return (
    <div className='flex-shrink-0 w-40 h-52 rounded-lg overflow-hidden shadow-lg mr-4'>
      <img alt='Nowplaying movies'  className='h-full w-full object-cover' src= {Image_path + posterPath}/>
    </div>
  )
}

export default MovieCart

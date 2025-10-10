import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoContent from './VideoContent'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.NowPlayingMovies)
    if(!movies) return;
    const mainMovie = movies[0]

    const { overview ,original_title,id} = mainMovie;

  return (
    <div className='w-full h-full bg-zinc-900 text-white'>
      <VideoContent  title = {original_title} overview  ={overview} />
    <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer




import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movieList = useSelector(store => store.movies)
  // console.log("movielist",movieList)
  

  return (
    <div className='px-12 '>
     <div className='-mt-20 relative z-20 capitalize bold text-sm'>
       <MovieList title = {"Now playing movies"} movies = {movieList.NowPlayingMovies}/>
      <MovieList title = {"Popular"} movies = {movieList.popularMovies}/>
      <MovieList title = {"top rated"} movies = {movieList.topRated}/>
      <MovieList title = {"upcoming"} movies = {movieList.upcoming}/>
     </div>
    </div>
  )
}

export default SecondaryContainer


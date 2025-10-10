import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { TMDB_HEADERS } from '../utils/Constants';
import {  addTopRated } from '../utils/store/reducers/MovieSlice';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      TMDB_HEADERS
    );
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
   getTopRatedMovies()
  }, []);
}

export default useTopRatedMovies

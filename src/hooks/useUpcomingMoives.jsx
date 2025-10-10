import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_HEADERS } from "../utils/Constants";
import {  addUpcoming } from "../utils/store/reducers/MovieSlice";

const useUpcomingMoives = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?=1",
      TMDB_HEADERS
    );
    const json = await data.json();
    dispatch(addUpcoming(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMoives;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/store/reducers/MovieSlice";
import { TMDB_HEADERS } from "../utils/Constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getVideoBackground = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      TMDB_HEADERS
    );
    const json = await data.json();

    // filtered out the trailer
    const filteredTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredTrailer.length
      ? filteredTrailer[0]
      : json.results[0];

    dispatch(addTrailerVideo(trailer));

    
  };

  useEffect(() => {
    if(movieId) getVideoBackground();
  },[movieId]);
};




export default useMovieTrailer;

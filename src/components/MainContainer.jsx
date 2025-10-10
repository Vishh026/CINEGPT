import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoContent from "./VideoContent";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies) || [];

  if (!movies || movies.length === 0) {
    return <p className="text-white text-center">Loading main movie...</p>;
  }
  const mainMovie = movies[0];
  const { overview = "", original_title = "", id } = mainMovie || {};

  return (
    <div className="relative w-full h-screen text-white">
      {/* Video background */}
      {id && <VideoBackground movieId={id} />}

      {/* Overlay gradient + content */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent flex flex-col justify-center px-8 md:px-12 lg:px-20">
        <VideoContent title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;

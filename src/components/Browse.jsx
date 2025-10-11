import { useSelector } from "react-redux";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMoives from "../hooks/useUpcomingMoives";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {
  const showGpt = useSelector((store) => store.gpt.showGptSearch);

  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMoives();

  return (
    <div>
      <Header />
      {showGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browser;

import useNowPlaying from "../hooks/useNowPlaying"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpcomingMoives from "../hooks/useUpcomingMoives"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browser = () => {
  
  useNowPlaying()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMoives()
  
  

    return(
        <div>
          <Header />
          <MainContainer />
          <SecondaryContainer />
        </div>
    )
}
export default Browser
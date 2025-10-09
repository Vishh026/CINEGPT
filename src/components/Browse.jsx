import Header from "./Header"
import { useEffect } from "react"
import { TMDB_HEADERS } from "../utils/Constants"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/store/reducers/MovieSlice"

const Browser = () => {
  const dispatch = useDispatch()
  
  const getNowPlayingMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',TMDB_HEADERS)
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(() => {
    getNowPlayingMovies()
  },[])
  

    return(
        <div>
          <Header />
        </div>
    )
}
export default Browser
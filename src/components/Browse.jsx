import useNowPlaying from "../hooks/useNowPlaying"
import Header from "./Header"

const Browser = () => {
  
  useNowPlaying()
  
  

    return(
        <div>
          <Header />
        </div>
    )
}
export default Browser
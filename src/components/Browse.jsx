import useNowPlaying from "../hooks/useNowPlaying"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browser = () => {
  
  useNowPlaying()
  
  

    return(
        <div>
          <Header />
          {/* 
          mainContainer -> 
            video 
            video content

          secondarycontainer ->
            movielist * n
             - carts * n
          
          */}
          <MainContainer />
          <SecondaryContainer />
        </div>
    )
}
export default Browser
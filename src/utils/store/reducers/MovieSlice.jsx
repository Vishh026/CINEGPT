import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    NowPlayingMovies  : null,
    trailerVideo :null
}

const MovieSlice = createSlice({
    name: "Movies",
    initialState,
    reducers: {
        addNowPlayingMovies (state,action){
            state.NowPlayingMovies = action.payload
        },
        addTrailerVideo (state,action){
            state.trailerVideo = action.payload
        }
        
    }

})

export const { addNowPlayingMovies, addTrailerVideo } = MovieSlice.actions
export default MovieSlice.reducer

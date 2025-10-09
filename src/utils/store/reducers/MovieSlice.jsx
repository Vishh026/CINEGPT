import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    NowPlayingMovies  : null
}

const MovieSlice = createSlice({
    name: "Movies",
    initialState,
    reducers: {
        addNowPlayingMovies (state,action){
            state.NowPlayingMovies = action.payload
        },
        
    }

})

export const { addNowPlayingMovies } = MovieSlice.actions
export default MovieSlice.reducer

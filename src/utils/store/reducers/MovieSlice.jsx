import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    NowPlayingMovies  :[],
    trailerVideo :[],
    popularMovies : [],
    topRated:[],
    upcoming:[]
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
        },
        addPopularMovies(state,action){
            state.popularMovies = action.payload
        },
        addTopRated(state,action){
            state.topRated = action.payload
        },
        addUpcoming(state,action){
            state.upcoming = action.payload
        }
        
    }

})

export const { addNowPlayingMovies, addTrailerVideo,addPopularMovies,addTopRated,addUpcoming } = MovieSlice.actions
export default MovieSlice.reducer

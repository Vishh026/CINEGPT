import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/UserSlice"
import movieReducer from "./reducers/MovieSlice"

const appStore = configureStore({
    reducer : {
        user:userReducer,
        movies : movieReducer
    }
})

export default appStore
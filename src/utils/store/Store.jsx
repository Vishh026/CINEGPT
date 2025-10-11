import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/UserSlice"
import movieReducer from "./reducers/MovieSlice"
import gptReducer from "./reducers/GptSlice"
import AppConfigReducer from "./reducers/AppConfigSlice"

const appStore = configureStore({
    reducer : {
        user:userReducer,
        movies : movieReducer,
        gpt : gptReducer,
        config: AppConfigReducer
    }
})

export default appStore
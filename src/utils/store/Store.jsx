import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/UserSlice"

const appStore = configureStore({
    reducer : {
        user:userReducer
    }
})

export default appStore
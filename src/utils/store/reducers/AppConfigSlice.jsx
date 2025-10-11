import {createSlice} from "@reduxjs/toolkit"

const AppConfigSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en-US"
    },
    reducers: {
        languageChnage: (state,action) =>{
            state.lang = action.payload
        }
    }
})

export const { languageChnage } = AppConfigSlice.actions
export default AppConfigSlice.reducer
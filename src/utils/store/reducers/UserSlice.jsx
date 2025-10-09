import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        adduser : (state,action) => {
            return action.payload
        },
        removeUser :(state,action) => {
            return null
        }
    }
})

export const { adduser,removeUser } = UserSlice.actions
export default UserSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addUser, fetchUsere, setCurrentUser } from "./userApi"

const initialState = {

    arrUsers: [],
    currentUser: null,
    status: "none"

}

export const fetchAllUsers = createAsyncThunk(
    "user/fetchAllUsers",
    async (thunkAPI) => {
        const res = await fetchUsere()
        return res
    }
)

export const addNewUser = createAsyncThunk(
    'user/addNewUser',
    async (user, thunkAPI) => {
        const res = await addUser(user)
        return res
    }
)

export const enter = createAsyncThunk(
    'user/enter',
    async (password, thunkAPI) => {
        const res = await setCurrentUser(password)
        console.log("slice: ", res)
        return res
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAdmin: (state, action) => {
            state.status = action.payload
        },
        logOut: (state) => {
            state.currentUser = null
            state.status = "none"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
                state.arrUsers = payload
            })
            .addCase(addNewUser.fulfilled, (state, { payload }) => {
                state.arrUsers.push(payload)
            })
            .addCase(enter.fulfilled, (state, { payload }) => {
                state.currentUser = payload
                state.status = "user"
                console.log("extrareducer: ", state.currentUser)
            })

    }
})

export default userSlice.reducer
export const { setIsAdmin, logOut } = userSlice.actions





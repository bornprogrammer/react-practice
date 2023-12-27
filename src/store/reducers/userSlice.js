import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    error: null,
    status: "idle", // idle,loading,succeeded,failed
    users: []
};

export const fetchUser = createAsyncThunk("users/fetchUsers", async () => {
    try {
        const result = await axios("https://jsonplaceholder.typicode.com/users");
        return result.data;
    } catch (error) {
        return error.message;
    }
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetContact(state) {
            state.users = [];
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchUser.pending, (state, action) => {
            state.status = "loading";
        }).addCase(fetchUser.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.users = action.payload;
        }).addCase(fetchUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
});

export const getAllUsers = (state) => state.users.users;
export const getUserStatus = (state) => state.users.status;
export const getUserError = (state) => state.users.error;

export default userSlice.reducer;
import { combineSlices, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    error: null,
    status: "idle", // idle,loading,succeeded,failed
    comments: []
};

export const fetchComments = createAsyncThunk("comments/fetchComments", async () => {
    try {
        const result = await axios("https://jsonplaceholder.typicode.com/comments");
        return result.data.slice(0, 10);
    } catch (error) {
        return error.message;
    }
});

export const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        resetContact(state) {
            state.comments = [];
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchComments.pending, (state, action) => {
            state.status = "loading";
        }).addCase(fetchComments.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.comments = action.payload;
        }).addCase(fetchComments.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
});

export const getAllComments = (state) => state.comments.comments;
export const getCommentStatus = (state) => state.comments.status;
export const getCommentError = (state) => state.comments.error;

export default commentSlice.reducer;
import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

const postAdapter = createEntityAdapter({});

const initialState = postAdapter.getInitialState({
    error: null,
    status: "idle", // idle,loading,succeeded,failed
    count: 0
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    try {
        const result = await axios("https://jsonplaceholder.typicode.com/posts");
        return result.data;
    } catch (error) {
        return error.message;
    }
});

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        increaseCount(state) {
            state.count += 1;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.status = "loading";
        }).addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = "succeeded";
            postAdapter.upsertMany(state, action.payload);
        }).addCase(fetchPosts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
});

export const { selectAll: selectAllPosts, selectById: selectPostById, selectIds: selectPostIds } = postAdapter.getSelectors((state) => state.posts);

export const selectPostStatus = (state) => state.posts.status;
export const selectPostError = (state) => state.posts.error;

export default postSlice.reducer;
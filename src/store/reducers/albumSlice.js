import apiSlice from "../apiSlice";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const albumAdapter = createEntityAdapter({});
const initialState = albumAdapter.getInitialState({
    pageNo: 1,
    search: null
});

export const albumApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAlbums: builder.query({
            query: () => "/albums",
            transformResponse: (responseData) => {
                return albumAdapter.setAll(initialState, responseData.slice(0, 10));
            },
            keepUnusedDataFor: 0
        }),
    }),
});

export const { useGetAlbumsQuery } = albumApiSlice;

const selectAlbumMemoizedResult = albumApiSlice.endpoints.getAlbums.select();
// create memoized selector

const selectAlbumData = createSelector(selectAlbumMemoizedResult,
    (albumData) => {
        return albumData.data;
    } // normalized comma seperated ids with entities
);

export const { selectAll: selectAllAlbums, selectIds: selectAlbumIds, selectById: selectAlbumById } = albumAdapter.getSelectors((state) => {
    return selectAlbumData(state) ?? initialState;
});
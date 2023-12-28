import apiSlice from "../apiSlice";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const photoAdapter = createEntityAdapter({});
const initialState = photoAdapter.getInitialState();

export const photoApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPhotos: builder.query({
            query: () => "/photos",
            transformResponse: (responseData) => {
                return photoAdapter.setAll(initialState, responseData.slice(0, 10));
            },
            keepUnusedDataFor: 0
        }),
    })
});

export const { useGetPhotosQuery } = photoApiSlice;

const selectPhotosResult = photoApiSlice.endpoints.getPhotos.select();

// create memoized selector

const selectPhotosData = createSelector(selectPhotosResult,
    (photoData) => {
        return photoData.data;
    } // normalized comma seperated ids with entities
);

export const { selectAll: selectAllPhotos, selectIds: selectPhotoIds, selectById: selectPhotoById } = photoAdapter.getSelectors((state) => {
    console.log("state", state);
    return selectPhotosData(state) ?? initialState;
});
import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import reducers from "./reducers";

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});
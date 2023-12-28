import apiSlice from "../apiSlice";

export const todoApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/todos",
            transformResponse: (responseData) => {
                return responseData.slice(0, 10);
            },
            keepUnusedDataFor: 0
        }),
    }),
});

export const { useGetTodosQuery } = todoApiSlice;
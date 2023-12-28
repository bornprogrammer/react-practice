import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageNo: 1,
    search: "",
    numberOfRecords: 10,
    filter: {},
    sorting: {}
}

export const listMetaDataSlice = createSlice({
    name: "list-meta-data",
    initialState,
    reducers: {
        setPage(state, action) {
            state.pageNo = action.payload.pageNo;
        },
        setSearch(state, action) {
            state.search = action.payload;
        }
    }
});
export const { setPage, setSearch } = listMetaDataSlice.actions;
export const selectListMetaData = (state) => state.listMetaData;
export default listMetaDataSlice.reducer;
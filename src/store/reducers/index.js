// third-party
import { combineReducers } from 'redux';

import contactSlice from "./contactSlice";
import userSlice from "./userSlice";
import commentSlice from "./commentSlice";
import postSlice from "./postSlice";
import apiSlice from '../apiSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
    contacts: contactSlice,
    users: userSlice,
    comments: commentSlice,
    posts: postSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
});

export default reducers;
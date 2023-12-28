// third-party
import { combineReducers } from 'redux';

import contactSlice from "./contactSlice";
import userSlice from "./userSlice";
import commentSlice from "./commentSlice";
import postSlice from "./postSlice";
import listMetaDataSlice from "./listMetaDataSlice";
import apiSlice from '../apiSlice';
import selectorDemoSlice from './createSelectorDemoSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
    contacts: contactSlice,
    users: userSlice,
    comments: commentSlice,
    posts: postSlice,
    selectorDemo: selectorDemoSlice,
    listMetaData: listMetaDataSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
});

export default reducers;
import {combineReducers} from "redux";
import authSlice from "./authSlice";
import usersSlice from "./usersSlice";
import profileSlice from "./profileSlice";
import {configureStore} from '@reduxjs/toolkit';


const rootReducer = combineReducers({
    auth: authSlice,
    users: usersSlice,
    profile: profileSlice,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({thunk: true, immutableCheck: false, serializableCheck: false,}),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;

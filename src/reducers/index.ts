import {combineReducers} from "redux";
import authSlice from "./auth/authSlice";
import usersSlice from "./users/usersSlice";
import profileSlice from "./profile/profileSlice";
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

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
export default store;

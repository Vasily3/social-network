import {authAPI, securityAPI} from "../../api/api";
import {createSlice} from "@reduxjs/toolkit";
import {AppDispatch} from "../index";
import {AuthLoginRequest} from "../../api/types";
import {InitialStateType} from "./types";


const initialState = {
    isAuth: false,
    user: null,
    errorMessage: null,
    captchaUrl: null,
    isFetching: true,
    redirect: false,
} as InitialStateType;

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserData(state, action) {
            state.isAuth = true;
            state.user = action.payload;
        },
        clearUserData(state) {
            state.isAuth = false;
            state.user = null;
        },
        loginUser(state) {
            state.isAuth = true;
        },
        addErrorMessage(state, action) {
            state.errorMessage = action.payload;
        },
        clearErrorMessage(state) {
            state.errorMessage = null;
        },
        showCaptcha(state, action) {
            state.captchaUrl = action.payload;
        },
        toogleIsFetching(state, action) {
            state.isFetching = action.payload;
        },
        setRedirect(state, action) {
            state.redirect = action.payload;
        }
    }
});

export const auth = () => {
    return (dispatch: AppDispatch) => {
        dispatch(toogleIsFetching(true));
        authAPI.auth().then((response) => {
            if (response.resultCode === 0) {
                dispatch(setUserData(response.data));
            }
        }, error => alert("Rejected: " + error.message));
        dispatch(toogleIsFetching(false));
    }
};

export const login = (payload: AuthLoginRequest) => {
    return (dispatch: AppDispatch) => {
        dispatch(toogleIsFetching(true));
        authAPI.login(payload).then((response) => {
            if (response.resultCode === 0) {
                dispatch(loginUser());
                dispatch(auth());
            } else if (response.resultCode === 1) {
                dispatch(addErrorMessage(response.messages[0]));
            } else if (response.resultCode === 10) {
                securityAPI.requestCaptcha().then((response) => {
                    dispatch(showCaptcha(response.url));
                }, error => alert("Rejected: " + error.message));
            }
        }, error => alert("Rejected: " + error.message));
        dispatch(toogleIsFetching(false));
    }
};

export const logout = () => {
    return (dispatch: AppDispatch) => {
        authAPI.logout().then(() => {
            dispatch(clearUserData());
        }, error => alert("Rejected: " + error.message));
    }
};

export default authSlice.reducer;
export const {setUserData, loginUser, clearUserData, addErrorMessage, clearErrorMessage, showCaptcha, toogleIsFetching, setRedirect} = authSlice.actions;

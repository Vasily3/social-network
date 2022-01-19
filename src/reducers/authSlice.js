import {authAPI, securityAPI} from "../api/api";
import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: false,
        user: null,
        errorMessage: null,
        captchaUrl: null,
        isFetching: true,
        redirect: false,
    },
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
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        authAPI.auth().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data));
            }
            dispatch(toogleIsFetching(false));
        }, error => alert("Rejected: " + error.message));
    }
};

export const login = (payload) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        authAPI.login(payload).then(data => {
            if (data.resultCode === 0) {
                dispatch(loginUser());
                dispatch(auth());
            } else if (data.resultCode === 1) {
                dispatch(addErrorMessage(data.messages[0]));
            } else if (data.resultCode === 10) {
                securityAPI.requestCaptcha().then(data => {
                    dispatch(showCaptcha(data.url));
                }, error => alert("Rejected: " + error.message));
            }
            dispatch(toogleIsFetching(false));
        }, error => alert("Rejected: " + error.message));
    }
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(() => {
            dispatch(clearUserData());
        }, error => alert("Rejected: " + error.message));
    }
};

export default authSlice.reducer;
export const {setUserData, loginUser, clearUserData, addErrorMessage, clearErrorMessage, showCaptcha, toogleIsFetching, setRedirect} = authSlice.actions;

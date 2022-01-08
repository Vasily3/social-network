import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const CLEAR_USER_DATA = "CLEAR_USER_DATA";
const LOGIN_USER = "LOGIN_USER";
const ADD_ERROR_MESSAGE = "ADD_ERROR_MESSAGE";
const SET_CAPTCHA = "SET_CAPTCHA";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const SET_REDIRECT = "SET_REDIRECT";
const CLEAR_ERROR_MESSAGE = "CLEAR_ERROR_MESSAGE";

const initialState = {
    isAuth: false,
    user: null,
    errorMessage: null,
    captchaUrl: null,
    isFetching: true,
    redirect: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                isAuth: true,
                user: action.data,
            };
        }
        case LOGIN_USER: {
            return {
                ...state,
                isAuth: true,
            }
        }
        case CLEAR_USER_DATA: {
            return {
                ...state,
                isAuth: false,
                user: null,
            };
        }
        case ADD_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        }
        case CLEAR_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: null
            };
        }
        case SET_CAPTCHA: {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            };
        }
        case TOOGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_REDIRECT: {
            return {
                ...state,
                redirect: action.redirect
            }
        }
        default:
            return state;
    }
};

export const setUserData = (data) => {return {type: SET_USER_DATA, data: data}};
export const clearUserData = () => {return {type: CLEAR_USER_DATA}};
export const loginUser = () => {return {type: LOGIN_USER}};
export const addErrorMessage = (errorMessage) => {return {type: ADD_ERROR_MESSAGE, errorMessage: errorMessage}};
export const clearErrorMessage = () => {return {type: CLEAR_ERROR_MESSAGE}};
export const showCaptcha = (captchaUrl) => {return {type: SET_CAPTCHA, captchaUrl: captchaUrl}};
export const toogleIsFetching = (isFetching) => {return {type: TOOGLE_IS_FETCHING, isFetching}};
export const setRedirect = (redirect) => {return {type: SET_REDIRECT, redirect}};

export const auth = () => {
    return (dispatch) => {
        toogleIsFetching(true);
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
        toogleIsFetching(true);
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

export default authReducer;

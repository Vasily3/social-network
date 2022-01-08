import {profileAPI} from "../api/api";
import {addErrorMessage, setRedirect, toogleIsFetching} from "./authReducer";


const SET_PROFILE = "SET_PROFILE";
const CLEAR_PROFILE = "CLEAR_PROFILE";
const SET_PROFILE_PHOTO = "SET_PROFILE_PHOTO";
const SET_STATUS = "SET_STATUS";

const initialState = {
    profileData: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                profileData: action.data,
            };
        }
        case CLEAR_PROFILE: {
            return {
                ...state,
                profileData: null,
            };
        }
        case SET_PROFILE_PHOTO: {
            return {
                ...state,
                profileData: {...state.profileData, photos: action.photo},
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

const setProfile = (data) => {return {type: SET_PROFILE, data}};
export const clearProfile = () => {return {type: CLEAR_PROFILE}};
const setProfilePhoto = (photo) => {return {type: SET_PROFILE_PHOTO, photo}};
export const setStatus = (status) => {return {type: SET_STATUS, status}};

export const getProfile = (userId) => {
    return (dispatch) => {
        toogleIsFetching(true);
        profileAPI.requestProfile(userId).then((data) => {
            dispatch(setProfile(data));
        }, error => alert("Rejected: " + error.message));
        toogleIsFetching(false);
    }
};

export const updateProfile = (data) => {
    return (dispatch) => {
        toogleIsFetching(true);
        profileAPI.updateProfile(data).then((response) => {
            if (response.resultCode === 0) {
                dispatch(setProfile(data));
                dispatch(setRedirect(true));
            } else if (response.resultCode === 1) {
                dispatch(addErrorMessage(response.messages));
            }
        }, error => alert("Rejected: " + error.message));
        toogleIsFetching(false);
    }
};

export const updateProfilePhoto = (file) => {
    return (dispatch) => {
        toogleIsFetching(true);
        profileAPI.updateProfilePhoto(file).then((response) => {
            if (response.resultCode === 0) {
                dispatch(setProfilePhoto(response.data.photos));
            } else if (response.resultCode === 1) {
                dispatch(addErrorMessage(response.messages));
            }
        }, error => alert("Rejected: " + error.message));
        toogleIsFetching(false);
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        toogleIsFetching(true);
        profileAPI.requestStatus(userId).then((response) => {
            if (response.status === 200) {
                dispatch(setStatus(response.data));
            } else {
                dispatch(addErrorMessage("error: " + response.status));
            }
        }, error => alert("Rejected: " + error.message));
        toogleIsFetching(false);
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        toogleIsFetching(true);
        profileAPI.updateStatus(status).then((response) => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status));
            } else if (response.resultCode === 1) {
                dispatch(addErrorMessage(response.messages));
            }
        }, error => alert("Rejected: " + error.message));
        toogleIsFetching(false);
    }
};

export default profileReducer;

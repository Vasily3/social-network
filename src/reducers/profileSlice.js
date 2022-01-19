import {profileAPI} from "../api/api";
import {addErrorMessage, setRedirect, toogleIsFetching} from "./authSlice";
import {createSlice} from "@reduxjs/toolkit";


const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profileData: null,
        status: "",
    },
    reducers: {
        setProfile(state, action) {
            state.profileData = action.payload;
        },
        clearProfile(state) {
            state.profileData = null;
        },
        setProfilePhoto(state, action) {
            state.profileData = {...state.profileData, photos: action.payload};
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
});


export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        profileAPI.requestProfile(userId).then((data) => {
            dispatch(setProfile(data));
        }, error => alert("Rejected: " + error.message));
        dispatch(toogleIsFetching(false));
    }
};

export const updateProfile = (data) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        profileAPI.updateProfile(data).then((response) => {
            if (response.resultCode === 0) {
                dispatch(setProfile(data));
                dispatch(setRedirect(true));
            } else if (response.resultCode === 1) {
                dispatch(addErrorMessage(response.messages));
            }
        }, error => alert("Rejected: " + error.message));
        dispatch(toogleIsFetching(false));
    }
};

export const updateProfilePhoto = (file) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        profileAPI.updateProfilePhoto(file).then((response) => {
            if (response.resultCode === 0) {
                dispatch(setProfilePhoto(response.data.photos));
            } else if (response.resultCode === 1) {
                dispatch(addErrorMessage(response.messages));
            }
        }, error => alert("Rejected: " + error.message));
        dispatch(toogleIsFetching(false));
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        profileAPI.requestStatus(userId).then((response) => {
            if (response.status === 200) {
                dispatch(setStatus(response.data));
            } else {
                dispatch(addErrorMessage("error: " + response.status));
            }
        }, error => alert("Rejected: " + error.message));
        dispatch(toogleIsFetching(false));
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        profileAPI.updateStatus(status).then((response) => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status));
            } else if (response.resultCode === 1) {
                dispatch(addErrorMessage(response.messages));
            }
        }, error => alert("Rejected: " + error.message));
        dispatch(toogleIsFetching(false));
    }
};

export default profileSlice.reducer;
export const {setProfile, clearProfile, setProfilePhoto, setStatus} = profileSlice.actions;

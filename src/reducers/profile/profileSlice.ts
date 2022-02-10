import {profileAPI} from "../../api/api";
import {createSlice} from "@reduxjs/toolkit";
import {AppDispatch} from "../index";
import {addErrorMessage, setRedirect, toogleIsFetching } from "../auth/authSlice";
import {InitialStateType, TProfileData} from "./types";


const initialState = {
    profileData: null,
    status: "",
} as InitialStateType;

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile(state, action) {
            state.profileData = action.payload;
        },
        clearProfile(state) {
            state.profileData = null;
        },
        setProfilePhoto(state, action) {
            if (state.profileData) {
                state.profileData.photos = action.payload
            }
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
});


export const getProfile = (userId: number) => {
    return (dispatch: AppDispatch) => {
        dispatch(toogleIsFetching(true));
        profileAPI.requestProfile(userId).then((response) => {
            dispatch(setProfile(response));
        }, error => alert("Rejected: " + error.message));
        dispatch(toogleIsFetching(false));
    }
};

export const updateProfile = (payload: TProfileData) => {
    return (dispatch: AppDispatch) => {
        dispatch(toogleIsFetching(true));
        profileAPI.updateProfile(payload).then((response) => {
            if (response.resultCode === 0) {
                dispatch(setProfile(payload));
                dispatch(setRedirect(true));
            } else if (response.resultCode === 1) {
                dispatch(addErrorMessage(response.messages));
            }
        }, error => alert("Rejected: " + error.message));
        dispatch(toogleIsFetching(false));
    }
};

export const updateProfilePhoto = (file: string | Blob) => {
    return (dispatch: AppDispatch) => {
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

export const getStatus = (userId: number) => {
    return (dispatch: AppDispatch) => {
        profileAPI.requestStatus(userId).then((response) => {
            if (response.status === 200) {
                dispatch(setStatus(response.data));
            } else {
                dispatch(addErrorMessage("error: " + response.status));
            }
        }, error => alert("Rejected: " + error.message));
    }
};

export const updateStatus = (status: string) => {
    return (dispatch: AppDispatch) => {
        profileAPI.updateStatus(status).then((response) => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status));
            } else if (response.resultCode === 1) {
                dispatch(addErrorMessage(response.messages));
            }
        }, error => alert("Rejected: " + error.message));
    }
};

export default profileSlice.reducer;
export const {setProfile, clearProfile, setProfilePhoto, setStatus} = profileSlice.actions;

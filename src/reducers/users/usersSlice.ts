import {usersAPI} from "../../api/api";
import {createSlice} from "@reduxjs/toolkit";
import {addErrorMessage, toogleIsFetching} from "../auth/authSlice";
import {AppDispatch} from "../index";
import {InitialStateType} from "./types";


const initialState = {
    usersArr: [],
    currentPage: 1,
    totalCount: 0,
    pageSize: 10,
} as InitialStateType;

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers(state, action) {
            state.usersArr = action.payload;
        },
        setTotalCount(state, action) {
            state.totalCount = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setFollowing(state, action) {
            state.usersArr = state.usersArr.map(user => {
                if (user.id === action.payload) {
                    return {...user, followed: true}
                }
                return user;
            })
        },
        setUnfollowing(state, action) {
            state.usersArr = state.usersArr.map(user => {
                if (user.id === action.payload) {
                    return {...user, followed: false}
                }
                return user;
            })
        }
    }
});


export const getUsers = (pageSize: number, currentPage: number) => {
    return (dispatch: AppDispatch) => {
        dispatch(toogleIsFetching(true));
        usersAPI.requestUsers(pageSize, currentPage).then((response) => {
            dispatch(setTotalCount(response.totalCount));
            dispatch(setUsers(response.items));
            dispatch(toogleIsFetching(false));
        }, error => alert("Rejected: " + error.message));
    }
};

export const follow = (userId: number) => {
    return (dispatch: AppDispatch) => {
        usersAPI.follow(userId).then((response) => {
            if (response.resultCode === 0) {
                dispatch(setFollowing(userId));
            } else if (response.resultCode === 1) {
                dispatch(addErrorMessage(response.messages));
            }
        }, error => alert("Rejected: " + error.message));
    }
};

export const unfollow = (userId: number) => {
    return (dispatch: AppDispatch) => {
        usersAPI.unfollow(userId).then((response) => {
            if (response.resultCode === 0) {
                dispatch(setUnfollowing(userId));
            } else if (response.resultCode === 1) {
                dispatch(addErrorMessage(response.messages));
            }
        }, error => alert("Rejected: " + error.message));
    }
};

export default usersSlice.reducer;
export const {setUsers, setTotalCount, setCurrentPage, setFollowing, setUnfollowing} = usersSlice.actions;

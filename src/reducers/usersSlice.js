import {usersAPI} from "../api/api";
import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        usersArr: [],
        currentPage: null,
        totalCount: null,
        pageSize: 10,
    },
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

export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        usersAPI.requestUsers(pageSize, currentPage).then(data => {
            dispatch(setTotalCount(data.totalCount));
            dispatch(setUsers(data.items));
        }, error => alert("Rejected: " + error.message));
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        usersAPI.follow(userId).then(() => {
            dispatch(setFollowing(userId));
        }, error => alert("Rejected: " + error.message));
    }
};

export const unfollow = (userId) => {
    return (dispatch) => {
        usersAPI.unfollow(userId).then(() => {
            dispatch(setUnfollowing(userId));
        }, error => alert("Rejected: " + error.message));
    }
};

export default usersSlice.reducer;
export const {setUsers, setTotalCount, setCurrentPage, setFollowing, setUnfollowing} = usersSlice.actions;

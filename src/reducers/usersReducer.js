import {usersAPI} from "../api/api";

const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const initialState = {
    usersArr: [],
    currentPage: null,
    totalCount: null,
    pageSize: 10,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                usersArr: action.users,
            };
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount,
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            };
        }
        case FOLLOW: {
            return {
                ...state,
                usersArr: state.usersArr.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersArr: state.usersArr.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }
        default:
            return state;
    }
};

export const setUsers = (users) => {
    return {type: SET_USERS, users}
};
export const setTotalCount = (totalCount) => {
    return {type: SET_TOTAL_COUNT, totalCount}
};
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
};
export const setFollowing = (userId) => {
    return {type: FOLLOW, userId}
};
export const setUnfollowing = (userId) => {
    return {type: UNFOLLOW, userId}
};

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

export default usersReducer;

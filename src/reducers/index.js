import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
    auth: authReducer,
    users: usersReducer,
    profile: profileReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunkMiddleware)
    )
);

export default store;

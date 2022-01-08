import React from "react";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

export const WithAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        const isAuth = useSelector(state => state.auth.isAuth);
        const isFetching = useSelector(state => state.auth.isFetching);

        if(!isAuth && !isFetching) return <Redirect to="/signin"/>
        return <Component {...props}/>
    };

    return RedirectComponent;
};

export default WithAuthRedirect;

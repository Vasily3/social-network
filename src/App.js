import React, {useEffect} from "react";
import "./scss/style.scss"
import {Route, Switch, useLocation} from "react-router-dom";
import {connect} from "react-redux";
import {auth} from "./reducers/authReducer";
import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn/SignIn";
import Settings from "./pages/Settings/Settings";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";
import EditProfile from "./pages/EditProfile/EditProfile";

function App({isAuth, auth}) {
    let location = useLocation();

    useEffect(() => {
        if (!isAuth) {
            auth()
        }
    }, [isAuth]);


    return (
        <>
            <Header location={location}/>
            <div className="container container--small">
                <Switch>
                    <Route path={"/signin"} component={SignIn}/>
                    <Route path={"/settings"} component={Settings} location={location}/>
                    <Route path={"/page/:num"} component={Users}/>
                    <Route path={"/profile/:userId"} component={UserProfile}/>
                    <Route path={"/edit-profile"} component={EditProfile}/>
                    <Route exact path={"/"} component={Users}/>
                </Switch>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
    auth: auth
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

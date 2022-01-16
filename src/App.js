import React from "react";
import "./scss/style.scss"
import {Route, Switch, useLocation} from "react-router-dom";
import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn/SignIn";
import Settings from "./pages/Settings/Settings";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";
import EditProfile from "./pages/EditProfile/EditProfile";
import useAuth from "./hooks/useAuth";

function App() {
    const location = useLocation();

    useAuth();

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


export default App;

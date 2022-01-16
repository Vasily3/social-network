import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearErrorMessage, logout} from "../../reducers/authReducer";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import {clearProfile, getProfile} from "../../reducers/profileReducer";
import Preloader from "../../components/Preloader/Preloader";
import Profile from "../../components/Profile/Profile";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


const Settings = (props) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const isFetching = useSelector((state) => state.auth.isFetching);
    const profile = useSelector((state) => state.profile.profileData);
    const errorMessage = useSelector((state) => state.auth.errorMessage);

    useEffect(() => {
        if (!isFetching) {
            dispatch(getProfile(user.id));
        }

        return () => dispatch(clearProfile());
    }, [isFetching]);

    useEffect(() => {
        return () => dispatch(clearErrorMessage());
    }, [clearErrorMessage]);

    if (profile && !isFetching) {
        return <>
            <div className="settings">
                <Profile profile={profile}
                         userId={user.id}
                         location={props.location.pathname}/>
                <div className="settings__buttons-block">
                    <Link className="settings__button button button--green" to={`/edit-profile`}>Edit profile</Link>
                    <Button className="settings__button" type="button" onClick={() => dispatch(logout())} text="Log out"
                            color="red"/>
                </div>
                {(errorMessage) ? <div className="error">{errorMessage}</div> : null}
            </div>
        </>
    } else {
        return <Preloader/>
    }
};

export default WithAuthRedirect(Settings);

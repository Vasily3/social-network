import React, {useEffect, VFC} from "react";
import {useDispatch} from "react-redux";
import {clearErrorMessage, logout} from "../../reducers/auth/authSlice";
import {clearProfile, getProfile} from "../../reducers/profile/profileSlice";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import Preloader from "../../components/Preloader/Preloader";
import Profile from "../../components/Profile/Profile";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {TProps} from "./types";


const Settings: VFC<TProps> = (props: TProps) => {
    const dispatch = useDispatch();
    const user = useTypedSelector((state) => state.auth.user);
    const isFetching = useTypedSelector((state) => state.auth.isFetching);
    const profile = useTypedSelector((state) => state.profile.profileData);
    const errorMessage = useTypedSelector((state) => state.auth.errorMessage);

    useEffect(() => {
        if (!isFetching && user) {
            dispatch(getProfile(user.id));
        }

        return () => {dispatch(clearProfile())};
    }, [isFetching]);

    useEffect(() => {
        return () => {dispatch(clearErrorMessage())};
    }, [clearErrorMessage]);

    if (profile && !isFetching) {
        return <>
            <div className="settings">
                <Profile profile={profile}
                         userId={user?.id}
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

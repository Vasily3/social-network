import React, {useEffect} from "react";
import {connect} from "react-redux";
import {clearErrorMessage, logout} from "../../reducers/authReducer";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import {clearProfile, getProfile, updateProfilePhoto} from "../../reducers/profileReducer";
import Preloader from "../../components/Preloader/Preloader";
import Profile from "../../components/Profile/Profile";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const Settings = (props) => {
        useEffect(() => {
            if (!props.isFetching) {
                props.getProfile(props.user.id);
            }

            return () => props.clearProfile();
        }, [props.isFetching]);

        useEffect(() => {
            return () => props.clearErrorMessage();
        }, [props.clearErrorMessage]);

        if (props.profile && !props.isFetching) {
            return <>
                <div className="settings">
                    <Profile profile={props.profile}
                             user={props.user}
                             userId={props.user.id}
                             updateProfilePhoto={props.updateProfilePhoto}
                             location={props.location.pathname}/>
                    <div className="settings__buttons-block">
                        <Link className="settings__button button button--green" to={`/edit-profile`}>Edit profile</Link>
                        <Button className="settings__button" type="button" onClick={props.logout} text="Log out"
                                color="red"/>
                    </div>
                    {(props.errorMessage) ? <div className="error">{props.errorMessage}</div> : null}
                </div>
            </>
        } else {
            return <Preloader/>
        }
    }
;

const mapStateToProps = (state) => ({
    user: state.auth.user,
    isFetching: state.auth.isFetching,
    profile: state.profile.profileData,
    errorMessage: state.auth.errorMessage,
});

const mapDispatchToProps = {
    getProfile: getProfile,
    clearProfile: clearProfile,
    logout: logout,
    updateProfilePhoto: updateProfilePhoto,
    clearErrorMessage: clearErrorMessage,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Settings);

import React, {useEffect} from 'react';
import Profile from "../../components/Profile/Profile";
import {clearProfile, getProfile} from "../../reducers/profileReducer";
import {connect} from "react-redux";
import Preloader from "../../components/Preloader/Preloader";

const UserProfile = (props) => {
    useEffect(() => {
        if (!props.isFetching && props.match.params.userId) {
            props.getProfile(props.match.params.userId);
        }

        return () => props.clearProfile();

    }, [props.isFetching]);

    if (props.profile && !props.isFetching) {
        return (
            <Profile
                profile={props.profile}
                isFetching={props.isFetching}
                userId={props.user.id}
                location={props.history.location.pathname}/>
        );
    } else {
        return <Preloader/>
    }
};

const mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching,
    profile: state.profile.profileData,
    user: state.auth.user
});

const mapDispatchToProps = {
    getProfile: getProfile,
    clearProfile: clearProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

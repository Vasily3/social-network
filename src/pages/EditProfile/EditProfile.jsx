import React, {useEffect} from "react";
import {connect} from "react-redux";
import ProfileForm from "./ProfileForm";
import {getProfile} from "../../reducers/profileReducer";
import Preloader from "../../components/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const EditProfile = (props) => {
    useEffect(() => {
        if (!props.isFetching) {
            props.getProfile(props.user.id);
        }
    }, [props.isFetching]);


    if (props.profile && props.user) {
        return (
            <ProfileForm profile={props.profile}/>
        )

    } else {
        return (
            <Preloader/>
        )
    }
};

const mapStateToProps = (state) => ({
    user: state.auth.user,
    profile: state.profile.profileData,
    isFetching: state.auth.isFetching
});

const mapDispatchToProps = {
    getProfile: getProfile
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(EditProfile);

import React, {useEffect} from 'react';
import Profile from "../../components/Profile/Profile";
import {clearProfile, getProfile} from "../../reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../../components/Preloader/Preloader";

const UserProfile = (props) => {
    const dispatch = useDispatch();
    const isFetching = useSelector((state) => state.auth.isFetching);
    const profile = useSelector((state) => state.profile.profileData);
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (!isFetching && props.match.params.userId) {
            dispatch(getProfile(props.match.params.userId));
        }

        return () => dispatch(clearProfile());

    }, [isFetching]);

    let userId;

    if (props.match.params.userId) {
        userId = props.match.params.userId
    } else {
        userId = user.id
    }

    if (profile && !isFetching) {
        return (
            <Profile
                profile={profile}
                userId={userId}
                location={props.history.location.pathname}/>
        );
    } else {
        return <Preloader/>
    }
};

export default UserProfile;

import React, {useEffect, VFC} from 'react';
import Profile from "../../components/Profile/Profile";
import {clearProfile, getProfile} from "../../reducers/profile/profileSlice";
import {useDispatch} from "react-redux";
import Preloader from "../../components/Preloader/Preloader";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {TProps} from "./types";


const UserProfile: VFC<TProps> = (props: TProps) => {
    const dispatch = useDispatch();
    const isFetching = useTypedSelector((state) => state.auth.isFetching);
    const profile = useTypedSelector((state) => state.profile.profileData);
    const user = useTypedSelector((state) => state.auth.user);

    useEffect(() => {
        if (!isFetching && props.match.params.userId) {
            dispatch(getProfile(props.match.params.userId));
        }

        return () => {dispatch(clearProfile());}
    }, [isFetching]);


    if (profile && !isFetching) {
        return (
            <Profile
                profile={profile}
                userId={props.match.params.userId}
                location={props.history.location.pathname}/>
        );
    } else {
        return <Preloader/>
    }
};

export default UserProfile;

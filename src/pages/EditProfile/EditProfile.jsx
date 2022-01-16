import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProfileForm from "./ProfileForm";
import {getProfile} from "../../reducers/profileReducer";
import Preloader from "../../components/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

const EditProfile = () => {
    const user = useSelector((state) => state.auth.user);
    const profile = useSelector((state) => state.profile.profileData);
    const isFetching = useSelector((state) => state.auth.isFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isFetching) {
            dispatch(getProfile(user.id));
        }
    }, [isFetching]);


    if (profile && user) {
        return (
            <ProfileForm profile={profile}/>
        )

    } else {
        return (
            <Preloader/>
        )
    }
};


export default WithAuthRedirect(EditProfile);

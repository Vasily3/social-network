import React, {useEffect, VFC} from "react";
import {useDispatch} from "react-redux";
import ProfileForm from "./ProfileForm";
import {getProfile} from "../../reducers/profile/profileSlice";
import Preloader from "../../components/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const EditProfile: VFC = () => {
    const user = useTypedSelector((state) => state.auth.user);
    const profile = useTypedSelector((state) => state.profile.profileData);
    const isFetching = useTypedSelector((state) => state.auth.isFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isFetching && user) {
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

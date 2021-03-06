import React, {useEffect, VFC} from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {useFormik} from "formik";
import * as Yup from "yup";
import {updateProfile} from "../../reducers/profile/profileSlice";
import {clearErrorMessage, setRedirect} from "../../reducers/auth/authSlice";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {TProps} from "./types";

const EditProfileSchema = Yup.object().shape({
    aboutMe: Yup.string().required("Required"),
    facebook: Yup.string().url(),
    website: Yup.string().url(),
    vk: Yup.string().url(),
    twitter: Yup.string().url(),
    instagram: Yup.string().url(),
    youtube: Yup.string().url(),
    github: Yup.string().url(),
    mainLink: Yup.string().url(),
    lookingForAJob: Yup.bool(),
    lookingForAJobDescription: Yup.string().required("Required")
});

const ProfileForm: VFC<TProps> = ({profile}: TProps) => {
    const dispatch = useDispatch();
    const user = useTypedSelector((state) => state.auth.user);
    const errorMessage = useTypedSelector((state) => state.auth.errorMessage);
    const redirect = useTypedSelector((state) => state.auth.redirect);
    const history = useHistory();

    useEffect(() => {
        return () => {
            dispatch(clearErrorMessage())
        };
    }, [clearErrorMessage]);

    const formik = useFormik({
        initialValues: {
            aboutMe: profile.aboutMe,
            contacts: {
                facebook: profile.contacts.facebook,
                website: profile.contacts.website,
                vk: profile.contacts.vk,
                twitter: profile.contacts.twitter,
                instagram: profile.contacts.instagram,
                youtube: profile.contacts.youtube,
                github: profile.contacts.github,
                mainLink: profile.contacts.mainLink,
            },
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            fullName: user? user.login : "Unknown",
            userId: user? user.id : 0,
            photos: {
                small: profile.photos.small,
                large: profile.photos.large,
            }
        },
        validationSchema: EditProfileSchema,
        validateOnChange: false,
        onSubmit: values => {
            dispatch(updateProfile(values));
        },
    });

    if (redirect) {
        history.push('/settings');
        dispatch(setRedirect(false));
    }

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <Input
                labelText="About me"
                id="aboutMe"
                name="aboutMe"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.aboutMe}
            />
            {Object.keys(formik.values.contacts).map(key => {
                return <Input
                    key={key}
                    labelText={key}
                    id={key}
                    name={"contacts." + key}
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.contacts[key as keyof typeof formik.values.contacts]}/>
            })}
            <Input
                labelText="looking for a job"
                id="lookingForAJob"
                name="lookingForAJob"
                type="checkbox"
                onChange={formik.handleChange}
                value={formik.values.lookingForAJob}
                checked={formik.values.lookingForAJob}
            />
            <Input
                labelText="looking for a job description"
                id="lookingForAJobDescription"
                name="lookingForAJobDescription"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lookingForAJobDescription}
            />
            <Button className="form__button" text="Submit"/>
            {(Object.keys(formik.errors).length > 0) ? <div className="error">Error</div> : null}
            {(errorMessage) ? <div className="error">{errorMessage}</div> : null}
        </form>
    );
};


export default ProfileForm;

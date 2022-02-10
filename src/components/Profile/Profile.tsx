import React, {VFC} from "react";
import noPhotoImg from "../../img/user.jpg"
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import Status from "../Status/Status";
import {TProfileDataPhotos} from "../../reducers/profile/types";


interface TProps {
    location: string,
    profile: TProfileDataPhotos,
    userId: number | null | undefined,
}

const Profile: VFC<TProps> = ({profile, userId, location}: TProps) => {
    const prepareAddress = (address: string) => {
        return address.replace('https://', '').replace('http://', '');
    };

    return (
        <div className="profile">
            <div className="profile__uploader">
                {(userId === profile.userId && location === '/settings') &&
                <PhotoUpload/>}
                <img className="profile__img"
                     src={profile.photos.large ? profile.photos.large : noPhotoImg} alt=""/>
            </div>
            <div>
                <p className="profile__name">{profile.fullName}</p>
                {(userId === profile.userId && location === '/settings') &&
                <Status statusTitle={"Click to change status"}/>
                }
                <hr/>
                <p>User ID: {profile.userId}</p>
                {profile.aboutMe ? <p>About me: {profile.aboutMe}</p> : null}
                {profile.contacts.facebook ?
                    <p>Facebook: <a href={"https://" + prepareAddress(profile.contacts.facebook)} target="_blank"
                                    rel="nofollow noopener">{profile.contacts.facebook}</a></p> : null}
                {profile.contacts.website ?
                    <p>Website: <a href={"https://" + prepareAddress(profile.contacts.website)} target="_blank"
                                   rel="nofollow noopener">{profile.contacts.website}</a></p> : null}
                {profile.contacts.vk ? <p>Vk: <a href={"https://" + prepareAddress(profile.contacts.vk)} target="_blank"
                                                 rel="nofollow noopener">{profile.contacts.vk}</a></p> : null}
                {profile.contacts.twitter ?
                    <p>Twitter: <a href={"https://" + prepareAddress(profile.contacts.twitter)} target="_blank"
                                   rel="nofollow noopener">{profile.contacts.twitter}</a></p> : null}
                {profile.contacts.instagram ?
                    <p>Instagram: <a href={"https://" + prepareAddress(profile.contacts.instagram)} target="_blank"
                                     rel="nofollow noopener">{profile.contacts.instagram}</a></p> : null}
                {profile.contacts.youtube ?
                    <p>Youtube: <a href={"https://" + prepareAddress(profile.contacts.youtube)} target="_blank"
                                   rel="nofollow noopener">{profile.contacts.youtube}</a></p> : null}
                {profile.contacts.github ?
                    <p>Github: <a href={"https://" + prepareAddress(profile.contacts.github)} target="_blank"
                                  rel="nofollow noopener">{profile.contacts.github}</a></p> : null}
                {profile.contacts.mainLink ?
                    <p>Main link: <a href={"https://" + prepareAddress(profile.contacts.mainLink)} target="_blank"
                                     rel="nofollow noopener">{profile.contacts.mainLink}</a></p> : null}
                <p>Looking for a job: {profile.lookingForAJob ? "Yes" : "No"}</p>
                {profile.lookingForAJobDescription ?
                    <p>Looking for a job description: {profile.lookingForAJobDescription}</p> : null}
            </div>
        </div>
    )
};

export default Profile;

import React from "react";
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import noPhotoImg from "../../img/user-small.jpg"

const User = (props) => {
    const userPhoto = props.user.photos.small;

    return (
        <div className="user">
            <div className="user__img-block">
                <Link to={`/profile/${props.user.id}`}><img className="user__img" src={userPhoto ? userPhoto : noPhotoImg} alt=""/></Link>
            </div>
            <div className="user__info">
                <Link className="user__link" to={`/profile/${props.user.id}`}><p className="user__name">{props.user.name}</p></Link>
                <p className="user__id">User ID: {props.user.id}</p>
                <p className="user__status">Status: {props.user.status}</p>
                {props.user.followed ?
                    <Button color="red" type="button" onClick={() => props.unfollow(props.user.id)} text="Unfollow"/>
                    :
                    <Button color="green" type="button" onClick={() => props.follow(props.user.id)} text="Follow"/>
                }
            </div>
        </div>
    );
};


export default User;

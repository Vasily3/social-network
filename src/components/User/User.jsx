import React from "react";
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import noPhotoImg from "../../img/user-small.jpg"
import {useDispatch} from "react-redux";
import {follow, unfollow} from "../../reducers/usersSlice";


const User = ({user}) => {
    const dispatch = useDispatch();
    const userPhoto = user.photos.small;

    return (
        <div className="user">
            <div className="user__img-block">
                <Link to={`/profile/${user.id}`}><img className="user__img" src={userPhoto ? userPhoto : noPhotoImg} alt=""/></Link>
            </div>
            <div className="user__info">
                <Link className="user__link" to={`/profile/${user.id}`}><p className="user__name">{user.name}</p></Link>
                <p className="user__id">User ID: {user.id}</p>
                <p className="user__status">Status: {user.status}</p>
                {user.followed ?
                    <Button color="red" type="button" onClick={() => dispatch(unfollow(user.id))} text="Unfollow"/>
                    :
                    <Button color="green" type="button" onClick={() => dispatch(follow(user.id))} text="Follow"/>
                }
            </div>
        </div>
    );
};


export default User;

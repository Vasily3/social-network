import React, {useEffect, useState} from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getStatus, updateStatus} from "../../reducers/profileReducer";

const Status = ({statusTitle}) => {
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();
    const status = useSelector((state) => state.profile.status);
    const userId = useSelector((state) => state.profile.profileData.userId);
    const [statusLocal, setStatusLocal] = useState(status);
    useEffect(() => {
        dispatch(getStatus(userId));
        setStatusLocal(status);
    }, [status]);


    const changeStatus = (status) => {
        dispatch(updateStatus(status));
        setEditMode(false);
    };

    const onInputChange = (event) => {
        event.stopPropagation();
        setStatusLocal(event.currentTarget.value)
    };

    const cancelStatus = () => {
        setEditMode(false);
        setStatusLocal(status)
    };

    return (
        <div className="status">
            {editMode ?
                <div>
                    <Input id="status" name="status" autoFocus={true} type="text" value={statusLocal}
                           onChange={(event) => onInputChange(event)}/>
                    <div className="status__buttons">
                        <Button className="status__button"
                                color="green"
                                text="Save"
                                type="button"
                                onClick={() => changeStatus(statusLocal)}/>
                        <Button className="status__button"
                                color="red"
                                text="Cancel"
                                type="button"
                                onClick={() => cancelStatus()}/>
                    </div>
                </div>
                :
                <p onClick={() => setEditMode(true)} className="status__title">{status ? status : statusTitle}</p>
            }
        </div>
    );
};

export default Status;

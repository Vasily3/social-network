import React, {useEffect, useState, VFC} from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import {getStatus, updateStatus} from "../../reducers/profile/profileSlice";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface TProps {
    statusTitle: string
}

const Status: VFC<TProps> = ({statusTitle}: TProps) => {
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();
    const status = useTypedSelector((state) => state.profile.status);
    const userId = useTypedSelector((state) => state.profile.profileData?.userId);
    const [statusLocal, setStatusLocal] = useState(status);
    useEffect(() => {
        if (userId) {
            dispatch(getStatus(userId));
        }
        setStatusLocal(status);
    }, [status]);


    const changeStatus = (status: string) => {
        dispatch(updateStatus(status));
        setEditMode(false);
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                <div onBlur={() => changeStatus(statusLocal)}>
                    <Input id="status" name="status" autoFocus={true} type="text" value={statusLocal}
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => onInputChange(event)}/>
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

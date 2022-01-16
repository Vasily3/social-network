import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../reducers/authReducer";

export default function useAuth() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);

    useEffect(() => {
        if (!isAuth) {
            dispatch(auth());
        }
    }, [isAuth]);
}

import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "./useTypedSelector";
import {auth} from "../reducers/auth/authSlice";

export default function useAuth() {
    const dispatch = useDispatch();
    const isAuth = useTypedSelector((state) => state.auth.isAuth);

    useEffect(() => {
        if (!isAuth) {
            dispatch(auth());
        }
    }, [isAuth]);
}

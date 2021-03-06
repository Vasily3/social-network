import React, {useEffect} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {clearErrorMessage, login} from "../../reducers/auth/authSlice";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import Captcha from "../../components/Captcha/Captcha";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const SignInSchema = Yup.object().shape({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required")
});

const SignIn = () => {
    const dispatch = useDispatch();
    const isAuth = useTypedSelector((state) => state.auth.isAuth);
    const errorMessage = useTypedSelector((state) => state.auth.errorMessage);
    const captchaUrl = useTypedSelector((state) => state.auth.captchaUrl);

    useEffect(() => {
        return() => {dispatch(clearErrorMessage())}
    },[errorMessage]);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
            captcha: null
        },
        validationSchema: SignInSchema,
        validateOnChange: false,
        onSubmit: values => {
            dispatch(login(values));
        },
    });

    if (isAuth) {
        return <Redirect to={"/"}/>
    }

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <Input
                labelText="Email"
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
                autoComplete="true"
            />
            <Input
                labelText="Password"
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <Input
                labelText="Remember Me"
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                onChange={formik.handleChange}
                value={formik.values.rememberMe}
            />
            <Button className="form__button" text="Submit"/>
            {(captchaUrl)?
                <Captcha image={captchaUrl} onChange={formik.handleChange} value={formik.values.captcha}/> : null}
            {(Object.keys(formik.errors).length > 0)?
                <div className="error">Fill in All the Fields</div> : null}
            {(errorMessage)?
                <div className="error">{errorMessage}</div> : null}
        </form>
    );
};


export default SignIn;

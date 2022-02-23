export interface InitialStateType {
    isAuth: boolean,
    user: {
        id: number
        login: string
        email: string
    } | null,
    errorMessage: string | null,
    captchaUrl: string | null,
    isFetching: boolean,
    redirect: boolean,
}

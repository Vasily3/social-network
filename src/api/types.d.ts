import {TUserType} from "../reducers/users/usersSlice";

export interface StandartApiResponse<T={}> {
    data: T,
    resultCode: number,
    messages: Array<string>
}

export interface AuthLoginResponse {
    userId: number
}

export interface AuthMeResponse {
    id: number,
    email: string,
    login: string
}

export interface AuthLoginRequest {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: boolean | null
}

export interface SecurityResponse {
    url: string
}

export interface UsersApiResponse {
    items: {
        usersArr: Array<TUserType>,
    }
    totalCount: number | null,
    error: string
}

export interface TStatus {
    status: string
}

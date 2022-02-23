import axios, {AxiosResponse} from "axios";
import {
    AuthLoginRequest,
    AuthLoginResponse,
    AuthMeResponse,
    SecurityResponse,
    StandartApiResponse, TStatus, UsersApiResponse
} from "./types";
import {TProfileData, TProfileDataPhotos} from "../reducers/profile/types";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': 'c3902200-a6e9-4f88-83b9-6487092494bd'
    }
});


export const authAPI = {
    auth: () => {
        return instance.get<StandartApiResponse<AuthMeResponse>>(`auth/me`)
            .then(response => response.data);
    },
    login: (payload: AuthLoginRequest) => {
        return instance.post<AuthLoginRequest, AxiosResponse<StandartApiResponse<AuthLoginResponse>>>(`auth/login`, payload)
            .then(response => response.data);
    },
    logout: () => {
        return instance.delete<StandartApiResponse>(`auth/login`)
            .then(response => response.data);
    },
};


export const securityAPI = {
    requestCaptcha: () => {
        return instance.get<SecurityResponse>(`security/get-captcha-url`)
            .then(response => response.data);
    }
};


export const profileAPI = {
    requestProfile: (userId: number) => {
        return instance.get<TProfileDataPhotos>(`profile/${userId}`)
            .then(response => response.data);
    },
    updateProfile: (payload: TProfileData) => {
        return instance.put<TProfileData, AxiosResponse<StandartApiResponse>>(`profile`, payload)
            .then(response => response.data);
    },
    requestStatus: (userId: number) => {
        return instance.get<StandartApiResponse>(`profile/status/${userId}`)
            .then(response => response);
    },
    updateStatus: (status: string) => {
        return instance.put<TStatus, AxiosResponse<StandartApiResponse>>(`profile/status`, {status})
            .then(response => response.data);
    },
    updateProfilePhoto: (file: string | Blob) => {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put<FormData, AxiosResponse<StandartApiResponse<TProfileDataPhotos>>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response => response.data);
    },
};


export const usersAPI = {
    requestUsers: (count: number = 10, page: number = 0) => {
        return instance.get<UsersApiResponse>(`users?count=${count}&page=${page}`)
            .then(response => response.data);
    },
    follow: (userId: number) => {
        return instance.post<StandartApiResponse>(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow: (userId: number) => {
        return instance.delete<StandartApiResponse>(`follow/${userId}`)
            .then(response => response.data);
    }
};



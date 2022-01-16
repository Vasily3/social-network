import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': 'c3902200-a6e9-4f88-83b9-6487092494bd'
    }
});

export const authAPI = {
    auth: (payload) => {
        return instance.get(`auth/me`, {user: payload})
            .then(response => {
                return response.data;
            });
    },
    login: (payload) => {
        return instance.post(`auth/login`, payload)
            .then(response => {
                return response.data;
            });
    },
    logout: () => {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data;
            });
    },
};

export const usersAPI = {
    requestUsers: (count = 10, page = 0) => {
        return instance.get(`users?count=${count}&page=${page}`)
            .then(response => {
                return response.data;
            });
    },
    follow: (userId) => {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    }
};

export const securityAPI = {
    requestCaptcha: () => {
        return instance.get(`security/get-captcha-url`)
            .then(response => {
                return response.data;
            });
    }
};

export const profileAPI = {
    requestProfile: (userId) => {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    updateProfile: (data) => {
        return instance.put(`profile`, data)
            .then(response => {
                return response.data;
            });
    },
    requestStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response;
            });
    },
    updateStatus: (status) => {
        return instance.put(`profile/status`, {status: status})
            .then(response => {
                return response.data;
            });
    },
    updateProfilePhoto: (file) => {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response => {
                return response.data;
            });
    },
};

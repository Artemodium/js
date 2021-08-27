import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "0454494e-0054-459a-bf34-8e4518abe34c"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const getUsersReq = (currentPage, pagesSize) => {
    return axiosInstance.get(`users?page=${currentPage}&count=${pagesSize}`)
        .then(response => {return response.data;});
}

export const followReq = (userId) => {
    return axiosInstance.post(`follow/${userId}`, {})
        .then(response => {return response.data;});
}

export const unFollowReq = (userId) => {
    return axiosInstance.delete(`follow/${userId}`)
        .then(response => {return response.data;});
}

export const authReq = (req = `auth/me`) => { // автоматическая авторизация в хедере
    return axiosInstance.get(req)
        .then(response => {return response.data;});
}

/*export const loginRequest= (formData) => {
    return axiosInstance.post('auth/login', formData)
        .then(response => {return response.data;});
}*/

export const getUserReq= (userId) => {
    return ProfileAPI.getProfile(userId)
}

export const ProfileAPI = {
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`)
            .then(response => {return response.data;});
    },
    getStatus(userId) {
        return axiosInstance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return axiosInstance.put('profile/status', {status: status});
    }
}

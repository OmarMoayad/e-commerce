import axios from "axios";
import useAuthStore from "../auth/useAuthStore";
import i18n from "../i18next";


const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BURL}`,
})
axiosInstance.interceptors.request.use((config) => {
    config.headers["Accept-Language"] = i18n.language;
    return config;
})

const axiosInstanceWithToken = axios.create({
    baseURL: `${import.meta.env.VITE_BURL}`,
    headers: {
        "Authorization": `Bearer ${useAuthStore.getState().token}`,
    },
})
axiosInstanceWithToken.interceptors.request.use((config) => {
    config.headers["Accept-Language"] = i18n.language;
    return config;
})

export default axiosInstanceWithToken;
export { axiosInstance };

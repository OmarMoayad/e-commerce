import axios from "axios";
import useAuthStore from "../auth/useAuthStore";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BURL}`,
    headers: {
        "Accept-Language": "en",
    },
})


const axiosInstanceWithToken = axios.create({
    baseURL: `${import.meta.env.VITE_BURL}`,
    headers: {
        "Accept-Language": "en",
        "Authorization": `Bearer ${useAuthStore.getState().token}`,
    },
})

export default axiosInstanceWithToken;
export {axiosInstance};

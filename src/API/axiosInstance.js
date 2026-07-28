import axios from "axios";

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
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
})

export default axiosInstanceWithToken;
export {axiosInstance};

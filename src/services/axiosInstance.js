import axios from "axios";
import { BASE_API_URL } from "../utils/constants.js";
import { handleServerError } from "../middleware/errorHandler.js";

const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        "Accept": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        handleServerError(error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
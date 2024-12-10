import axios from "axios";
import {BASE_API_URL} from "../utils/constants.js";

const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        "Accept": "application/json",
    },
});

export default axiosInstance;
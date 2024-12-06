export const PAGE_SIZE = 5;

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5125/';

export const ENDPOINTS = {
    DELETE_CABIN: `${API_BASE}Cabins/Delete`,
    GET_CABINS: `${API_BASE}Cabins/GetCabins`,
    CREATE_CABIN: `${API_BASE}Cabins/Create`,
};


export const PAGE_SIZE = 5;

export const BASE_API_URL = import.meta.env.VITE_API_BASE || 'http://localhost:5125/';

export const ENDPOINTS = {
    DELETE_CABIN: '/Cabins/Delete',
    GET_CABINS: '/Cabins/GetCabins',
    CREATE_CABIN: '/Cabins/Create',
    EDIT_CABIN: '/Cabins/Edit',
};


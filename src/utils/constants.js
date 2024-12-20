export const PAGE_SIZE = 5;

export const BASE_API_URL = import.meta.env.VITE_API_BASE || 'http://localhost:5125/';

export const ENDPOINTS = {
    DELETE_CABIN: 'Cabins/Delete',
    DELETE_BOOKING: 'Bookings/Delete',
    GET_CABINS: 'Cabins/GetCabins',
    CREATE_CABIN: 'Cabins/Create',
    EDIT_CABIN: 'Cabins/Edit',
    GET_SETTINGS: 'Settings/GetSettings',
    EDIT_SETTINGS: 'Settings/Edit',
    UPDATE_BOOKING: 'Bookings/UpdateBooking',
    GET_BOOKINGS: 'Bookings/GetBookings',
    GET_BOOKING: 'Bookings/GetBooking',
    GET_BOOKINGS_AFTER_DATE: 'Bookings/GetBookingsAfterDate',
    GET_STAYS_AFTER_DATE: 'Bookings/GetStaysAfterDate',
    GET_STAYS_TODAY_ACTIVITY: 'Bookings/GetStaysTodayActivity',
    ACCOUNT_SIGNUP: 'Account/Signup',
    ACCOUNT_LOGIN: 'Account/Login',
    ACCOUNT_LOGOUT: 'Account/Logout',
    ACCOUNT_Get_CURRENT_USER: 'Account/GetCurrentUser',
    ACCOUNT_UPDATE_Current_USER: 'Account/UpdateCurrentUser',
    ACCOUNT_UPDATE_AVATAR: 'Account/UpdateAvatar',
};


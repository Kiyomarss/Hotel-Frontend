import {ENDPOINTS, PAGE_SIZE} from "../utils/constants";
import axiosInstance from "./axiosInstance.js";
import {handleServerError} from "../middleware/errorHandler.js";

export async function getBookings({ filter, sortBy, page }) {
  try {
    const params = {};

    if (filter) {
      params[filter.field] = filter.value;
    }

    if (sortBy) {
      params.sortBy = sortBy.field;
      params.sortDirection = sortBy.direction || "asc";
    }

    if (page) {
      params.page = page;
      params.pageSize = PAGE_SIZE;
    }

    const response = await axiosInstance.get(ENDPOINTS.GET_BOOKINGS, { params });

    return {
      data: response.data.bookings, 
      count: response.data.totalCount, 
    };
  } catch (error) {
    handleServerError(error);
  }
}

export async function getBooking(id) {
  try {
    const response = await axiosInstance.get(`${ENDPOINTS.GET_BOOKING}/${id}`);

    if (response.data.booking) {
      return response.data.booking;
    } else {
      throw new Error("Booking not found");
    }
  } catch (error) {
    handleServerError(error);
  }
}

export async function getBookingsAfterDate(date) {
  try {
    const response = await axiosInstance.get(`${ENDPOINTS.GET_BOOKINGS_AFTER_DATE}`, {
      params: { date },
    });

    if (response.data.bookings) {
      return response.data.bookings;
    } else {
      throw new Error("No bookings found");
    }
  } catch (error) {
    handleServerError(error);
  }
}

export async function getStaysAfterDate(date) {
  try {
    const response = await axiosInstance.get(`${ENDPOINTS.GET_STAYS_AFTER_DATE}`, {
      params: { date },
    });

    if (response.data.bookings) {
      return response.data.bookings;
    } else {
      throw new Error("No stays found");
    }
  } catch (error) {
    handleServerError(error);
  }
}

export async function getStaysTodayActivity() {
  try {
    const response = await axiosInstance.get(ENDPOINTS.GET_STAYS_TODAY_ACTIVITY);

    if (response.data.bookings) {
      return response.data.bookings;
    } else {
      throw new Error("No Bookings found");
    }
  } catch (error) {
    handleServerError(error);
  }
}

export async function updateBooking(id, obj) {
  try {
    // ایجاد patchDoc برای درخواست
    const patchDoc = Object.keys(obj).map((key) => ({
      op: "replace",
      path: `/${key}`,
      value: obj[key],
    }));

    // ارسال درخواست PATCH
    const response = await axiosInstance.patch(
        `${ENDPOINTS.UPDATE_BOOKING}/${id}`,
        patchDoc,
        {
          headers: {
            "Content-Type": "application/json-patch+json",
          },
        }
    );

    return response.data.booking;
  } catch (error) {
    handleServerError(error);
  }
}

export async function deleteBooking(id) {
  try {
    const response = await axiosInstance.delete(`${ENDPOINTS.DELETE_BOOKING}/${id}`);

    return response.data.isDeleted;
  } catch (error) {
    handleServerError(error);
  }
}
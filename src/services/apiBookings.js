import {ENDPOINTS, PAGE_SIZE} from "../utils/constants";
import axiosInstance from "./axiosInstance.js";

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
    console.error("Error loading bookings:", error);
    throw new Error("Bookings could not be loaded");
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
    console.error("Error fetching booking:", error);
    throw new Error(error.response?.data?.data.Message || "An error occurred while fetching the booking");
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
    console.error("Error fetching bookings:", error);
    throw new Error(error.response?.data?.data.Message || "An error occurred while fetching bookings");
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
    console.error("Error fetching stays:", error);
    throw new Error(error.response?.data?.data.Message || "An error occurred while fetching stays");
  }
}

export async function getStaysTodayActivity() {
  try {
    const response = await axiosInstance.get(ENDPOINTS.GET_STAYS_AFTER_DATE);

    if (response.data.bookings) {
      return response.data.bookings;
    } else {
      throw new Error("No Bookings found");
    }
  } catch (error) {
    console.error("Error fetching stays:", error);
    throw new Error(error.response?.data?.data.Message || "An error occurred while fetching stays");
  }
}

export async function updateBooking(id, obj) {
  try {
    const patchDoc = Object.keys(obj).map((key) => ({
      op: "replace",
      path: `/${key}`,
      value: obj[key],
    }));
    
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
    if (error.response && error.response.data) {
      const errorMessage = error.response.data.Message || "Booking could not be updated";
      console.error("Error from server:", errorMessage);
      throw new Error(errorMessage);
    }

    console.error("Error while updating booking:", error);
    throw new Error(error.message || "An error occurred while updating booking");
  }
}


export async function deleteBooking(id) {
  try {
    const response = await axiosInstance.delete(`${ENDPOINTS.DELETE_BOOKING}/${id}`);

    return response.data.isDeleted;
  } catch (error) {
    console.error("Error deleting Booking:", error);
    throw new Error("Booking could not be deleted");
  }
}
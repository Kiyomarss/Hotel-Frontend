import {ENDPOINTS} from "../utils/constants.js";
import axios from "axios";
import axiosInstance from "./axiosInstance.js";
import {handleServerError} from "../middleware/errorHandler.js";

export async function getCabins() {
  try {
    const response = await axiosInstance.get(ENDPOINTS.GET_CABINS);
    return response.data.cabins;
  } catch (error) {
    handleServerError(error);
  }
}

export async function createEditCabin(newCabin) {
  try {
    const isEditSession = Boolean(newCabin.get("id"));
    const method = isEditSession ? "put" : "post";
    const url = isEditSession ? ENDPOINTS.EDIT_CABIN : ENDPOINTS.CREATE_CABIN;

    const response = await axiosInstance({
      method,
      url,
      data: newCabin,
    });

    return response.data;
  } catch (error) {
    handleServerError(error);
  }
}

export async function deleteCabin(id) {
  try {
    const response = await axiosInstance.delete(`${ENDPOINTS.DELETE_CABIN}/${id}`);

    return response.data.isDeleted;
  } catch (error) {
    handleServerError(error);
  }
}
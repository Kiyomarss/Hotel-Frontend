import { ENDPOINTS } from "../utils/constants.js";
import axiosInstance from "./axiosInstance.js";
import {handleServerError} from "../middleware/errorHandler.js";

export async function getSettings() {
  try {
    const response = await axiosInstance.get(ENDPOINTS.GET_SETTINGS);
    return response.data;
  } catch (error) {
    handleServerError(error);
  }
}

export async function updateSettings(newSetting) {
  try {
    const response = await axiosInstance.put(ENDPOINTS.EDIT_SETTINGS, newSetting);
    return response.data;
  } catch (error) {
    handleServerError(error);
  }
}

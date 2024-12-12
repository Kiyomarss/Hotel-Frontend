import { ENDPOINTS } from "../utils/constants.js";
import axiosInstance from "./axiosInstance.js";

export async function getSettings() {
  try {
    const response = await axiosInstance.get(ENDPOINTS.GET_SETTINGS);
    return response.data;
  } catch (error) {
    console.error("Error loading settings:", error);
    throw new Error("Settings could not be loaded");
  }
}

export async function updateSettings(newSetting) {
  try {
    const response = await axiosInstance.put(ENDPOINTS.EDIT_SETTINGS, newSetting);
    return response.data;
  } catch (error) {
    console.error("Error updating settings:", error);
    throw new Error("Settings could not be updated");
  }
}

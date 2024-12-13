import {ENDPOINTS} from "../utils/constants.js";
import axios from "axios";
import axiosInstance from "./axiosInstance.js";

export async function getCabins() {
  try {
    const response = await axiosInstance.get(ENDPOINTS.GET_CABINS);
    return response.data.cabins;
  } catch (error) {
    console.error("Error loading cabins:", error);
    throw new Error("Cabins could not be loaded");
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
    console.error("Error while creating or editing cabin:", error);
    throw new Error("Operation could not be completed");
  }
}

export async function deleteCabin(id) {
  try {
    const response = await axiosInstance.delete(`${ENDPOINTS.DELETE_CABIN}/${id}`);

    return response.data.isDeleted;
  } catch (error) {
    console.error("Error deleting cabin:", error);
    throw new Error("Cabin could not be deleted");
  }
}
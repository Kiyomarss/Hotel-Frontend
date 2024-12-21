import {BASE_API_URL, ENDPOINTS} from "../utils/constants.js";
import axiosInstance from "./axiosInstance.js";

export async function signup({ fullName, email, password }) {
  try {
    const response = await axiosInstance.post(ENDPOINTS.ACCOUNT_SIGNUP, {
      fullName,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
}

export async function login({ email, password }) {
  try {
    const response = await axiosInstance.post(ENDPOINTS.ACCOUNT_LOGIN, {
      email,
      password,
    });

    return response.data.user;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
}

export async function getCurrentUser() {
  try {
    const response = await axiosInstance.get(ENDPOINTS.ACCOUNT_Get_CURRENT_USER);

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
}

export async function logout() {
  try {
    const response = await axiosInstance.post(ENDPOINTS.ACCOUNT_LOGOUT);

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  let updateData = {};

  if (password) updateData.password = password;
  if (fullName) updateData.fullName = fullName;

  try {
    const response = await axiosInstance.post(ENDPOINTS.ACCOUNT_UPDATE_Current_USER, updateData, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.data.message !== "User updated successfully") {
      throw new Error("Failed to update user data.");
    }
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }

  if (avatar) {
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);

      const uploadResponse = await axiosInstance.post(ENDPOINTS.ACCOUNT_UPDATE_AVATAR, formData, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (uploadResponse.data.avatarPath) {
        return { avatar: uploadResponse.data.avatarPath };
      } else {
        throw new Error("Failed to upload avatar.");
      }
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("An unexpected error occurred while uploading avatar.");
      }
    }
  }

  return { message: "User updated successfully." };
}

import {BASE_API_URL, ENDPOINTS} from "../utils/constants.js";
import axiosInstance from "./axiosInstance.js";
import {handleServerError} from "../middleware/errorHandler.js";

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
    const { token, user } = response.data;

    localStorage.setItem('token', token);
    
    return user;
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

export async function updateUserPersonName(newPersonName) {
  try {
    const response = await axiosInstance.post(
        ENDPOINTS.ACCOUNT_USER_PERSON_NAME,
        {newPersonName}
    );
    
    return response.data;
  } catch (error) {
    console.error("Error changing person name:", error);
    throw new Error(error.response?.data?.message || "Failed to update name");
  }
}

export async function updateUserAvatar({avatar}) {
  try {
    if (avatar) {
      const formData = new FormData();
      formData.append("avatar", avatar);

      const uploadResponse = await axiosInstance.post(ENDPOINTS.ACCOUNT_UPDATE_AVATAR, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return uploadResponse.data;
    }
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "An error occurred while uploading avatar.");
    } else {
      throw new Error("An unexpected error occurred while uploading avatar.");
    }
  }
}

export async function changeUserPassword({ currentPassword, newPassword }) {
  try {
    const response = await axiosInstance.post(
        ENDPOINTS.ACCOUNT_ChangePassword,
        {
          currentPassword,
          newPassword,
        }
    );

    if (response.data) {
      return response.data;
    } else {
      throw new Error("Failed to update password");
    }
  } catch (error) {
    handleServerError(error);
  }
}

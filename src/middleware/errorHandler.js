// errorHandler.js
export function handleServerError(error) {
    if (error.response && error.response.data) {
        const serverError = error.response.data;
        console.error("Error from server:", serverError.message);

        const errorMessage = serverError.message || serverError.detailed || "An error occurred";
        throw new Error(errorMessage);
    }

    console.error("Error while processing request:", error);
    throw new Error(error.message || "An unexpected error occurred");
}

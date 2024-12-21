export function handleServerError(error) {
    if (error.response && error.response.data) {
        const serverError = error.response.data;
        console.error("Error from server:", serverError.message);

        if (error.response.status === 401) {
            throw new Error("Unauthorized access. Please login again.");
        }
        if (error.response.status === 403) {
            throw new Error("Access denied. You do not have permission to perform this action.");
        }

        const errorMessage = serverError.message || serverError.detailed || "An error occurred";
        throw new Error(errorMessage);
    }

    console.error("Error while processing request:", error);
    throw new Error(error.message || "An unexpected error occurred");
}

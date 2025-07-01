import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeUserPassword } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useUpdatePassword() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: changeUserPassword,

    onSuccess: (res) => {
      toast.success(res.message || "Password updated successfully");

      queryClient.removeQueries(["user"]);

      localStorage.removeItem("token");

      navigate("/login", { replace: true });
    },

    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
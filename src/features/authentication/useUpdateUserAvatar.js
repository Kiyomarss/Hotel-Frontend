import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateUserAvatar } from "../../services/apiAuth";

export function useUpdateUserAvatar() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserAvatar,
    onSuccess: (res) => {
      toast.success(res.message || "Avatar updated");
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}

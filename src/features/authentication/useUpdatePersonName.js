import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import {updateUserPersonName} from "../../services/apiAuth";

export function useUpdatePersonName() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserPersonName,
    onSuccess: (res) => {
      toast.success(res.message || "Person name updated");
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}

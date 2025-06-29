import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import {changeUserPassword} from "../../services/apiAuth";

export function useUpdatePassword() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: changeUserPassword,
    onSuccess: (changeUserPassword) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], changeUserPassword);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}

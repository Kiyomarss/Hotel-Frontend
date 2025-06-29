import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import {useUpdatePassword} from "./UseUpdatePassword.js";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdatePassword();

  function onSubmit({ currentPassword, newPassword }) {
    updateUser({ currentPassword, newPassword }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
            label="Current password"
            error={errors?.currentPassword?.message}
        >
            <Input
                type="text"
                id="currentPassword"
                autoComplete="current-password"
                disabled={isUpdating}
                {...register("currentPassword", {
                    required: "This field is required",
                    minLength: {
                        value: 8,
                        message: "Password needs a minimum of 8 characters",
                    },
                })}
            />
        </FormRow>
        <FormRow
        label="New password (min 8 chars)"
        error={errors?.newPassword?.message}
      >
        <Input
          type="password"
          id="newPassword"
          autoComplete="password"
          disabled={isUpdating}
          {...register("newPassword", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().newPassword === value || "Passwords need to match",
          })}
        />
      </FormRow>
      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update password</Button>
      </FormRow>
    </Form>
  );
}

export default  UpdatePasswordForm;

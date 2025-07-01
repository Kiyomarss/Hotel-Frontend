import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUpdatePersonName } from "./useUpdatePersonName.js";
import {useLogin} from "./useLogin.js";
import {useForm} from "react-hook-form";

function UpdateUserPersonNameForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      fullName: currentFullName,
    },
  } = useLogin();

    const {register, handleSubmit, formState, getValues, reset} = useForm();

    const {updateUser, isUpdating} = useUpdatePersonName();

    const [fullName, setFullName] = useState(currentFullName);

    function onSubmit({ fullName }) {
        if (!fullName) return;

        updateUser(fullName, {
            onSuccess: () => {
                setFullName(fullName); // اگر بخوای واقعاً به‌روز کنی
            },
        });
    }


  return (
      <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow label="Email address">
              <Input value={email} disabled/>
          </FormRow>

          <FormRow label="Full name">
              <Input
                  type="text"
                  id="fullName"
                  disabled={isUpdating}
                  defaultValue={currentFullName}
                  {...register("fullName")}
              />
          </FormRow>

          <FormRow>
              <Button disabled={isUpdating}>Update account</Button>
          </FormRow>
      </Form>
  );
}

export default UpdateUserPersonNameForm;

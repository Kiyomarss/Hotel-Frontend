import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings.js";
import { useUpdateSettings } from "./useUpdateSettings.js";
import Button from "../../ui/Button.jsx";

function UpdateSettingsForm() {
    const { isLoading, settings } = useSettings();
    const { isUpdating, updateSetting } = useUpdateSettings();

    if (isLoading) return <Spinner />;
    
    const { minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice } =
    settings.data;
    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const updatedSettings = {
            minBookingLength: parseInt(formData.get("min-nights"), 10),
            maxBookingLength: parseInt(formData.get("max-nights"), 10),
            maxGuestsPerBooking: parseInt(formData.get("max-guests"), 10),
            breakfastPrice: parseInt(formData.get("breakfast-price"), 10),
        };

        updateSetting(updatedSettings);
    }


  return (
      <Form onSubmit={handleSubmit}>
        <FormRow label="Minimum nights/booking">
          <Input
              name="min-nights"
              type="number"
              defaultValue={minBookingLength}
              disabled={isUpdating}
          />
        </FormRow>

        <FormRow label="Maximum nights/booking">
          <Input
              name="max-nights"
              type="number"
              defaultValue={maxBookingLength}
              disabled={isUpdating}
          />
        </FormRow>

        <FormRow label="Maximum guests/booking">
          <Input
              name="max-guests"
              type="number"
              defaultValue={maxGuestsPerBooking}
              disabled={isUpdating}
          />
        </FormRow>

        <FormRow label="Breakfast price">
          <Input
              name="breakfast-price"
              type="number"
              defaultValue={breakfastPrice}
              disabled={isUpdating}
          />
        </FormRow>

        <FormRow>
          <Button disabled={isUpdating}>Update</Button>
        </FormRow>
      </Form>
  );

}

export default UpdateSettingsForm;

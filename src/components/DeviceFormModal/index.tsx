import CustomModal from "../CustomModal";
import { IDevice } from "../../models/IDevice";
import FormContainer from "../Form/FormContainer";
import CustomInput from "../Form/CustomInput";
import React from "react";
import useFormReducer from "../../hooks/useFormReducer";

import { Button } from "@mui/material";

export interface DeviceFormModalProps {
  device: IDevice;
  open: boolean;
  modalOpen: () => void;
  modalClose: () => void;
  onSubmit?: (
    event: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLDivElement>,
    device: IDevice
  ) => void;
}

export default function DeviceFormModal({
  device,
  open,
  modalOpen,
  modalClose,
  onSubmit,
}: DeviceFormModalProps) {
  const { formState, dispatch } = useFormReducer(device);

  const handleInputOnChangeStr = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    dispatch({
      type: "set_value_str",
      name: name as keyof IDevice,
      value,
    });
  };

  const handleInputOnChangeNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    dispatch({
      type: "set_value_number",
      name: name as keyof IDevice,
      value,
    });
  };

  const handleOnSubmitForm = (
    event: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLDivElement>
  ) => {
    console.log(event.target);
    if (onSubmit) {
      onSubmit(event, formState);
    }
  };

  return (
    <>
      <CustomModal open={open} modalOpen={modalOpen} modalClose={modalClose}>
        <FormContainer mode="form" onSubmit={handleOnSubmitForm}>
          <CustomInput
            defaultValue={formState.name}
            label="Name"
            name="name"
            onChange={handleInputOnChangeStr}
          />
          <CustomInput
            defaultValue={formState.description}
            label="Description"
            name="description"
            onChange={handleInputOnChangeStr}
          />
          <CustomInput
            defaultValue={formState.host}
            label="Host"
            name="host"
            onChange={handleInputOnChangeStr}
          />
          <CustomInput
            defaultValue={formState.port}
            label="Port"
            name="port"
            onChange={handleInputOnChangeNumber}
          />
          <CustomInput
            defaultValue={formState.token}
            label="Token"
            name="token"
            onChange={handleInputOnChangeStr}
          />
          <CustomInput
            defaultValue={formState.maxTemp}
            label="Max Temperature"
            name="maxTemp"
            onChange={handleInputOnChangeNumber}
          />
          <CustomInput
            defaultValue={formState.minTemp}
            label="Min Temperature"
            name="minTemp"
            onChange={handleInputOnChangeNumber}
          />

          <Button type="submit">Save</Button>
        </FormContainer>
      </CustomModal>
    </>
  );
}

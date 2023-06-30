import CustomModal from "../CustomModal";
import { IDevice } from "../../models/IDevice";
import FormContainer from "../Form/FormContainer";
import CustomInput from "../Form/CustomInput";
import React, { useReducer, useState } from "react";

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

interface Action {
  type: "set_value";
  name: keyof IDevice;
  value: string;
}

function reducer(state: IDevice, action: Action): IDevice {
  console.log(action.value)
  switch (action.type) {
    case "set_value_str":
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
}

export default function DeviceFormModal({
  device,
  open,
  modalOpen,
  modalClose,
  onSubmit,
}: DeviceFormModalProps) {
  const [formState, dispatch] = useReducer(reducer, device);

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    dispatch({
      type: "set_value",
      name: name as keyof IDevice,
      value,
    });
  };

  const handleOnSubmitForm = (event: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLDivElement>) => {
    console.log(event.target)
    if (onSubmit) {
      onSubmit(event, formState)
    }
  }

  return (
    <>
      <CustomModal open={open} modalOpen={modalOpen} modalClose={modalClose}>
        <FormContainer mode="form" onSubmit={handleOnSubmitForm}>
          <CustomInput
            defaultValue={formState.name}
            label="Name"
            name="name"
            onChange={handleInputOnChange}
          />
          <CustomInput
            defaultValue={formState.description}
            label="Description"
            name="description"
            onChange={handleInputOnChange}
          />
          <CustomInput
            defaultValue={formState.host}
            label="Host"
            name="host"
            onChange={handleInputOnChange}
          />
          <CustomInput
            defaultValue={formState.port}
            label="Port"
            name="port"
            onChange={handleInputOnChange}
          />
          <CustomInput
            defaultValue={formState.token}
            label="Token"
            name="token"
            onChange={handleInputOnChange}
          />
          <CustomInput
            defaultValue={formState.maxTemp}
            label="Max Temperature"
            name="maxTemp"
            onChange={handleInputOnChange}
          />
          <CustomInput
            defaultValue={formState.minTemp}
            label="Min Temperature"
            name="minTemp"
            onChange={handleInputOnChange}
          />

          <Button type="submit">Save</Button>
        </FormContainer>
      </CustomModal>
    </>
  );
}

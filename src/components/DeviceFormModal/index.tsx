import CustomModal from "../CustomModal";
import { IDevice } from "../../models/IDevice";
import FormContainer from "../Form/FormContainer";
import CustomInput from "../Form/CustomInput";
import React, { useReducer, useState } from "react";

export interface DeviceFormModalProps {
  device: IDevice;
  open: boolean;
  modalOpen: () => void;
  modalClose: () => void;
}

interface Action {
  type: "set_value";
  name: keyof IDevice;
  value: string;
}

function reducer(state: IDevice, action: Action): IDevice {
  switch (action.type) {
    case "set_value":
      return { ...state, [action.name]: action.value };
    default:
      return state
  }
}

export default function DeviceFormModal({
  device,
  open,
  modalOpen,
  modalClose,
}: DeviceFormModalProps) {
  const [formState, dispatch] = useReducer(reducer, device);
  console.log(formState)
  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({
      type: "set_value",
      name: name as keyof IDevice,
      value,
    });
  };

  return (
    <>
      {open && (
        <CustomModal open={open} modalOpen={modalOpen} modalClose={modalClose}>
          <FormContainer mode="div">
            <CustomInput
              value={formState.idDevice}
              name="idClient"
              onChange={handleInputOnChange}
            />
          </FormContainer>
        </CustomModal>
      )}
    </>
  );
}

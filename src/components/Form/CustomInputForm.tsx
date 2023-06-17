/* eslint-disable react/jsx-props-no-spreading */
import { Control, Controller } from "react-hook-form";
import CustomInput, { CustomInputProps } from "./CustomInput";

interface CustomInputFormProps extends CustomInputProps {
  name: string;
  control: Control;
}

function CustomInputForm({ name, control, ...rest }: CustomInputFormProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <CustomInput onChange={onChange} value={value} {...rest} />
      )}
    />
  );
}

export default CustomInputForm;

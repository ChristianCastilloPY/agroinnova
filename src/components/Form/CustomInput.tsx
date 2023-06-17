/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {
  FormControl,
  TextField,
  TextFieldProps,
  MenuItem,
} from "@mui/material";

import { FieldError } from "react-hook-form";

export interface CustomInputProps extends Omit<TextFieldProps, "error"> {
  error?: FieldError;
  options?: Array<{ value: string | number; label: string } | null>;
}

function CustomInput({
  label,
  error,
  options,
  value,
  ...rest
}: CustomInputProps) {
  return (
    <FormControl sx={{ width: "100%", textAlign: "left" }}>
      {options != null ? (
        <TextField
          sx={{ font: "none", fontWeight: "100" }}
          variant="outlined"
          fullWidth
          select
          label={label}
          margin="dense"
          FormHelperTextProps={{ sx: { fontWeight: "normal", fontSize: 12 } }}
          {...rest}
          error={!!error}
          helperText={error ? error.message : rest.helperText}
          size="small"
        >
          {options.map(
            (option) =>
              option && (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{ font: "none", fontWeight: "100" }}
                >
                  {option.label}
                </MenuItem>
              )
          )}
        </TextField>
      ) : (
        <TextField
          sx={{ font: "none", fontWeight: "100" }}
          variant="outlined"
          fullWidth
          label={label}
          margin="dense"
          FormHelperTextProps={{ sx: { fontSize: 12 } }}
          {...rest}
          error={!!error}
          defaultValue={rest.defaultValue}
          helperText={error ? error.message : rest.helperText}
          size="small"
        />
      )}
    </FormControl>
  );
}

export default CustomInput;

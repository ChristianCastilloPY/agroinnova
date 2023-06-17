/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent, memo, ReactNode } from "react";
import { Box, PaperProps, Paper } from "@mui/material";

interface BaseProps extends PaperProps {
  children: ReactNode;
}

interface ComponentDiv extends BaseProps {
  mode: "div";
}

interface ComponentForm extends BaseProps {
  mode: "form";
  onSubmit: (
    event: FormEvent<HTMLFormElement> | FormEvent<HTMLDivElement>
  ) => void;
}

type FormContainerProps = ComponentDiv | ComponentForm;

function FormContainer({
  children,
  mode = "div",
  ...rest
}: FormContainerProps) {
  return (
    <Paper
      elevation={0}
      component={mode}
      role={mode}
      className="form-container"
      onSubmit={"onSubmit" in rest ? rest.onSubmit : undefined}
      {...rest}
    >
      <Box sx={{ py: 2, px: 2 }}>{children}</Box>
    </Paper>
  );
}

export default memo(FormContainer);

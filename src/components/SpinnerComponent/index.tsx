import { Stack, CircularProgress, Typography } from "@mui/material";

interface ISpinnerProps {
  title: string;
}

export default function SpinnerComponent({ title }: ISpinnerProps) {
  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      marginTop="20px"
    >
      <CircularProgress variant="indeterminate" color="primary" />
      <Typography variant="body1">{title}</Typography>
    </Stack>
  );
}

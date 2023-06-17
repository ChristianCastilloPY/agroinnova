/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Divider, Stack, Typography } from "@mui/material";

export default function DrawerDetail({ title, children }: any) {
  return (
    <Box>
      <Stack
        width="100%"
        p={2}
        flex={1}
        alignItems="left"
        sx={{ overflowY: "auto" }}
      >
        <Typography variant="subtitle2" align="left">
          {title}
        </Typography>
        <Divider />
        {children}
      </Stack>
    </Box>
  );
}

/* eslint-disable react/require-default-props */
import { TabPanelProps } from "@mui/lab/TabPanel";
import { Box } from "@mui/material";
import { memo, ReactNode } from "react";

interface CustomTabPanelProps extends Omit<TabPanelProps, "value"> {
  children?: ReactNode;
  index: number;
  value: number;
  prefixName: string;
}

function CustomTabPanel({
  children,
  value,
  index,
  prefixName,
  style,
}: CustomTabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${prefixName}-simple-tabpanel-${index}`}
      aria-labelledby={`${prefixName}-simple-tab-${index}`}
      style={style}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default memo(CustomTabPanel);

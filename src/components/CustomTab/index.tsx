/* eslint-disable react/jsx-props-no-spreading */
import { Tab, TabProps } from "@mui/material";
import { memo } from "react";

type CustomTabProps = TabProps & {
  prefixName: string;
  index: number;
};

function CustomTab({ index, prefixName, ...rest }: CustomTabProps) {
  function a11yProps(i: number) {
    return {
      id: `${prefixName}-simple-tab-${i}`,
      "aria-controls": `${prefixName}-simple-tabpanel-${i}`,
    };
  }

  return <Tab {...a11yProps(index)} {...rest} />;
}

export default memo(CustomTab);

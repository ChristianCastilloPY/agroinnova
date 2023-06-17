/* eslint-disable react/require-default-props */
import React from "react";
import { Divider } from "@mui/material";

interface ITitleProps {
  title: string;
  subtitle?: string;
}

export default function TitleViews({ title, subtitle }: ITitleProps) {
  return (
    <div className="title-container">
      <h5>{title}</h5>
      <h3>{subtitle}</h3>
      <Divider sx={{ width: "100%", background: "grey" }} />
    </div>
  );
}

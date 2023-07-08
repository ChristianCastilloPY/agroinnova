import "../../assets/scss/device-status-card.scss";

import { Card, CardContent } from "@mui/material";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import LandslideIcon from "@mui/icons-material/Landslide";
import HexagonIcon from "@mui/icons-material/Hexagon";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useMemo } from "react";
import { DeviceType } from "../../models/IDevice";
import UOMs from "../../utils/UOMs";

interface DeviceStatusCardProps {
  deviceName: string;
  type: DeviceType;
  value: number;
  lastValue: number;
}

type ValueIcon = {
  [key in DeviceType]: React.ReactElement;
};

export default function DeviceStatusCard({
  deviceName,
  type,
  value,
  lastValue,
}: DeviceStatusCardProps) {
  const iconElement: React.ReactElement = useMemo(() => {
    const icons: ValueIcon = {
      temperature: (
        <DeviceThermostatIcon fontSize="large" style={{ color: "#EA5853" }} />
      ),
      humidity: <WaterDropIcon fontSize="large" style={{ color: "#53BFEA" }} />,
      earth: <LandslideIcon fontSize="large" style={{ color: "#AE7D3F" }} />,
      phosphate: <HexagonIcon fontSize="large" style={{ color: "#3FAE63" }} />,
    };

    return icons[type];
  }, [type]);

  const valueUOM = useMemo(() => {
    return UOMs[type];
  }, [type]);

  const indicator = useMemo(() => {
    if (value > lastValue) {
      return <ArrowDropUpIcon fontSize="large" style={{ color: "red" }} />;
    }

    return <ArrowDropDownIcon fontSize="large" style={{ color: "green" }} />;
  }, [value, lastValue]);

  return (
    <Card>
      <CardContent className="device-container">
        <div className="device-icon">{iconElement}</div>
        <div className="device-content">
          <p className="device-content-name">{deviceName}</p>
          <p className="device-content-title">{type}</p>
          <p className="device-content-value">
            {value} {valueUOM}
          </p>
        </div>
        <div className="device-last-value">
          {indicator} {lastValue} {valueUOM}
        </div>
      </CardContent>
    </Card>
  );
}

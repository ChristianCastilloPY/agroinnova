import { DeviceType } from "../models/IDevice";

export type UOMTypes = "°" | "%" | "earth" | "ph"

export type ValueUOM = {
  [key in DeviceType]: UOMTypes;
}

const UOMs: ValueUOM = {
  temperature: "°",
  humidity: "%",
  earth: "earth",
  phosphate: "ph",
};

export default UOMs;
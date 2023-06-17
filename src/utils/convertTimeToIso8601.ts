/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import empty from "is-empty";

export default function convertTimeToIso8601(date: string) {
  let parsedDate = "";
  if (!empty(date)) {
    parsedDate = new Date(date).toISOString();
  }
  return parsedDate;
}

import { memo } from "react";
import {
  CheckCircle as CheckCircleIcon,
  RemoveCircle as RemoveCircleIcon,
} from "@mui/icons-material";
import { EnumStatus } from "../../models/IUserLogin";

interface StatusBadgeComponentProps {
  status: EnumStatus;
}

function StatusBadgeComponent({ status }: StatusBadgeComponentProps) {
  return (
    <>
      <RemoveCircleIcon color="error" />
      <CheckCircleIcon color="success" />
    </>
  );
}

export default memo(StatusBadgeComponent);

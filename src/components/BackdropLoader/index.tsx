import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function SimpleBackdrop() {
  return (
    <div>
      <Backdrop sx={{ color: "#fff", zIndex: 99999 }} open>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

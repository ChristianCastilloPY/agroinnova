import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  const { value } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "50px" }}>
        <LinearProgress variant="determinate" value={value} />
      </Box>
    </Box>
  );
}

export default LinearProgressWithLabel;

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { ChevronRight } from "@mui/icons-material";
import { useSidebar } from "../../../../context/SidebarContext";

export default function FloatingActionButtonSize() {
  const { toggleSidebar } = useSidebar();
  return (
    <Box
      sx={{ "& > :not(style)": { m: 1 } }}
      className="float-button"
      onClick={toggleSidebar}
    >
      <Fab color="primary" aria-label="add">
        <ChevronRight />
      </Fab>
    </Box>
  );
}

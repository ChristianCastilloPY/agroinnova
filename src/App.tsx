import { memo, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import AppRoutes from "./routes";
import { useLoadingRequest } from "./context/BackdropLoaderContext";
import BackdropLoader from "./components/BackdropLoader";

import "./assets/scss/style.scss";

function App() {
  const { isLoadingRequest } = useLoadingRequest();
  useEffect(() => {
    if (isLoadingRequest) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoadingRequest]);

  return (
    <>
      {isLoadingRequest && <BackdropLoader />}
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}
export default memo(App);

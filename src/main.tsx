import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SnackbarProvider } from "notistack";
import { ToastContainer } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";
import "./assets/scss/style.scss";
import AppProviders from "./context";
import queryClient from "./services/queryClient";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#297348",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <ThemeProvider theme={theme}>
      <AppProviders>
        <SnackbarProvider maxSnack={4}>
          <App />
        </SnackbarProvider>
        <ReactQueryDevtools />
      </AppProviders>
    </ThemeProvider>
  </QueryClientProvider>
);

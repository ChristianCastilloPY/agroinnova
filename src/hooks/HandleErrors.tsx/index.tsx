import { toast } from "react-toastify";

export interface IHandleError {
  code?: string;
  message: string;
  data?: unknown;
}

export default function HandleError({ code, message }: IHandleError) {
  if (code === "00000") {
    return toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

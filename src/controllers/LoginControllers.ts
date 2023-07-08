/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IFormDataValues } from "../models/IUserLogin";
import { useLoadingRequest } from "../context/BackdropLoaderContext";
import HandleError from "../hooks/HandleErrors.tsx";

export default function LoginControllers() {
  const loadingRequest = useLoadingRequest();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const id = params.get("id") ?? undefined;
  const schema = yup
    .object({
      user: yup.string().required("Este campo es requerido"),
      password: yup.string().required("Este campo es requerido"),
    })
    .required();

  const {
    control: controlInputs,
    handleSubmit: handleSubmitData,
    formState: { errors: errorsData },
  } = useForm<IFormDataValues>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const onSendSubmit = async () => {
    try {
      loadingRequest.showLoading();
      //  function to login
      navigate("/agroinnova");
    } catch (error: any) {
      HandleError(error);
    } finally {
      loadingRequest.hiddenLoading();
    }
  };

  return {
    controlInputs: controlInputs as any,
    errorsData,
    handleSubmitData,
    onSendSubmit,
    id,
  };
}

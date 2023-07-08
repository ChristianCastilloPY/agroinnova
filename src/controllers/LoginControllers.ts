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
import { request, requestApi } from "../services/api";
import { adaptedUserToEndpointLogin } from "../adapters/userLogin";
import { useAuth } from "../context/AuthContext";

const { VITE_ASSET_URL } = import.meta.env;

export default function LoginControllers() {
  const loadingRequest = useLoadingRequest();
  const navigate = useNavigate();
  const { setTokensForUser, userTokens } = useAuth();
  const [params] = useSearchParams();
  const id = params.get("id") ?? undefined;
  const schema = yup
    .object({
      email: yup.string().required("Este campo es requerido"),
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
      email: "",
      password: "",
    },
  });

  const onSendSubmit = async (data: any) => {
    try {
      loadingRequest.showLoading();
      //  function to login
      await request({
        domain: VITE_ASSET_URL,
        method: "POST",
        path: "/login",
        bodyParams: adaptedUserToEndpointLogin(data),
      }).then((res) => {
        setTokensForUser(res.data.data.token);
        navigate("/");
      });
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

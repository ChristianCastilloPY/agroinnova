/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */
import { IUserLogin } from "../../../models/IUserLogin";
import { requestApi } from "../../../services/api";
import HandleError from "../../HandleErrors.tsx";

const { VITE_ASSET_URL_AUTH } = import.meta.env;

const getUserByToken = async (id: string) => {
  try {
    const res = await requestApi<IUserLogin>({
      domain: VITE_ASSET_URL_AUTH,
      method: "GET",
      path: `/api/v1/email/validate/${id}`,
    });
    return res;
  } catch (error: any) {
    HandleError(error);
    throw new Error(error);
  }
};

export default getUserByToken;

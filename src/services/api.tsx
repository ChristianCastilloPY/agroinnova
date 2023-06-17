/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import axios, { AxiosError } from "axios";
import empty from "is-empty";
import queryClient from "./queryClient";

interface IHeaders {
  authorization: string;
}

export interface IRequest {
  method: "GET" | "POST" | "DELETE" | "PUT";
  domain: string;
  path?: string;
  customHeaders?: { [key: string]: any };
  params?: { [key: string]: string | string[] | null };
  bodyParams?: { [key: string]: any };
  url?: string;
}

function logout() {
  queryClient.clear();
  window.location.href = "/login";
}

axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      logout();
    }

    return Promise.reject(error);
  }
);

export async function request({
  method,
  domain,
  path,
  customHeaders,
  params,
  bodyParams,
}: IRequest) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (!empty(customHeaders)) {
    Object.assign(headers, customHeaders);
  }

  const configAxios = {
    url: `${domain}${path}`,
    method,
    headers,
  };

  if (method === "GET") {
    Object.assign(configAxios, {
      params,
    });
  }

  if (method === "POST" || method === "PUT") {
    Object.assign(configAxios, {
      data: bodyParams,
    });
  }

  return axios(configAxios).catch((e) => {
    throw e;
  });
}

export async function requestApi<T>({
  domain,
  path,
  method,
  params,
  bodyParams,
  customHeaders,
}: IRequest): Promise<T> {
  const requestParams = {
    domain,
    method,
    path,
    params,
    bodyParams,
  };
  const headers: IHeaders = {} as IHeaders;

  const tokens = localStorage.getItem("token");
  const parseToken = JSON.parse(tokens || "{}");

  if (Object.keys(parseToken).length > 0) {
    headers.authorization = `Bearer ${parseToken.token}`;
  }

  Object.assign(requestParams, {
    customHeaders: { ...headers, ...customHeaders },
  });

  try {
    const response = await request(requestParams as IRequest).catch((e) => {
      throw e;
    });

    return response.data;
  } catch (error: any) {
    if (!error.response?.status) {
      logout();
    }
    throw { status: error.response?.status, ...error.response?.data };
  }
}

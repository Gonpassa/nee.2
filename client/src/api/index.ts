import { IApiRequestMethods, IApiRequestTypes, IRequestData, IResponseData } from "./apiTypes";
import { getUrl } from "./endpoints";
import axios from "axios";

interface IConfig {
  data?: IRequestData;
  urlParams?: string;
}

export async function api(method: IApiRequestMethods, type: IApiRequestTypes, config?: IConfig): Promise<IResponseData | undefined> {
  const url = getUrl(type, config?.urlParams);
  const requestBody = config?.data ?? undefined 

  const response = await axios({
    method,
    url,
    data: requestBody,
    headers: {
      'Content-Type': 'application/json',
    },
    baseURL: import.meta.env.VITE_API_URL
  })

  return response.data
} 
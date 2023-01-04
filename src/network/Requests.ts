import axios from 'axios';
import { Cookies } from 'react-cookie';

enum RequestMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

const cookies = new Cookies(document.cookie);
const requestForEntity = async <T>(
  uri: string,
  params: any,
  data: any,
  method: RequestMethod,
  retry: boolean = false
): Promise<T> => {
  const Authorization = cookies.get('accessToken');
  const headers = {
    Authorization: `Bearer ${Authorization}`,
  };
  try {
    const response = await axios(uri, {
      headers,
      method,
      params,
      data,
      baseURL: `http://3.34.194.171`,
    });

    return response.data;
  } catch (error) {
    alert(error);
    throw new HttpError(
      `Http Error \n` +
        `    uri: ${uri}\n` +
        `    method: ${method}\n` +
        `    params: ${JSON.stringify(params)}\n` +
        `    error: ${error}`
    );
  }
};
export const getForEntity = <T>(uri: string, params: { [key: string]: any }): Promise<T> => {
  return requestForEntity(uri, params, null, RequestMethod.GET);
};

export const postForEntity = <T>(uri: string, data: { [key: string]: any }): Promise<T> => {
  return requestForEntity(uri, null, data, RequestMethod.POST);
};

export const putForEntity = <T>(uri: string, data: { [key: string]: any }): Promise<T> => {
  return requestForEntity(uri, null, data, RequestMethod.PUT);
};

export const deleteForEntity = <T>(uri: string, params: { [key: string]: any }): Promise<T> => {
  return requestForEntity(uri, params, null, RequestMethod.DELETE);
};

export class HttpError extends Error {}

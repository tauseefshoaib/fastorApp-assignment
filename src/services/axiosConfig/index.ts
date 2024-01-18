import {store} from '../../store/store';
import axios from 'axios';

const getAccessToken = () => {
  const currentState = store.getState();
  const token = currentState.login?.loggedInUserDetails?.token;
  return token;
};

export const HTTP_METHODS = {
  GET: 'get',
  POST: 'post',
  PATCH: 'patch',
  DELETE: 'delete',
};

const axiosClient = axios.create({
  baseURL: 'https://staging.fastor.in/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 2000,
  withCredentials: true,
});

axiosClient.interceptors.request.use(function (config) {
  const accessToken = getAccessToken();
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export function getRequest(URL: string) {
  return axiosClient
    .get(URL)
    .then(response => response)
    .catch(err => console.error(err));
}

export function postRequest(URL: string, payload: any) {
  return axiosClient
    .post(URL, payload)
    .then(response => response)
    .catch(err => console.error(err));
}

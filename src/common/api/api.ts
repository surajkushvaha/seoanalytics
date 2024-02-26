import axios, { AxiosError } from 'axios';
import constants from './constants';
import { headers } from './headerConstant';

// @ts-ignore 
const authorizationToken = JSON.parse(localStorage.getItem('UserData'));
const apiBaseURL = constants.baseURL;

export const allApi = (dataurl: string, data: any, method: any) => {
    if (constants.method.post === method) {
        return axios.post(`${apiBaseURL}/${dataurl}`, data);
    }
    if (constants?.method.get === method) {
        return axios.get(`${apiBaseURL}/${dataurl}`);
    }
    if (constants?.method.delete === method) {
        return axios.delete(`${apiBaseURL}/${dataurl}`);
    }
    if (constants.method.put === method) {
        return axios?.put(`${apiBaseURL}/${dataurl}`, data);
    }
};

export const allApiWithHeaders = (
    dataurl: string,
    data: any,
    method: any,
    headerFlag: any = false
) => {
    headers.Authorization = `Bearer ${authorizationToken?.accessToken}`;
    const fileHeaders = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${authorizationToken?.accessToken}`,
    };
    let apiCall: any = '';
    if (constants.method.post === method) {
        apiCall = axios.post(`${apiBaseURL}/${dataurl}`, data, {
            headers: headerFlag ? fileHeaders : headers,
        });
        apiCall.catch((error: AxiosError) => {
            if (error?.response?.status === 401) {
                localStorage.removeItem('UserData');
            }
        });
        return apiCall;
    }
    if (constants.method.get === method) {
        apiCall = axios?.get(`${apiBaseURL}/${dataurl}`, { headers: headers });
        apiCall.catch((error: AxiosError) => {
            if (error?.response?.status === 401) {
                localStorage.removeItem('UserData');
            }
        });
        return apiCall;
    }
    if (constants.method.delete === method) {
        apiCall = axios?.delete(`${apiBaseURL}/${dataurl}`, {
            headers: headers,
        });
        apiCall.catch((error: AxiosError) => {
            if (error?.response?.status === 401) {
                localStorage.removeItem('UserData');
            }
        });
        return apiCall;
    }
    if (constants.method.put === method) {
        apiCall = axios?.put(`${apiBaseURL}/${dataurl}`, data, {
            headers: headerFlag ? fileHeaders : headers,
        });
        apiCall.catch((error: AxiosError) => {
            if (error?.response?.status === 401) {
                localStorage.removeItem('UserData');
            }
        });
        return apiCall;
    }
};
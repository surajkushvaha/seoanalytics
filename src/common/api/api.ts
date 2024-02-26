import axios, { AxiosError } from 'axios';
import { API_CONSTANTS } from '../constants/apiconstants';
import { headers } from './headerConstant';

// @ts-ignore 
const authorizationToken = JSON.parse(localStorage.getItem('UserData'));
const apiBaseURL = API_CONSTANTS.API_CONSTANT_URL;

export const callAPI = (dataurl: string, data: any, method: string) => {
    if (API_CONSTANTS.METHOD.POST === method) {
        return axios.post(`${apiBaseURL}/${dataurl}`, data);
    }
    if (API_CONSTANTS.METHOD.GET === method) {
        return axios.get(`${apiBaseURL}/${dataurl}`);
    }
    if (API_CONSTANTS.METHOD.DELETE === method) {
        return axios.delete(`${apiBaseURL}/${dataurl}`);
    }
    if (API_CONSTANTS.METHOD.PUT === method) {
        return axios.put(`${apiBaseURL}/${dataurl}`, data);
    }
};

export const callAPIWithHeaders = (
    dataurl: string,
    data: any,
    method: string,
    headerFlag: boolean = false
) => {
    headers.Authorization = `Bearer ${authorizationToken?.accessToken}`;
    const fileHeaders = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${authorizationToken?.accessToken}`,
    };
    let apiCall: any = '';
    if (API_CONSTANTS.METHOD.POST === method) {
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
    if (API_CONSTANTS.METHOD.GET === method) {
        apiCall = axios?.get(`${apiBaseURL}/${dataurl}`, { headers: headers });
        apiCall.catch((error: AxiosError) => {
            if (error?.response?.status === 401) {
                localStorage.removeItem('UserData');
            }
        });
        return apiCall;
    }
    if (API_CONSTANTS.METHOD.DELETE === method) {
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
    if (API_CONSTANTS.METHOD.PUT === method) {
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
import instance from "./axios";
import { getToken } from "../utils/localStorage";

const RequestApi = {
    get: function (url: string, extraHeaders?: any): any {
        return instance({
            method: "get",
            url,
            headers: { ...extraHeaders },
        });
    },
    getWithAuth: function (url: string, extraHeaders?: any): any {
        return instance({
            method: "get",
            url,
            headers: { ...extraHeaders, token: getToken() },
        });
    },
    post: function (url: string, data?: any, extraHeaders?: any): any {
        return instance({
            method: "post",
            url,
            data,
            headers: { ...extraHeaders },
        });
    },
    postWithAuth: function (url: string, data?: any, extraHeaders?: any): any {
        return instance({
            method: "post",
            url,
            data,
            headers: { ...extraHeaders, token: getToken() },
        });
    },
};

export default RequestApi;
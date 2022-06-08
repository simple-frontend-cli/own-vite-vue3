import RequestApi from "./services";

export const User = {
    login: (params: { name: string, password: string }) => RequestApi.post('/login', params)
}
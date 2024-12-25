import api from '@configs/axios';
import { LOGIN_ENDPOINT, LOGOUT_ENDPOINT, PROFILE_ENDPOINT } from '@configs/api-endpoints';

export const login = async (username: string, password: string) => {
    const response = await api.post(LOGIN_ENDPOINT, { username, password });
    return response.data;
};

export const logout = async () => {
    const response = await api.post(LOGOUT_ENDPOINT);
    return response.data;
};

export const getProfile = async () => {
    const response = await api.get(PROFILE_ENDPOINT);
    return response.data;
};

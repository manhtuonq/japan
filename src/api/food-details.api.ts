import api from '@configs/axios';
import { FOOD_DETAILS_ENDPOINT } from '@configs/api-endpoints';

export const getFoodDetailsById = async (id: string) => {
    try {
        const response = await api.get(`${FOOD_DETAILS_ENDPOINT}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch food details: ${error.message}`);
    }
};

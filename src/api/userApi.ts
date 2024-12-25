import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; // Lấy URL từ file môi trường
const API_TOKEN = import.meta.env.VITE_API_TOKEN; // Lấy token từ file môi trường

export const updateUser = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}/update_user`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`, // Nếu API yêu cầu token
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

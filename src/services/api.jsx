import axios from 'axios';

const apiClient = axios.create ({
    baseURL: 'http://localhost:3000/ebc/v1',
    timeout: 2000
})


export const register = async (data) => {
    try {
        console.log({ data });
        const response = await apiClient.post('/user/register', data);
        return response.data;
    } catch (e) {
        if (e.response) {
            // Respuesta de servidor con error (código 4xx o 5xx)
            return e.response.data;
        } else if (e.request) {
            // Error de solicitud
            return { error: true, message: 'No response from server' };
        } else {
            // Error en la configuración de axios
            return { error: true, message: e.message };
        }
    }
};
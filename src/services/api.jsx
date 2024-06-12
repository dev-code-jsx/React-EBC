import axios from 'axios';

const apiClient = axios.create ({
    baseURL: 'http://localhost:3000/ebc/v1',
    timeout: 2000
})


export const register = async (data) => {
    try {
        console.log('Data being sent to the server:', JSON.stringify(data, null, 2));
        const response = await apiClient.post('/user/register', data);
        return response.data;
    } catch (e) {
        if (e.response) {
            // Respuesta de servidor con error (código 4xx o 5xx)
            console.error('Server response error:', e.response.data);
            return e.response.data;
        } else if (e.request) {
            // Error de solicitud
            console.error('No response from server:', e.request);
            return { error: true, message: 'No response from server' };
        } else {
            // Error en la configuración de axios
            console.error('Axios configuration error:', e.message);
            return { error: true, message: e.message };
        }
    }
};
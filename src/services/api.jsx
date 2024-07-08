import axios from 'axios';

const apiClient = axios.create ({
    baseURL: 'https://node-ebc.vercel.app/ebc/v1',
    timeout: 2000
})

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user');
        if (userDetails) {
            const token = JSON.parse(userDetails).token;
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (e) => {
        return Promise.reject(e);
    }
);

export const login = async (data) => {
    try {
        return await apiClient.post('/login/auth', data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }    
}


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
export const addFavorite = async (data) => {
    try {
        const response = await apiClient.post('/account/addFavorite', data);
        return response.data;
    } catch (e) {
        if (e.response) {
            console.error('Server response error:', e.response.data);
            return e.response.data;
        } else if (e.request) {
            console.error('No response from server:', e.request);
            return { error: true, message: 'No response from server' };
        } else {
            console.error('Axios configuration error:', e.message);
            return { error: true, message: e.message };
        }
    }
};
export const transferFunds = async (data) => {
    try {
      const response = await apiClient.post('/transaction/transfer', data);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error('Server response error:', error.response.data);
        return error.response.data;
      } else if (error.request) {
        console.error('No response from server:', error.request);
        return { error: true, message: 'No response from server' };
      } else {
        console.error('Axios configuration error:', error.message);
        return { error: true, message: error.message };
      }
    }
  };


export const getServicios = async () => {
    try {
        return await apiClient.get('/service/getServices');
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

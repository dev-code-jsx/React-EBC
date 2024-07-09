import { data } from 'autoprefixer';
import axios from 'axios';

const apiClient = axios.create ({
    baseURL: 'https://node-ebc.vercel.app/ebc/v1',
    timeout: 5000
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

export const usersGet = async () => {
  try{
      return await apiClient.get('/user/users')
  }catch(e){
    return{
      error: true,
      e
    }
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
export const createTransaction = async (data) => {
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
export const createDeposit = async (data) =>{
    try {
      const response = await apiClient.post("/deposit/depositary", data);
      return response.data
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
}
export const getAccountDetails = async () => {
    try {
      return await apiClient.get('/account/accountDetails');
    } catch (e) {
      return {
        error: true,
        e
      };
    }
  };

export const registerService = async (data) => {
  try {
    return await apiClient.post("/service/addService", data);
  } catch (e) {
    return { error: true, e };
  }
};

export const updateService = async (id, data) => {
  try {
    return await apiClient.put(`/service/updateService/${id}`, data);
  } catch (e) {
    return { error: true, e };
  }
};

export const deleteService = async (id) => {
  try {
    return await apiClient.delete(`/service/deleteService/${id}`);
  } catch (e) {
    return { error: true, e };
  }
};

export const convertCurrency = async (data) => {
  try {
      return await apiClient.post('/currency/convert', data)
  } catch (e) {
    return {
      error: true,
      message: e.response?.data?.message || e.message,
  };
  }
}

export const changePassword = async (data) => {
  try {
    return await apiClient.patch('/account/changePassword', data)
  } catch (e) {
    return {
      error: true,
      e
    }
  }
}

export const getAccountsAsc = async (orden) => {
  try {
    console.log('Orden:', orden);
    return await apiClient.get(`/account/accounts-by-movements/${orden}`);
  } catch (e) {
    return {
      error: true,
      e
    };
  }
}

export const getUserDetails = async () => {
  try {
    return await apiClient.get('/account/myAccountD');
  } catch (e) {
    return {
      error: true,
      e
    };
  }
};

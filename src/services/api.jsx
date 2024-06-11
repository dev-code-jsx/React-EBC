import axios from 'axios';

const apiClient = axios.create ({
    baseURL: 'http://localhost:3000/ebc/v1';
    timeout: 2000
})

/*apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user')
        if (userDetails) {
            const token = JSON.parse(userDetails || {}).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)*/
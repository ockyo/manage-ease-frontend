import axios from 'axios';

class ApiService {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        this.api.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
        this.api.interceptors.response.use(
            (response) => response,
            (error) => {
                console.log(error.response);
                return Promise.reject(error);
            }
        );
    }
    get(endpoint, params = {}) {
        return this.api.get(endpoint, { params });
    }
    post(endpoint, data = {}) {
        return this.api.post(endpoint, data);
    }

    put(endpoint, data = {}) {
        return this.api.put(endpoint, data);
    }

    delete(endpoint) {
        return this.api.delete(endpoint);
    }
}

const apiService = new ApiService(import.meta.env.VITE_API_URL);
export default apiService;
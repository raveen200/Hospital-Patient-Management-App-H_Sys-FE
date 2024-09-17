import axios from "axios";
import Cookies from 'js-cookie'

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token'); // Read token from cookie
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

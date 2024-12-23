import axios from 'axios';


const authApi = axios.create({
  baseURL: "https://api.amaar.uz",
  timeout: 10000, 
  withCredentials:true
});

authApi.interceptors.request.use(
  (config) => {
    console.log('Auth Interceptor ishlamoqda',config);
    const token = localStorage.getItem('acessToken'); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default authApi;

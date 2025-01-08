import axios from 'axios';


const authApi = axios.create({
  baseURL: "https://dtm.dtpi-dictionary.uz",
  timeout: 10000,
});

authApi.interceptors.request.use(
  (config) => {
    console.log('Auth Interceptor ishlamoqda',config);
    const token = sessionStorage.getItem('accessToken');
    if (token) {config.headers['Authorization'] = `Bearer ${token}`;}
    return config;
  },
  (error) => {
      console.log('Response Data:', error.response.data);
  }
);



export default authApi;

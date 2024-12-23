import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'https://api.amaar.uz/', 
  timeout: 10000,
  headers:{'Content-Type':'application/json'}
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default apiClient;

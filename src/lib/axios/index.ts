import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'https://dtm.dtpi-dictionary.uz',
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

export const endpoints = {

  auth: {
    signIn: '/login/',  // post
    signUp: '/register/',  //post
  },
  categories: '/categories/', //get
  exam:{
    create: '/create-exam/',  //post
    exams:'/exams/'  ,//get
    start:'/start-exam/',  //:id post
    user:'/user-exams',
  complited: '/complete-exam/',  //:id post
  },
  profile: '/profile/', //:id get,
  submit: '/submit-answer/', //:id post
  topics: '/topics/',  // get
  upload: '/upload-tests/',  //post
};



export default apiClient;

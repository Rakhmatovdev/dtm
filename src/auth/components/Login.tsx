import { TLogin } from "@/types";
import { useForm, SubmitHandler } from "react-hook-form";
import apiClient from '../../lib/axios/index';
import {  useNavigate } from "react-router";
import { useEffect } from "react";
 
const Login = () => {
  const { register, handleSubmit ,formState: { errors },reset } = useForm<TLogin>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TLogin> = async  data =>{

      const response = await  apiClient.post('/admin/login/', {
        ...data
      });
      
      const token =  response.data.token;
 
      localStorage.setItem('acessToken', token);
      navigate('/')
    
    reset()
    }

    
    const token = localStorage.getItem('acessToken');
    useEffect(() => {
      if (token) {
        navigate('/'); 
      }
    },[token]);

  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 h-screen flex justify-center items-center">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-[360px] sm:w-full">
      
      <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                      <label htmlFor="login" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Login</label>
                      <input type="text" id="login" className="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Login..." {...register('login',{ required: true })}/>
                      {errors.login && <span className="text-rose-500">This field is required</span>}
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password"  id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('password',{required:true,minLength:4})} />
                      {errors.password && <span className="text-rose-500">This field is required already 4 characters</span>}
                  </div>
                  <div className="flex items-center justify-between">
                     
                     
                  </div>
                  <button type="submit" className=" w-full text-white bg-gradient-to-r from-indigo-800 from-10% via-sky-800 via-30% to-emerald-800 to-90%  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800">Sign in</button>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Login
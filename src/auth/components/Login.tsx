import { useForm, SubmitHandler } from "react-hook-form";
import {Link, useNavigate} from "react-router";
import { useEffect } from "react";
import AuthService  from "@/services/auth-service.ts";
import {LoginData} from "@/types";
import { notification } from "antd";

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginData>();
    const navigate = useNavigate();

    // Handle form submission
    const onSubmit: SubmitHandler<LoginData> = async (data) => {
        try {
            const token = await AuthService.login(data);
            if (token) {
                navigate('/');
                reset();
            }

        } catch (error: any) {
            console.error(error.message);
            notification.error({message: error.message});
        }
    };

    
    useEffect(() => {
        if (AuthService.isAuthenticated()) {
            navigate('/'); 
        }
    }, []);

    return (
        <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 h-screen flex justify-center items-center">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-[360px] sm:w-full">
                <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Login..."
                                    {...register("username", { required: "This field is required" })}
                                />
                                {errors.username && <span className="text-rose-500">{errors.username.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Login..."
                                    {...register("email", { required: "This field is required" })}
                                />
                                {errors.email && <span className="text-rose-500">{errors.email.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    {...register("password", {
                                        required: "This field is required",
                                        minLength: { value: 3, message: "Password must be at least 3 characters" },
                                    })}
                                />
                                {errors.password && <span className="text-rose-500">{errors.password.message}</span>}
                            </div>
                            <div>
                                <span className={'text-xs font-semibold text-slate-500'}>Do you don't have account ? </span><Link className={'text-xs font-semibold hover:underline'} to={'/register'}>
Sign up
                            </Link>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-gradient-to-r from-indigo-800 via-sky-800 to-emerald-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;

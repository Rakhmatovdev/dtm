import { ModeToggle } from "@/components/theme/mode-toggle";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/schema/login.schema";
import { Link } from "react-router";
import { zodResolver } from "../../../node_modules/@hookform/resolvers/zod/src/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
const Login = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);

  }

  return (
    <div className="bg-foreground w-full h-screen   text-white">
      <div className="flex">
        <img  src={"/public/login.jpg"}  alt="gfc" className=" w-1/2 h-screen dark:bg-primary-foreground bg-white"/>
        <div className=" w-full h-screen ">
          <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
               <div className="w-full flex justify-end">   <ModeToggle /></div>
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>
                  <Form {...form}>
                    <form
                      className="space-y-4 md:space-y-6"
                      onSubmit={form.handleSubmit(onSubmit)}
                    >
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Your email
                            </Label>
                            <FormControl>
                              <Input
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-sm text-rose-500 " />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Your password
                            </Label>
                            <FormControl>
                              <Input
                                type="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="••••••••"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-sm text-rose-500 " />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="remember"
                        render={({field} )=> (
                          <FormItem className="flex items-center justify-between">
                            <div className="flex items-start">

                            <FormControl className="flex items-center h-5" >
                              {/* @ts-ignore */}
                              <Input
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                             {...field}
                             />
                            </FormControl>
                           <div className="ml-3 text-sm">
                           <Label className="text-gray-500 dark:text-gray-300">
                              Remember me
                            </Label>
                           </div> </div>
                            <a
                              href="#"
                              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                              Forgot password?
                            </a>
                          
                         </FormItem>
                        )}
                      />

                     
                      <Button
                        type="submit"
                        className="w-full text-white  bg-blue-500   hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
                      >
                        Sign in
                      </Button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet?{" "}
                        <Link
                          to={"/register"}
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500 "
                        >
                          Sign up
                        </Link>
                      </p>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;

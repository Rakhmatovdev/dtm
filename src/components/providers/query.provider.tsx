
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import { ChildrenProps, IError } from "@/types";
import {FC} from "react";


const onHandleError = (error:Error | IError) => {
if ((error as IError).response?.data?.message) {
return (error as IError).response.data.message
}
return 'Something went wrong'
}

const queryClient = new QueryClient({
    defaultOptions:{
        mutations:{onError:onHandleError}
    }
})
const QueryProvider:FC<ChildrenProps> = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default QueryProvider;
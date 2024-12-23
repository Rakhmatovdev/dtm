import UBreadcrumb from "@/components/ui/UBreadcrumb";
import UCheckbox from "@/components/ui/UCheckbox";
import USDelete from "@/components/ui/USDelete";
import {  TDeleted } from "@/types";
import { itemsAdd, Dproducts} from "@/types/data";
import {  SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router";

const Adds = () => {
 
   const {
      control,
      handleSubmit
    } = useForm({defaultValues:{
      is_deleted:'',
      delete_id:null
    }})

     const onSubmit: SubmitHandler<TDeleted> = (data) => console.log(data)

  return (
    <div className="h-[86.2vh]">
  

<UBreadcrumb items={itemsAdd} btn={{title:"Add",link:"add"}}/>

     <form className="" onSubmit={handleSubmit(onSubmit)} >
  <USDelete control={control} select={1} count={2}/>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 sm:mt-7">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-2 sm:p-4">
                <div className="flex items-center">
                <UCheckbox control={control} name="all-check"/>
                </div>
              </th>
              <th scope="col" className="tp">
                UUID
              </th>
              <th scope="col" className="tp">
                Product
              </th>
              <th scope="col" className="tp ">
                Russian Image Preview
              </th>

              <th scope="col" className="tp ">
                English Image Preview
              </th>
            </tr>
          </thead>
          <tbody>
            {Dproducts &&
              Dproducts.map((product) => (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-2 p-2 sm:w-4 sm:p-4">
                    <div className="flex items-center">
                      <UCheckbox name="delete_id"
                       control={control}/>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="tp font-medium text-gray-900  dark:text-white"
                  >
                   <Link  to={`${product.id}/change`}>{product.id}</Link> 
                  </th>
                  <td className="tp">{product.product}</td>
                  <td className="tp ">
                    <img
                      src={product.image_ru}
                      alt={product.product}
                      className="w-12 h-12 sm:w-32 sm:h-32 rounded-full"
                    />
                  </td>

                  <td className="tp">
                    <img
                      src={product.image_ru}
                      alt={product.product}
                      className="h-12 w-12 sm:w-32 sm:h-32 rounded-full"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
     </form>
    </div>
  );
};

export default Adds;

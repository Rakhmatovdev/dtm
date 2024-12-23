import UBreadcrumb from "@/components/ui/UBreadcrumb";
import UCheckbox from "@/components/ui/UCheckbox";
import USDelete from "@/components/ui/USDelete";
import { TDeleted } from "@/types";
import { Dcompany, itemCompany} from "@/types/data";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router";

const Company = () => {
  const {
        control,
        handleSubmit
      } = useForm({defaultValues:{
        is_deleted:'',
        delete_id:null
      }})
  
       const onSubmit: SubmitHandler<TDeleted> = (data) => console.log(data)


  return (
    <div className="h-[86.2vh]" >

<UBreadcrumb items={itemCompany} btn={{link:'add',title:'Add'}}/>

<form onSubmit={handleSubmit(onSubmit)}>
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
                Name
              </th>
              <th scope="col" className="tp">
           Callcenter
              </th>
              <th scope="col" className="tp ">
              Mail
              </th>

              <th scope="col" className="tp ">
              Free delivery 
              </th>
              <th scope="col" className="tp ">
              Delivery price 
              </th>
            </tr>
          </thead>
          <tbody>
            {Dcompany &&
              Dcompany.map((product) => (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="sm:w-4 p-2 sm:p-4">
                    <div className="flex items-center">
                      <UCheckbox name={product.id} control={control}/>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="tp font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                   <Link to={`${product.id}/change`}>{product.name}</Link> 
                  </th>
                  <td className="tp">{product.callcenter}</td>
                  <td className="tp">{product.mail}</td>
                  <td className="tp">{product.free_delivery}.0</td>
                  <td className="tp">{product.delivery_price}.0</td>
                  

                </tr>
              ))}
          </tbody>
        </table>
      </div>
</form>
 
      </div>
  )
}

export default Company
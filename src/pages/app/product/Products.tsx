import UBreadcrumb from "@/components/ui/UBreadcrumb"
import UCheckbox from "@/components/ui/UCheckbox"
import UInput from "@/components/ui/UInput"
import USDelete from "@/components/ui/USDelete"
import { TDeleted } from "@/types"
import { DProducts, itemProducts} from "@/types/data"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router"

const Products = () => {
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
<UBreadcrumb items={itemProducts} btn={{link:'add',title:'Add'}}/>
<form className="" onSubmit={handleSubmit(onSubmit)}>
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
                ID
              </th>
            
              <th scope="col" className="tp ">
               Title en
              </th>
              <th scope="col" className="tp ">
               Title <ruby></ruby>
              </th>
              <th scope="col" className="tp ">
              Price
              </th>
              <th scope="col" className="tp ">
              Discount price
              </th>
              <th scope="col" className="tp ">
              Is discounted
              </th>
              <th scope="col" className="tp ">
              Is show new arrival
              </th>
              <th scope="col" className="tp ">
              Is best sellers
              </th>
              <th scope="col" className="tp ">
              Is recommended
              </th>
              <th scope="col" className="tp ">
              Category
              </th>
              <th scope="col" className="tp ">
              Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {DProducts &&
              DProducts.map((product) => (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className=" p-2 sm:p-4">
                    <div className="flex items-center">
                      <UCheckbox control={control} name={product.id}/>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="tp  font-medium text-gray-900 w-40 dark:text-white"
                  >
                  <Link to={`${product.id}/change`}>  {product.id}</Link>
                  </th>
                  <td className="tp ">{product.title_en}</td>
                  <td className="tp ">{product.title_ru}</td>
                  <td className="tp "><UInput type='number' value={(product.price)} disabled name="" className="w-20 text-center" control={control}/></td>
                  <td className="tp ">{product.discount_price}</td>
                  <td className="tp "> 
                  <UCheckbox control={control} name="is_discounted"/>   
                      </td>
                  <td className="tp ">
                    <UCheckbox control={control} name="is_show_new_arrival"/>
                      </td>
                  <td className="tp ">
                    <UCheckbox control={control} name="is_best_sellers"/>
                      </td>
                  <td className="tp ">
                     <UCheckbox control={control} name="is_recommended"/>
                      </td>
                        <td className="tp ">{product.category}</td>
                        <td className="tp ">{product.quantity}.0</td>
                 
                </tr>
              ))}
          </tbody>
        </table>
      </div></form>
      
      </div>
  )
}

export default Products

import UBreadcrumb from "@/components/ui/UBreadcrumb";
import UFile from "@/components/ui/UFile";
import USelect from "@/components/ui/USelect";
import { TAdsD } from "@/types";
import { itemAddD, OProduct } from "@/types/data";
import { EditOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons"
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
const AddDetail = () => {
const id=uuidv4()
   const {
      control,
      handleSubmit
    } = useForm({
        defaultValues:{
            product:"",
            image_ru:"",
            image_en:"",
         id
        }
    })

     const onSubmit: SubmitHandler<TAdsD> = (data) => console.log(data)

    return (
        <div className="h-[86.2vh]" >
     <UBreadcrumb items={itemAddD}/>
          
<div className="mt-7">
<form className="flex gap-4 flex-col sm:flex-row"  onSubmit={handleSubmit(onSubmit)}>
    <div className="border p-4 w-full rounded space-y-2">
<div className="flex sm:flex-row flex-col sm:items-center justify-start sm:gap-28">
    <span className="utext  sm:pr-[4px]">Product  </span>
<div className="flex sm:flex-row flex-col sm:gap-10 gap-2">
<div className="w-48 " >
 
 <USelect className="sm:h-9 mt-1 sm:w-[200px]" options={OProduct} control={control} name="product"/>
</div>
<div className="flex sm:gap-4 gap-2">

<EditOutlined className="sm:text-xl text-sm text-amber-600"/>
<PlusOutlined className="sm:text-xl text-sm text-green-500"/>
<EyeOutlined className="text-blue-500 text-sm sm:text-xl"/>
</div>
</div>

</div>

<div className="fff sm:gap-24">
<p className="utext">Image ru <span className="text-rose-500">*</span></p>

<UFile/>

</div>

<div className="fff sm:gap-24">
<p className="utext  ">Image en<span className="text-rose-500">*</span></p>
<UFile/>

</div>

<div className="fff sm:gap-32">
<p className="utext  pr-[10px]">UUID</p>
<div className="text-sm">{id}</div>
</div>

</div>

<div className="space-y-4  flex flex-col  ">
    <button className="btn-save">Save</button>
    
</div>

</form>

</div>


          </div>
      )
}

export default AddDetail
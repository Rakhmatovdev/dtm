import UBreadcrumb from "@/components/ui/UBreadcrumb";
import UFile from "@/components/ui/UFile";
import UInput from "@/components/ui/UInput";
import { TCategorieD } from "@/types";
import { itemCategorieD } from "@/types/data";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
const CategorieDetail = () => {
    const id=uuidv4()
    const {
        control,
        handleSubmit
      } = useForm({defaultValues:{
        title_ru:"",
        title_en:"",
        icon:"",
        id
      }})
  
       const onSubmit: SubmitHandler<TCategorieD> = (data) => console.log(data)

    return (
        <div className="h-[86.2vh]" >
    <UBreadcrumb items={itemCategorieD}/>
          
<form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
<div className="flex gap-4 flex-col sm:flex-row ">
    <div className="border p-4 w-full rounded space-y-2">

<div className="fff  sm:gap-32">
<p className="utext  sm:pr-[18px]">Title ru <span className="text-rose-500">*</span></p>
<UInput className="sm:w-[300px] sm:h-9" name="title_ru" control={control}/>
</div>
<div className="fff  sm:gap-32">
<p className="utext  sm:pr-[19px]">Title en<span className="text-rose-500">*</span></p>
<UInput className="sm:w-[300px] sm:h-9" name="title_en" control={control}/>
</div>

<div className="fff  sm:gap-24">
<p className="utext  pr-[71px]">Icon <span className="text-rose-500">*</span></p>
<UFile />
</div>

<div className="fff  sm:gap-32">
<p className="utext  sm:pr-[44px]">UUID</p>
<div className="text-sm sm:text-base">{id}</div>
</div>

</div>

<div className="space-y-4  flex flex-col ">
    <button type="submit" className="btn-save">Save</button>
</div>

</div>

</form>


          </div>
      )
}

export default CategorieDetail
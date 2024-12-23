import UBreadcrumb from "@/components/ui/UBreadcrumb";
import UCKeditor from "@/components/ui/UCKeditor";
import { TContactD} from "@/types";
import { itemContactsD } from "@/types/data";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

const ContactDetail = () => {
    const id=uuidv4();
  const {
        handleSubmit
      } = useForm({defaultValues:{
        title_ru:'',
        title_en:'',
        id
      }})
  
       const onSubmit: SubmitHandler<TContactD> = (data) => console.log(data)
    return (
        <div className="h-[86.2vh]" >
        <UBreadcrumb items={itemContactsD}/>
          
<form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
<div className="flex gap-4 flex-col sm:flex-row">
    <div className="border p-4 w-full rounded space-y-2">

<div className="fff sm:gap-6">
<p className="utext ">Title ru <span className="text-rose-500">*</span></p>
<UCKeditor />
</div>
<div className="fff sm:gap-6">
<p className="utext ">Title en<span className="text-rose-500">*</span></p>
<UCKeditor/>
</div>

<div className="fff sm:gap-4">
<p className="utext sm:pr-[px]">UUID</p>
<div className="text-sm sm:text-base" >{id}</div>
</div>

</div>

<div className="space-y-4  flex flex-col  ">
    <button  className="btn-save  ">Save</button>
</div>

</div>

</form>


          </div>
      )
}

export default ContactDetail
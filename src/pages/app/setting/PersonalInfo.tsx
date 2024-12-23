import UInput from "@/components/ui/UInput"
import { TDeleted } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";

const PersonalInfo = () => {
     const {
             control,
             handleSubmit
           } = useForm({defaultValues:{
             is_deleted:'',
             delete_id:null
           }})
       
            const onSubmit: SubmitHandler<TDeleted> = (data) => console.log(data)
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-full rounded space-y-2">
    <div className="fff  sm:gap-32">
      <p className=" sm:text-lg font-semibold sm:pr-[22px]">
        Full Name <span className="text-rose-500">*</span>
      </p>
      <UInput name="name" control={control} className="sm:w-[495px] sm:h-9" />
    </div>

  
    <div className="fff  sm:gap-44">
      <p className="sm:text-lg font-semibold pr-[12px]">
        Email <span className="text-rose-500">*</span>
      </p>
      <UInput
        name="email"
        control={control}
        className="sm:w-[495px] sm:h-9"
      />
    </div>
    <div className="fff  sm:gap-32">
      <p className="sm:text-lg font-semibold sm:pr-[52px]">
       Phone <span className="text-rose-500">*</span>
      </p>
      <UInput name="phone" control={control} className="sm:w-[495px] sm:h-9" />
    </div>
  </form>
  )
}

export default PersonalInfo
import UBreadcrumb from "@/components/ui/UBreadcrumb";
import UFile from "@/components/ui/UFile";
import UInput from "@/components/ui/UInput";
import { TCompanyD} from "@/types";
import { itemCompanyD } from "@/types/data";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const CompanyDetail = () => {
  const id = uuidv4();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      logo: "",
      callcenter: "",
      mail: "",
      address_ru: "",
      address_en: "",
      free_delivery: "",
      delivery_price: "",
      id,
    },
  });

  const onSubmit: SubmitHandler<TCompanyD> = (data) => console.log(data);
  return (
    <div className="h-[86.2vh]">
    <UBreadcrumb items={itemCompanyD}/>

      <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="border p-4 w-full rounded space-y-2">
            <div className="fff sm:gap-32">
              <p className="utext sm:pr-[32px]">
                Name <span className="text-rose-500">*</span>
              </p>
              <UInput name="name" control={control} className="sm:w-[495px] sm:h-9" />
            </div>

            <div className="fff sm:gap-24">
              <p className="utext pr-[72px]">
                Logo <span className="text-rose-500">*</span>
              </p>
              <UFile />
            </div>
            <div className="fff sm:gap-32">
              <p className="utext ">
                Callcenter<span className="text-rose-500">*</span>
              </p>
              <UInput
                name="callcenter"
                control={control}
                className="sm:w-[495px] sm:h-9"
              />
            </div>
            <div className="fff sm:gap-32">
              <p className="utext sm:pr-[52px]">
                Mail<span className="text-rose-500">*</span>
              </p>
              <UInput name="mail" control={control} className="sm:w-[495px] sm:h-9" />
            </div>
            <div className="fff sm:gap-28">
              <p className="utext pr-[7px]">
                Address ru <span className="text-rose-500">*</span>
              </p>
              <UInput
                name="address_ru"
                control={control}
                className="sm:w-[495px] sm:h-9"
              />
            </div>
            <div className="fff sm:gap-28">
              <p className="utext pr-[8px]">
                Address en<span className="text-rose-500">*</span>
              </p>
              <UInput
                name="address_en"
                control={control}
                className="sm:w-[495px] sm:h-9"
              />
            </div>
            <div className="fff sm:gap-24">
              <p className="utext pr-[18px]">Free delivery</p>
              <UInput
                name="free_delivery"
                control={control}
                className="sm:w-[247px] sm:h-9"
                type="number"
              />
            </div>

            <div className="fff sm:gap-24">
              <p className="utext pr-[11px]">Delivery price</p>
              <UInput
                name="delivery_price"
                control={control}
                className="sm:w-[247px] sm:h-9"
                type="number"
              />
            </div>
          </div>

          <div className="space-y-4  flex flex-col  ">
            <button type="submit" className="btn-save  ">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CompanyDetail;

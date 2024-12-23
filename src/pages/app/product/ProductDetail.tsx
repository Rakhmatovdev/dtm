import UBreadcrumb from "@/components/ui/UBreadcrumb";
import UCheckbox from "@/components/ui/UCheckbox";
import UCKeditor from "@/components/ui/UCKeditor";
import UFile from "@/components/ui/UFile";
import UInput from "@/components/ui/UInput";
import USelect from "@/components/ui/USelect";
import { TProductD } from "@/types";
import { itemProductsD, OGender, OProduct } from "@/types/data";
import { EditOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const ProductDetail = () => {
const id=uuidv4();
  const {
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      title_ru: "",
      title_en: "",
      price:0,
      description_ru:"",
      description_en:"",
      gender:"",
      discount_price:0,
      is_discounted:false,
      is_show_new_arrival:false,
      is_best_sellers:false,
      is_recommended:false,
      category:"",
      quantity:1,
      id
    },
  })
    const onSubmit: SubmitHandler<TProductD> = (data) => console.log(data)
  return (
    <div className="h-[86.2vh]">
     <UBreadcrumb items={itemProductsD} />

      <div className="mt-7">
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 flex-col sm:flex-row">
          <div className="border p-4 w-full space-y-2 rounded">

            {/* title */}
            <div className="fff  sm:gap-20 ">
              <p className="utext pr-[9px]">
                Title ru <span className="text-rose-500">*</span>
              </p>
              <UInput className="sm:max-w-[794px] sm:h-9" name="title_ru" control={control} />
            </div>
            <div className="fff  sm:gap-20">
              <p className="utext pr-[10px]">
                Title en<span className="text-rose-500">*</span>
              </p>
              <UInput className="sm:max-w-[794px] h-9" name="title_en" control={control}/>
            </div>

  {/* price  */}
            <div className="fff  sm:gap-24">
              <p className="utext pr-[9px]">
                Price <span className="text-rose-500">*</span>
              </p>
              <UInput className="sm:w-[200px] sm:h-9" type="number" control={control} name='price'/>
            </div>

{/* Description  */}
            <div className="fff  sm:gap-7">
              <p className="utext w-[132px]">
                Description ru <span className="text-rose-500">*</span>
              </p>
              <UCKeditor/>
            </div>
            <div className="fff  sm:gap-7">
              <p className="utext ">
                Description en<span className="text-rose-500">*</span>
              </p>
              <UCKeditor />
            </div>

{/* gender */}
            <div className="fff  sm:gap-20">
              <p className="utext pr-[4px]">
                Gender <span className="text-rose-500">*</span>
              </p>
              <USelect options={OGender} className="sm:h-9 sm:w-[200px]" name="gender" control={control}/>
            </div>
{/* d price  */}
            <div className="fff  sm:gap-6">
              <p className="utext ">
                Discount price <span className="text-rose-500">*</span>
              </p>
              <UInput className="sm:w-[200px] sm:h-9" type="number" control={control} name="discount_price" />
            </div>

{/* checkbox */}
            <div className="flex items-center justify-between sm:justify-start gap-11">
              <p className="utext pr-[1px]">Is discounted</p>
              <div className="">
                <UCheckbox
                name="is_discounted"
                control={control}
                  className=""
                />
               
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-start  gap-12">
              <p className="utext pr-[7px]">Is show new</p>
              <div className="fff">
              <UCheckbox
                name="is_show_new_arrival"
                control={control}
                  className=""
                />
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-start  gap-10">
              <p className="utext pr-[2px]">Is best sellers</p>
              <div className="fff">
              <UCheckbox
                name="is_best_sellers"
                control={control}
                  className=""
                />
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-start  gap-4">
              <p className="utext pr-[1px]">Is recommended</p>
              <div className="fff">
              <UCheckbox
                name="is_recommended"
                control={control}
                  className=""
                />
              </div>
            </div>



{/* category */}
            <div className="fff justify-start sm:gap-16 ">
              <span className="utext pr-[3px]">
                Category <span className="text-rose-500">*</span>{" "}
              </span>
              <div className="flex sm:gap-10 gap-2">
                <div className="sm:w-48 w-4">
                  <USelect className="sm:h-9 sm:w-[200px]" options={OProduct} name="category" control={control} />
                </div>
                <div className="flex gap-4">
                  <EditOutlined className="text-xl text-amber-600" />
                  <PlusOutlined className="text-xl text-green-500" />
                  <EyeOutlined className="text-blue-500 text-xl" />
                </div>
              </div>
            </div>

{/* quantity */}
            <div className="fff  sm:gap-16">
              <p className="utext pr-[9px]">
                Quantity <span className="text-rose-500">*</span>
              </p>
              <UInput className="sm:w-[200px] sm:h-9" type="number" name='quantity' control={control}/>
            </div>
{/* image  */}
            <div className="fff  sm:gap-20">
              <p className="utext pr-[13px]">
                Image <span className="text-rose-500">*</span>
              </p>

              <UFile />
            </div>
          </div>

          <div className=" ">
            <button type="submit" className="px-[80px] rounded font-bold text-white py-2 bg-blue-500">Save</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;

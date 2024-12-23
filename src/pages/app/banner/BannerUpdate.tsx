import UFile from "@/components/ui/UFile";
import UInput from "@/components/ui/UInput";
import USelect from "@/components/ui/USelect";
import { TBannerD } from "@/types";
import { itemBannerD, OProduct } from "@/types/data";
import { EditOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router";
import UBreadcrumb from "@/components/ui/UBreadcrumb";

const BannerUpdate = () => {
    
    const { id } = useParams<{ id: string }>();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            product: "",
            image_ru: "",
            image_en: "",
            title: "",
            id: id || uuidv4(),
        },
    });

    const onSubmit: SubmitHandler<TBannerD> = (data) => console.log(data);

    return (
        <div className="h-[86.2vh]">
         <UBreadcrumb items={itemBannerD} />
            <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-4 flex-col sm:flex-row ">
                    <div className="border p-4 w-full space-y-2 rounded">
                        <div className="fff justify-start sm:gap-28">
                            <span className="utext sm:pr-[4px]">Product</span>
                            <div className="fff sm:gap-10 gap-2">
                                <form className="sm:w-48 ">
                                    <USelect
                                        options={OProduct}
                                        className="sm:h-9 sm:w-[200px]"
                                        control={control}
                                        name="product"
                                    />
                                </form>
                                <div className="flex sm:gap-4 gap-2">
                                    <EditOutlined className="text-sm sm:text-xl text-amber-600" />
                                    <PlusOutlined className="text-sm sm:text-xl text-green-500" />
                                    <EyeOutlined className="text-blue-500 text-sm sm:text-xl" />
                                </div>
                            </div>
                        </div>

                        <div className="fff  sm:gap-24">
                            <p className="utext pr-[1px]">
                                Image ru <span className="text-rose-500">*</span>
                            </p>
                            <UFile />
                        </div>

                        <div className="fff  sm:gap-24">
                            <p className="utext pr-[1px]">
                                Image en<span className="text-rose-500">*</span>
                            </p>
                            <UFile />
                        </div>

                        <div className="fff  sm:gap-32">
                            <p className="utext sm:pr-[17px]">Title</p>
                            <UInput className="sm:w-[200px] sm:h-9" name="title" control={control} />
                        </div>
                        <div className="fff  sm:gap-32">
                            <p className="utext sm:pr-[10px]">UUID</p>
                            <div className="text-sm sm:text-base">{id}</div>
                        </div>
                    </div>

                    <div className="space-y-3 flex flex-col">
                        <button type="submit" className="btn-save">
                            Save
                        </button>
                        <button type="submit" className="btn-delete">
                           Delete
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BannerUpdate;
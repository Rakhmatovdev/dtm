import UBreadcrumb from "@/components/ui/UBreadcrumb";
import UFile from "@/components/ui/UFile";
import USelect from "@/components/ui/USelect";
import { TAdsD } from "@/types";
import { itemAddD, OProduct } from "@/types/data";
import { EditOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";

const AddUpdate = () => {
    const { id } = useParams<{ id: string }>();

    const { control, handleSubmit } = useForm({
        defaultValues: {
            product: "",
            image_ru: "",
            image_en: "",
            id: id || uuidv4(),
        },
    });

    const onSubmit: SubmitHandler<TAdsD> = (data) => console.log(data);

    return (
        <div className="h-[86.2vh]">
          <UBreadcrumb items={itemAddD} />

            <div className="mt-7">
                <form className="flex gap-4 flex-col sm:flex-row" onSubmit={handleSubmit(onSubmit)}>
                    <div className="border p-4 w-full rounded space-y-2">
                        <div className="fff justify-start sm:gap-28">
                            <span className="utext sm:pr-[4px]">Product</span>
                            <div className="fff  sm:gap-10 gap-2">
                                <div className="w-48">
                                    <USelect className="sm:h-9 mt-1 sm:mt-0 sm:w-[200px]" options={OProduct} control={control} name="product" />
                                </div>
                                <div className="flex gap-2 sm:gap-4">
                                    <EditOutlined className="text-xm sm:text-xl text-amber-600" />
                                    <PlusOutlined className="text-xm sm:text-xl text-green-500" />
                                    <EyeOutlined className="text-blue-500 text-xm sm:text-xl" />
                                </div>
                            </div>
                        </div>

                        <div className="fff  sm:gap-24">
                            <p className="utext">
                                Image ru <span className="text-rose-500">*</span>
                            </p>
                            <UFile />
                        </div>

                        <div className="fff  sm:gap-20">
                            <p className="utext  pr-[12px] ">
                                Image en <span className="text-rose-500">*</span>
                            </p>
                            <UFile />
                        </div>

                        <div className="fff  sm:gap-32">
                            <p className="utext pr-[10px]">UUID</p>
                            <div className="text-sm">{id}</div>
                        </div>
                    </div>

                    <div className="space-y-3 flex flex-col">
                        <button type="submit" className="btn-save">Save</button>
                        <button className="btn-delete">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUpdate;
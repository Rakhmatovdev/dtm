import UBreadcrumb from "@/components/ui/UBreadcrumb";
import UFile from "@/components/ui/UFile";
import USelect from "@/components/ui/USelect";
import { TProductImageD } from "@/types";
import { itemProductsImageD, OProduct } from "@/types/data";
import { EditOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router";
import { v4 as uuidv4 } from 'uuid';

const ProductImageUpdate = () => {
    const { id } = useParams<{ id: string }>();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            product: '',
            image: '',
            id:id || uuidv4()
        }
    });

    const onSubmit: SubmitHandler<TProductImageD> = (data) => console.log(data);

    return (
        <div className="h-[86.2vh]">
       <UBreadcrumb items={itemProductsImageD} />

            <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-4 flex-col sm:flex-row">
                    <div className="border p-4 w-full rounded space-y-2">
                        <div className="fff justify-start sm:gap-20">
                            <span className="text-lg font-semibold">Product <span className="text-rose-500">*</span></span>
                            <div className="fff sm:gap-10 gap-2">
                                <USelect className="sm:h-9 sm:w-[200px]" options={OProduct} name="product" control={control} />
                                <div className="flex sm:gap-4 gap-2">
                                    <EditOutlined className="text-sm sm:text-xl text-amber-600" />
                                    <PlusOutlined className="text-sm sm:text-xl text-green-500" />
                                    <EyeOutlined className="text-blue-500 text-sm sm:text-xl" />
                                </div>
                            </div>
                        </div>

                        <div className="fff  sm:gap-24">
                            <p className="text-lg font-semibold">Image <span className="text-rose-500">*</span></p>
                            <UFile  />
                        </div>
                    </div>

                    <div className="space-y-3 flex flex-col">
                        <button type="submit" className="btn-save">Save</button>
                        <button type="submit" className="btn-delete">Delete</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProductImageUpdate;
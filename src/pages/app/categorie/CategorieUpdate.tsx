
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { TCategorieD } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { itemCategorieD } from "@/types/data";
import UInput from "@/components/ui/UInput";
import UFile from "@/components/ui/UFile";
import { v4 as uuidv4 } from 'uuid';
import UBreadcrumb from "@/components/ui/UBreadcrumb";

const CategorieUpdate = () => {
    const { id } = useParams<{ id: string }>();
    const {
        control,
        handleSubmit,
        setValue
    } = useForm<TCategorieD>({
        defaultValues: {
            title_ru: "",
            title_en: "",
            icon: "",
            id: id ||  uuidv4()
        }
    });

    useEffect(() => {
        if (id) {
            axios.get(`/api/categories/${id}`)
                .then(response => {
                    const { title_ru, title_en, icon } = response.data;
                    setValue("title_ru", title_ru);
                    setValue("title_en", title_en);
                    setValue("icon", icon);
                    setValue("id", id);
                })
                .catch(error => console.error("Error fetching category data:", error));
        }
    }, [id, setValue]);

    const onSubmit: SubmitHandler<TCategorieD> = (data) => {
        axios.put(`/api/categories/${id}`, data)
            .then(response => console.log("Category updated:", response.data))
            .catch(error => console.error("Error updating category:", error));
    };

    return (
        <div className="h-[86.2vh]">
          <UBreadcrumb items={itemCategorieD}/>

            <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-4 flex-col sm:flex-row ">
                    <div className="border p-4 w-full rounded space-y-2">
                        <div className="fff  sm:gap-32">
                            <p className="utext sm:pr-[18px]">Title ru <span className="text-rose-500">*</span></p>
                            <UInput className="sm:w-[300px] sm:h-9" name="title_ru" control={control} />
                        </div>
                        <div className="fff  sm:gap-32">
                            <p className="utext sm:pr-[14px]">Title en <span className="text-rose-500">*</span></p>
                            <UInput className="sm:w-[300px] sm:h-9" name="title_en" control={control} />
                        </div>
                        <div className="fff  sm:gap-24">
                            <p className="utext pr-[71px]">Icon <span className="text-rose-500">*</span></p>
                            <UFile/>
                        </div>
                        <div className="fff  sm:gap-32">
                            <p className="utext sm:pr-[44px]">UUID</p>
                            <div className="text-sm sm:text-base">{id}</div>
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
}

export default CategorieUpdate;
import React, { useEffect, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Select, Upload } from 'antd';
import type { UploadProps, UploadFile } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import UInput from "@/components/ui/UInput";
import UBreadcrumb from "@/components/ui/UBreadcrumb";
import {  itemUpload } from "@/types/data";
import { useMutation } from '@tanstack/react-query';
import myServices from '@/services';
import { Option } from 'antd/es/mentions';
import examService from '@/services/exam-service';

interface FormData {
  category_id: string;
  topic_name: string;
  file: UploadFile[];
}

const UploadTests: React.FC = () => {
  const { control, handleSubmit, formState: { errors },reset } = useForm<FormData>({
    defaultValues: {
      category_id: '',
      topic_name: '',
      file: [],
    },
  });

  const [category, setCategory] = useState<string>('');

      const handleSelect = (value: string) => {
        setCategory(value)
      };




  const uploadProps: UploadProps = {
    beforeUpload: () => false, 
    multiple: false, 
    onChange: ({ fileList }) => {
      if (fileList.length > 1) {
        fileList = [fileList[fileList.length - 1]];
      }
      return fileList;
    },
  };


  const {mutate:catmutate,data:catData}=useMutation({
    mutationKey:['category'],
    mutationFn: myServices.categorys,
    onError: (error) => {
        // @ts-ignore
        message.error('Mutation failed:', error.message);
    },
})
  const {mutate}=useMutation({
    mutationKey:['upload'],
    mutationFn: examService.upload,
    onSuccess: (data) => {
        message.success( data.message);
        setCategory('')
        reset()

    },
    onError: (error) => {
        // @ts-ignore
        message.error('Mutation failed:', error.message);
    },
})

 useEffect(() => {
       catmutate()
    }, []);



  const onSubmit = (data: FormData) => {
    mutate({...data, category_id: category})
    console.log('Submitted Data:', {...data, category_id: category});
  };

  return (
    <div className="soh">
      <UBreadcrumb items={itemUpload} />

      <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="border p-4 w-full rounded space-y-2">
          <div className="flex sm:flex-row flex-col sm:items-center justify-start sm:gap-28">
                            <span className="utext  ">Category <span className="text-rose-500">*</span></span>
                            <Select className="sm:w-[200px]" onChange={handleSelect} placeholder="Category">
      {catData && catData.results.map((category:any)=><Option key={category.id} value={category.id}>{category.name}</Option>)}
    </Select>
                        </div>
            <div className="fff sm:gap-20">
              <p className="utext sm:pr-[10px]">Topic Name <span className="text-rose-500">*</span></p>
              <UInput className="sm:w-[200px]" name="topic_name" control={control} />
            </div>
            <div className="fff sm:gap-36">
              <p className="utext pr-[15px]">File <span className="text-rose-500">*</span></p>
              <Controller
                name="file"
                control={control}
                rules={{ 
                  required: 'Faylni yuklash majburiy' 
                }}
                render={({ field }) => (
                  <Upload 
                    {...uploadProps} 
                    fileList={field.value} 
                    onChange={({ fileList }) => field.onChange(fileList.slice(-1))}>
                    <Button icon={<UploadOutlined />}>Fayl yuklash</Button>
                  </Upload>
                )}
              />
              {errors.file && <p className="text-red-500">{errors.file.message}</p>}
            </div>
          </div>

          <div className="space-y-4 flex flex-col">
            <button type="submit" className="btn-save">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadTests;

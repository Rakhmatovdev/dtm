import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';
import { Button, Upload } from 'antd';

interface AppProps {
    
  }

const UFile: React.FC<AppProps> = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handleChange: UploadProps['onChange'] = (info) => {
    let newFileList = [...info.fileList];

    newFileList = newFileList.slice(-2);


    newFileList = newFileList.map((file) => {
      
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  };

  const props = {
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange: handleChange,
    multiple: true,
  };
  return (
    <Upload {...props} fileList={fileList} className='fff sm:gap-2'>
      <Button className='sm:h-9' icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};

export default UFile;
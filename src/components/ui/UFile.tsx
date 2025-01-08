import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, message } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import axios from 'axios';

const UFile: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // Fayl yuklashni oldini olish va faylni saqlash
  const beforeUpload = (file: UploadFile) => {
    setFileList((prevList) => [...prevList, file]); // Faylni mahalliy holatda saqlash
    return false; // Faylni avtomatik yuklashni to'xtatish
  };

  // Fayllarni qo'lda yuborish
  const handleUpload = async () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files', file as any); // Fayllarni qo'shish
    });

    try {
      const response = await axios.post('YOUR_UPLOAD_ENDPOINT_URL', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      message.success('Fayllar muvaffaqiyatli yuborildi');
      console.log('Server javobi:', response);
    } catch (error) {
      message.error('Fayllarni yuborishda xato yuz berdi');
      console.error('Xato:', error);
    }
  };

  return (
    <div>
      <Upload
        beforeUpload={beforeUpload}
        fileList={fileList}
        multiple
      >
        <Button icon={<UploadOutlined />}>Fayl tanlash</Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        style={{ marginTop: 16 }}
      >
        Yuborish
      </Button>
    </div>
  );
};

export default UFile;

import React, { useState } from 'react';
import { Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
function CoverImage({setImage}) {

    const [imageUrl, setImageUrl] = useState(null);

  const handleChange = info => {
 
    if (info.file.status === 'done') {
    
      const fileList = [...info.fileList];
    if (fileList.length > 1) {
      fileList.splice(0, 1);
    }

    setImage(fileList[0]?.originFileObj)
  
      const url = URL.createObjectURL(info.file.originFileObj);
      setImageUrl(url);

      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const uploadButton = (
    <div style={{ textAlign: 'center' }}>
      <PlusOutlined style={{ fontSize: '24px', color: '#999' }} />
      <div style={{ marginTop: '8px', color: '#999' }}>Add a cover</div>
    </div>
  );

    return (
        <Upload
      name="cover"
      listType="picture-card"
      showUploadList={false}
      beforeUpload={file => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG files!');
          return Upload.LIST_IGNORE;
        }
        return true;
      }}
      onChange={handleChange}
      customRequest={({ file, onSuccess }) => {
        // Simulate a successful upload without making a request
        setTimeout(() => {
          onSuccess("ok");
        }, 0);
      }}
    >
      {imageUrl ? <img src={imageUrl} alt="cover" style={{ width: '100%' }} /> : uploadButton}
    </Upload>
      );
}

export default CoverImage
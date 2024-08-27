import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import ProfileTab from './ProfileTab';
import { SettingOutlined} from '@ant-design/icons';
import { Button } from 'antd';


const Profile = () => {
    const user = {
        name: 'Suraj Bisht',
        username: 'suraj0101',
        profileImage: '', // Add the initial profile image URL if available
      };
  const [image, setImage] = useState(user.profileImage || '');
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_cloudinary_preset'); // Change this to your Cloudinary upload preset

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/your_cloudinary_name/image/upload', formData);
      setImage(response.data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
   <div className="flex flex-col items-center justify-center p-6 bg-yellow-500 text-white">
      <div className="relative w-32 h-32 mb-4">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          {image ? (
            <img src={image} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-white" />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              Add Image
            </div>
          )}
        </div>
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-gray-300">@{username}</p>
      <div className="flex mt-4 space-x-4">
        <div className="text-center">
          <p className="text-lg font-bold">0</p>
          <p className="text-sm">Works</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">1</p>
          <p className="text-sm">Reading List</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">0</p>
          <p className="text-sm">Followers</p>
        </div>
      </div>
      <Button className='mt-6 px-4 py-2 rounded shadow ' icon={<SettingOutlined />}>Edit Profile</Button>
      {/* <button icon className="mt-6 px-4 py-2 bg-white text-yellow-500 rounded shadow hover:bg-gray-100 transition">Edit Profile</button> */}
    </div>
  
<ProfileTab />
    </>
 
  );
};

export default Profile;

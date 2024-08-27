import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FaImage, FaVideo } from 'react-icons/fa';

export const HeaderComponent = () => {

    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="#">
            Untitled Story
          </a>
        </Menu.Item>
      </Menu>
    );
  
    return (
      <div className="w-full shadow-md flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <Button type="text" className="">
            <i className=" fas fa-arrow-left"></i>
          </Button>
          <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/150" alt="User" />
          <Dropdown overlay={menu} trigger={['click']}>
            <Button type="text">
              Untitled Story <DownOutlined />
            </Button>
          </Dropdown>
          <h2 className="text-lg font-semibold">Untitled Part 1</h2>
          <p className="text-gray-500">Draft (0 Words) Saving...</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button type="primary">Publish</Button>
          <Button>Save</Button>
          <Button>Preview</Button>
          <Button shape="circle">...</Button>
        </div>
      </div>
    );
  };
  
  export const EditorComponent = () => {
    return (
      <div className="bg-gray-200 flex justify-center items-center py-20">
        <div className="flex space-x-2">
          <Button type="default" shape="round" icon={<FaImage />} size="large" />
          <Button type="default" shape="round" icon={<FaVideo />} size="large" />
        </div>
      </div>
    );
  };
import React, { useState } from 'react';
import { MenuOutlined, DownOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Button } from 'antd';

const Header2 = () => {
  const [selectedChapter, setSelectedChapter] = useState('Untitled Part 2');

  const handleMenuClick = (e) => {
    setSelectedChapter(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="New Joining">
        <div className="flex justify-between">
          <span>New Joining</span>
          <span className="text-gray-500 text-sm">Draft - Aug 01, 2024</span>
        </div>
      </Menu.Item>
      <Menu.Item key="Untitled Part 2">
        <div className="flex justify-between">
          <span>Untitled Part 2</span>
          <CheckCircleOutlined />
          <span className="text-gray-500 text-sm">Draft - Jul 30, 2024</span>
        </div>
      </Menu.Item>
      <Menu.Item key="New Part" className="flex justify-center">
        <Button type="primary" className="bg-orange-500">
          + New Part
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 text-xl">
          <MenuOutlined />
        </button>
        <img
          src="/hero-stories/1.jpg"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <Dropdown overlay={menu} trigger={['click']}>
          <div className="flex items-center space-x-2 cursor-pointer">
            <div>
              <h2 className="text-lg font-semibold">{selectedChapter}</h2>
              <p className="text-sm text-gray-500">
                Draft (1 Word) <span className="text-teal-500">Saving...</span>
              </p>
            </div>
            <DownOutlined />
          </div>
        </Dropdown>
      </div>
      <div className="flex items-center space-x-2">
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Publish
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-md hidden md:inline-block">
          Save
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-md hidden md:inline-block">
          Preview
        </button>
      </div>
    </header>
  );
};

export default Header2;

import React from 'react';
import { Tabs, Button, Space, Avatar } from 'antd';
import {AndroidOutlined, SettingOutlined, PlusOutlined } from '@ant-design/icons';
import Profile from './temp/Profile';
import { AppleOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;

const ProfileTab = () => {
  return (
    <div className="bg-white p-4 shadow flex flex-col md:flex-row justify-between items-center">
      <Tabs defaultActiveKey="1" className="flex-1 w-full md:w-auto">
          
     
        <TabPane
          tab={
            <span>
              <AppleOutlined />
              About
            </span>
          }
          key="1"
        >
        <div><Profile />    </div> 
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              Conversations
            </span>
          }
          key="2"
        >
          <Conversations />
        </TabPane>
        <TabPane
          tab={
            <span>
              <AppleOutlined />
              Following
            </span>
          }
          key="3"
        >
          <Following />
        </TabPane>

        <Button icon={<SettingOutlined />}>Edit Profile</Button>
      </Tabs>
     
   
    </div>
  );
};

const About = () => <div>About Content</div>;
const Conversations = () => <div>Conversations Content</div>;
const Following = () => <div>Following Content</div>;

export default ProfileTab;

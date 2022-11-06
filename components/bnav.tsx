import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';

const items: MenuProps['items'] = [
  {
    label: 'General Secretary',
    key: 'mail:1',
    //icon: <MailOutlined />,
  },
  {
    label: 'Associate Heads',
    key: 'mail:2',
    //icon: <MailOutlined />,
  },
  {
    label: 'Managers',
    key: 'SubMenu',
    //icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: '',
        children: [
          {
            label: 'Career Development Wing',
            key: 'setting:1',
          },
          {
            label: 'International Relations Wing',
            key: 'setting:2',
          },
          {
            label: 'Research Wing',
            key: 'setting:3',
          },
          {
            label: 'Academics Wing',
            key: 'setting:4',
          },
          {
            label: 'Web Development Wing',
            key: 'setting:5',
          },
        ],
      },
    ],
  }
];
const NavB: React.FC = () => {
    const [current, setCurrent] = useState('mail');
  
    const onClick: MenuProps['onClick'] = e => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>;
  };
  
  export default NavB;

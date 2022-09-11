import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from "./navbar.module.css";

const NavBar = () => {
    const [current, setCurrent] = useState('mail');
    const items: MenuProps['items'] = [
        {
          label: 'Carrer Development',
          key: 'mail',
          icon: <MailOutlined />,
        },
        {
          label: 'Research',
          key: 'app',
          icon: <AppstoreOutlined />,
          disabled: false,
        },
        {
            label: 'Internationl Relation',
            key: 'app1',
            icon: <AppstoreOutlined />,
            disabled: false,
          },
        
        {
          label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          ),
          key: 'alipay',
        },
      ];

      const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        setCurrent(e.key);
      };
      return (<div className={styles.navbar}><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}  className={styles.navbar2}/></div>)

}

export default NavBar
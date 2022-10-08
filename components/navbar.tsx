import { Button, Dropdown, Menu } from 'antd';

import styles from "./navbar.module.css";

const NavBar = () => {
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item
            </a>
          ),
        },
      ]}
    />
  );
    
      return(<div className={styles.navBar}>
        
    <Dropdown overlay={menu} placement="bottomLeft"  arrow >
      <Button className={styles.buttonMenu}>Wings</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="bottomLeft" arrow >
      <Button className={styles.buttonMenu}>Portal</Button>
    </Dropdown>
    <div className={styles.logo}></div>
    <Dropdown   className={styles.buttonMenu} overlay={menu} placement="bottomLeft" arrow >
      <Button  >Blog</Button>
    </Dropdown>
    <Dropdown  overlay={menu} placement="bottomLeft" arrow >
      <Button  className={styles.buttonMenu}>Meet the Team</Button>
    </Dropdown>
    </div>) 

}

export default NavBar
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
        
        <Dropdown  overlay={menu} placement="bottomLeft"   >
      <Button style={{
              marginLeft: '20px',
              color: 'white',
              backgroundColor: 'transparent',
              }} >bottomLeft</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="bottomLeft" arrow >
      <Button style={{
              marginLeft: '20px',
              color: 'white',
              backgroundColor: 'transparent',
              }}>bottomLeft</Button>
    </Dropdown>
    <div className={styles.logo}></div>
    <Dropdown   className={styles.buttonMenu} overlay={menu} placement="bottomLeft" arrow >
      <Button  style={{
              marginLeft: '20px',
              color: 'white',
              backgroundColor: 'transparent',
              }}>bottomLeft</Button>
    </Dropdown>
    <Dropdown  overlay={menu} placement="bottomLeft" arrow >
      <Button style={{
              marginLeft: '20px',
              color: 'white',
              backgroundColor: 'black',
              
            }} className={styles.buttonMenu}>bottomLeft</Button>
    </Dropdown>
    </div>) 

}

export default NavBar
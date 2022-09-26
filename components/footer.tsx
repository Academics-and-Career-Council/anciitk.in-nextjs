import styles from "./footer.module.css";
import { Button, Dropdown, Menu } from 'antd';
import App1 from "./form"
import { useState } from "react";
var i=0;
const Footer=()=>{
  const [form1,setForm]=useState("");
  const trrr=()=>{
    i++;
    if (i%2===0){
      setForm("uu")
    }else{
      setForm("")
    }
  }  
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
    return(<>
       <div className={styles["form"+form1]}>
  <App1></App1></div>
  <div className={styles.footer}>
    <Dropdown overlay={menu} placement="bottomLeft" arrow className={styles.buttonMenu}>
    <Button>bottomLeft</Button>
  </Dropdown>
  <Dropdown overlay={menu} placement="bottomLeft" arrow className={styles.buttonMenu}>
    <Button>bottomLeft</Button>
  </Dropdown>
  <Dropdown overlay={menu} placement="bottomLeft" arrow className={styles.buttonMenu}>
    <Button>bottomLeft</Button>
  </Dropdown>
  <Dropdown overlay={menu} placement="bottomLeft" arrow className={styles.buttonMenu}>
    <Button>bottomLeft</Button>
  </Dropdown>
  <button className={styles["formButton"]} onClick={trrr} >display</button>
  </div>
  
  </>

    )

}
export default Footer;
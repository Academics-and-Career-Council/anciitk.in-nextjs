import React from 'react';
import 'antd/dist/antd.css';
import { Button, Dropdown, Menu, Space } from 'antd';
import styles from './../styles/ug_acads.module.css';
import { builtinModules } from 'module';
const portals = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://pingala.iitk.ac.in/IITK-0/login">
            Pingala
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
const organisations = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="#">
            Students' Senate Nominees to DUGC
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="#">
            Students' Senate Nominees to DUGC
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="#">
            List of HODs
          </a>
        ),
      },
    ]}
  />
);
const Manuals = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="#">
            UG Manual
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="#">
            PG Manual
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="#">
            Course Template (B.Tech, BS, Dual Degree)
          </a>
        ),
      },
    ]}
  />
);

const Calender = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="#">
            Exam schedule
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="#">
            Academic Calender
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="#">
            Course Template (B.Tech, BS, Dual Degree)
          </a>
        ),
      },
    ]}
  />
);
function App(props: any) {
  return (
    // <div >
    <div className={styles.comp}>
      <Space direction="vertical">
        <Space wrap>
          <Dropdown overlay={props.data} placement="bottom" className={styles.drop}>
            <Button className={styles.element}>{props.name}</Button>
          </Dropdown>
        </Space>
      </Space>
    </div>
  )
};
function ug_acads() {
  return (
    <div className={styles.space}>
      <div className={styles.layer}>
        <div className={styles.text}>Quick links</div>
        <hr className={styles.hr}></hr>
        <div style={{marginTop:30,}}>
          <App data={portals} name={"Portals"} />
          <App data={organisations} name={"organisations"} />
          <App data={Manuals} name={"Manuals"} />
          <App data={Calender} name={"Calender"} />
        </div>
      </div>
    </div>
  )
}
export default ug_acads;
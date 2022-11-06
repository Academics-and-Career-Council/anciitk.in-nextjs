import React from 'react';
import 'antd/dist/antd.css';
import { Button, Dropdown, Menu, Space } from 'antd';
import sty from './../styles/ug_acads.module.css';
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
            Course Template 
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
    //   {
    //     key: '3',
    //     label: (
    //       <a target="_blank" rel="noopener noreferrer" href="#">
    //         Course Template (B.Tech, BS, Dual Degree)
    //       </a>
    //     ),
    //   },
    ]}
  />
);
function Links(props: any) {
  return (
    // <div >
    <div className={sty.comp}>
      <Space direction="vertical">
        <Space wrap>
          <Dropdown overlay={props.data} placement="bottom" className={sty.drop}>
            <Button className={sty.element}>{props.name}</Button>
          </Dropdown>
        </Space>
      </Space>
    </div>
  )
};
function ug_acads_links() {
  return (
    <div className={sty.space}>
        sample text spacing
      {/* <div className={sty.layer}>
        <div className={sty.text}>Quick links</div>
        <hr className={sty.hr}></hr>
        <div className={sty.text2} style={{s}}>Here are the links for the purpose of navigation and<br/> more data cab be written here so as to make it look good <br/>this sections is divided into multiple links</div>
        <div className={sty.tttt}>
          <Links data={portals} name={"Portals"} />
          <Links data={organisations} name={"organisations"} />
          <Links data={Manuals} name={"Manuals"} />
          <Links data={Calender} name={"Calender"} />
        </div>
      </div> */}
    </div>
  )
}
export default ug_acads_links;

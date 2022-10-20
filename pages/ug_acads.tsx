import React from 'react';
import styles from "../styles/timeline_ug.module.css"
import sty from "../styles/ugacads.module.css"
import 'antd/dist/antd.css';
import { Button, Dropdown, Menu, Space } from 'antd';
import { builtinModules } from 'module';
import { callbackify } from 'util';



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
const temp=(
  <Menu items={[]}></Menu>
)
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

const UgAcads= ()=> {
  return (
    <>
    <body className={sty.body}>
    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans&display=swap" rel="stylesheet"/>
    <div className={sty.div1}>
      <div><h1 className={sty.heading1}>UG/PG Academics Wing</h1>
      
      </div>
      <div><p className={sty.para1}>The UG/PG Academics Wing takes up the responsibility of the academics related work of the Academic and Career Council. It acts as an interface between the institute policy makers and the students on matters related to academia. The wing endeavors to protect the students’ academic interests and is the voice of the student body on this front.</p></div>
    
    </div>
    <div className={sty.div2}>
      <div className={sty.obj}>
      <h1 className={sty.heading2}>Objectives</h1>
    
    
    <script>var mountNode = document.getElementById('container');</script>
  

    <div className={styles.timeline}>
  <div className={styles.container+" "+styles.left}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.contact}></i>
    <div className={styles.content}>
      {/* <h1 className={styles.h1T}>UG/PG Academics</h1> */}
      <p>
      Helping the students to contact Institute bodies for academics and related purposes
      </p>
    </div>
  </div>
  <div className={styles.container+" "+styles.right}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.coordinate}></i>
    <div className={styles.content}>
      {/* <h1 className={styles.h1T}>Research</h1> */}
      <p>
      Assisting and Coordinating with students senate nominees to Academic committees of the Institute
      </p>
    </div>
  </div>
  <div className={styles.container+" "+styles.left}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.rules}></i>
    <div className={styles.content}>
      {/* <h1 className={styles.h1T}>International Relation</h1> */}
      <p>
      Spreading importance about academic policies, rules & regulations, and changes in them
      </p>
    </div>
  </div>
  <div className={styles.container+" "+styles.right}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.gather}></i>
    <div className={styles.content}>
      {/* <h1 className={styles.h1T}>Career Development</h1> */}
      <p>
      Gathering students opinion on matters of critical importance. Conducting academic orientation sessions
      </p>
    </div>
  </div>
  {/* <div className={styles.container+" "+styles.left}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.facog}></i>
    <div className={styles.content}>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>
  <div className={styles.container+" "+styles.right}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.facertificate}></i>
    <div className={styles.content}>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div> */}
</div>
</div>
</div>
    
<div className={sty.layer}>
        <div className={sty.text}>Quick links</div>
        <hr className={sty.hr}></hr>
        <div className={sty.text2} >Here are the links for the purpose of navigation and<br/> more data cab be written here so as to make it look good <br/>this sections is divided into multiple links</div>
        <div className={sty.tttt}>
          <Links data={portals} name={"Portals"} />
          <Links data={organisations} name={"organisations"} />
          <Links data={Manuals} name={"Manuals"} />
          <Links data={Calender} name={"calender"} />
        </div>
        <div className="test"></div>
      </div>




</body>
    
    
</>
  )
}

export default UgAcads
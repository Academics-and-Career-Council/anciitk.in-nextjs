import 'antd/dist/antd.css';
import { Row, Col} from "antd";
import React from 'react';
import Master from '../components/master';
import pic from "../public/image/abhinav.jpg";

export default function Comp3() {
  return (
    <div style={{width:"100%", marginTop:"10%"}}>
    <Row>
      <Col span={8}><Master imgs={pic} mailer="mailto:abhinav4437@gmail.com"/></Col>
      <Col span={8}><Master imgs={pic} mailer="mailto:abhinav4437@gmail.com"/></Col>
      <Col span={8}><Master imgs={pic} mailer="mailto:abhinav4437@gmail.com"/></Col>
    </Row>
    </div>
  );
}


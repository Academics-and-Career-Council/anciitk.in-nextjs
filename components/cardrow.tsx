import 'antd/dist/antd.css';
import { Row, Col} from "antd";
import React from 'react';
import Master from '../components/master';

export default function Comp4() {
  return (
    <div style={{width:"100%", marginTop:"10%"}}>
    <Row>
      <Col span={6}><Master /></Col>
      <Col span={6}><Master/></Col>
      <Col span={6}><Master/></Col>
      <Col span={6}><Master/></Col>
    </Row>
    </div>
  );
}


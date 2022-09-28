import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { AutoComplete, Avatar, Card } from 'antd';
import React from 'react';
const { Meta } = Card;

const Member = () => (
  <Card
    style={{
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'

    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
);

export default Member;
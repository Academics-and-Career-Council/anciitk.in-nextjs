import type { RadioChangeEvent } from 'antd';
import { Radio, Space, Tabs } from 'antd';
import React, { useState } from 'react';



type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const Tabss: React.FC = () => {
  const [tabPosition, setTabPosition] = useState<TabPosition>('bottom');

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  return (
    <>
      {/* <Space style={{ marginBottom: 24 }}>
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space> */}
      <Tabs
        tabPosition={tabPosition}
        items={new Array(4).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: (<div style={{height: "100%"}} ></div>),
          };
        })}
      />
    </>
  );
};

export default Tabss;
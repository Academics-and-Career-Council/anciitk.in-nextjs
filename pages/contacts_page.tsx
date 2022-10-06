import Comp3 from "../components/cardrow2";
import Comp4 from "../components/cardrow";
import {Radio} from 'antd';
import React, { useState } from 'react';
// import style from '../styles/myCards.module.css';
// import myFunction from "../components/myFunction";
import back from '../public/image/bg.jpg';
export default function contacts_page () {
    const [tab, setTab] = useState('0');

    return (
       <div style={{ backgroundImage: `url(${back})` }}>
            <h1>Academics and Career Council</h1>
            {tab==='0'? <h1>Meet The Team</h1> : null}
           {tab==='1'? <div><Comp3/></div> : null}
           {tab==='2'? <div><Comp4/></div> : null}
           <Radio.Group value={tab} onChange={e => setTab(e.target.value)} style={{bottom:'0', position:'fixed'}}>
            <Radio.Button value='1'>Small Team</Radio.Button>
            <Radio.Button value='2'>Big Team</Radio.Button>
            <Radio.Button value='0'>Meet The Team</Radio.Button>
            
        </Radio.Group>
           
        </div> 
    )
}
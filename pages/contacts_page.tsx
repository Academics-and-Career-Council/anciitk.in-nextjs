
import style from "../styles/new.module.css";
import {Radio} from 'antd';
import React, { DetailedReactHTMLElement, useState } from 'react';
import Master from "../components/master";

// import New from "../components/new";
import contact from "../components/contact";
// import style from '../styles/myCards.module.css';
// import myFunction from "../components/myFunction";
import back from '../public/image/bg.jpg';
import pic from "../public/image/abhinav.jpg";
import team from "../components/contact";

export default function contacts_page (){
    const [tab, setTab] = useState('0');
    // const con = contact;
    function createEntry(teamMate : any) {
        if(tab==='1') {
            if(teamMate.pos === "gs")
            return (
                <div className={style.subcontainer}> <Master name={teamMate.name} email={teamMate.email} ldin={teamMate.ldin} imgs={teamMate.imgs} fb={teamMate.fb} tel={teamMate.phone} user={teamMate.user} idd={teamMate.key}/></div>
            );
        }
        else if(tab==='2') {
            if(teamMate.pos === "ah")
            return (
                <div className={style.subcontainer}> <Master name={teamMate.name} email={teamMate.email} ldin={teamMate.ldin} imgs={teamMate.imgs} fb={teamMate.fb} tel={teamMate.phone} user={teamMate.user} idd={teamMate.key}/></div>
            );
        }
        else if(tab==='3') {
            if(teamMate.pos === "cd")
            return (
                <div className={style.subcontainer}> <Master name={teamMate.name} email={teamMate.email} ldin={teamMate.ldin} imgs={teamMate.imgs} fb={teamMate.fb} tel={teamMate.phone} user={teamMate.user} idd={teamMate.key}/></div>
            );
        }
        else if(tab==='4') {
            if(teamMate.pos === "ir")
            return (
                <div className={style.subcontainer}> <Master name={teamMate.name} email={teamMate.email} ldin={teamMate.ldin} imgs={teamMate.imgs} fb={teamMate.fb} tel={teamMate.phone} user={teamMate.user} idd={teamMate.key}/></div>
            );
        }
        else if(tab==='5') {
            if(teamMate.pos === "rw")
            return (
                <div className={style.subcontainer}> <Master name={teamMate.name} email={teamMate.email} ldin={teamMate.ldin} imgs={teamMate.imgs} fb={teamMate.fb} tel={teamMate.phone} user={teamMate.user} idd={teamMate.key}/></div>
            );
        }
        else if(tab==='6') {
            if(teamMate.pos === "aw")
            return (
                <div className={style.subcontainer}> <Master name={teamMate.name} email={teamMate.email} ldin={teamMate.ldin} imgs={teamMate.imgs} fb={teamMate.fb} tel={teamMate.phone} user={teamMate.user} idd={teamMate.key}/></div>
            );
        }
        else if(tab==='7') {
            if(teamMate.pos === "wb")
            return (
                <div className={style.subcontainer}> <Master name={teamMate.name} email={teamMate.email} ldin={teamMate.ldin} imgs={teamMate.imgs} fb={teamMate.fb} tel={teamMate.phone} user={teamMate.user} idd={teamMate.key}/></div>
            );
        }
    }
    
    return (
       <div className={style.boxer}>
            <h1>Academics and Career Council</h1>
            {tab==='0'? <h1>Meet The Team</h1> : null}
           {tab==='1'? <div className={style.container}>{team.map(createEntry)}</div>: null}
           {tab==='2'? <div className={style.container}>{team.map(createEntry)}</div>: null}
           {tab==='3'? <div className={style.container}>{team.map(createEntry)}</div>: null}
           {tab==='4'? <div className={style.container}>{team.map(createEntry)}</div>: null}
           {tab==='5'? <div className={style.container}>{team.map(createEntry)}</div>: null}
           {tab==='6'? <div className={style.container}>{team.map(createEntry)}</div>: null}
           {tab==='7'? <div className={style.container}>{team.map(createEntry)}</div>: null}
           <Radio.Group value={tab} onChange={e => setTab(e.target.value)} style={{bottom:'0', position:'fixed', display: 'flex',flexFlow: 'row', flexWrap: 'wrap', justifyContent:"center", width:"100%"}} size='large' buttonStyle="solid">
           <Radio.Button value='0'>Meet The Team</Radio.Button>
            <Radio.Button value='1'>General Secretary</Radio.Button>
            <Radio.Button value='2'>Associate Heads</Radio.Button>
            <Radio.Button value='3'>Career Development Wing</Radio.Button>
            <Radio.Button value='4'>International Relations Wing</Radio.Button>
            <Radio.Button value='5'>Research Wing</Radio.Button>
            <Radio.Button value='6'>Academics Wing</Radio.Button>
            <Radio.Button value='7'>Web Development Wing</Radio.Button>
            
        </Radio.Group>
           
        </div> 
    )
}
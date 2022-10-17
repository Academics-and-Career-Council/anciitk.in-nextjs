import React from 'react';
import Master from './master';
import pic from "../public/image/abhinav.jpg";
import styles from "../styles/new.module.css";


export default function New(props) {
    return (
      <div className={styles.container}>
        <div className={styles.subcontainer}><Master imgs={props.pic} mailer={props.mail}/></div>
        <div className={styles.subcontainer}><Master imgs={props.pic} mailer={props.mail}/></div>
        <div className={styles.subcontainer}><Master imgs={props.pic} mailer={props.mail}/></div>
      </div>
    );
}
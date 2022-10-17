import styles from "../styles/master.module.css";
import Image from "next/image";
// import pic from "../public/image/abhinav.jpg";
import pic1 from "../public/image/gs_manit.jpg";
import pic2 from "../public/image/ah_anku.jpeg";
import pic3 from "../public/image/ah_Lakshay_Rastogi.jpg";
import pic4 from "../public/image/ah_sampada.jpg";
import pic5 from "../public/image/ah_mustafa.jpg";
import pic6 from "../public/image/pic6.jpg";
import pic7 from "../public/image/pic7.jpg";
import pic8 from "../public/image/pic8.jpg";
import pic9 from "../public/image/pic9.jpg";
import pic10 from "../public/image/pic10.jpg";
import pic11 from "../public/image/pic11.jpg";
import pic12 from "../public/image/pic12.jpg";
import pic13 from "../public/image/pic13.jpg";
import pic14 from "../public/image/pic14.jpg";
import pic15 from "../public/image/pic15.jpg";
import pic16 from "../public/image/pic16.jpg";
import pic17 from "../public/image/pic17.jpg";
import pic18 from "../public/image/web_akshit.jpeg";
import pic19 from "../public/image/web_faheem.jpeg";
import 'antd/dist/antd.css';


import {
  FacebookOutlined,
  LinkedinOutlined,
  PhoneOutlined,
  MailOutlined
} from "@ant-design/icons";
import { Button} from "antd";

export default function Master(props:any) {
  return (
    <div id="services" className={`${styles.servicesList} ${styles.offset_16} ${styles.block12} ${styles.blockTabFull} ${styles.group}`} >
      <div
        className={`${styles.bgrid} ${styles.serviceItem} ${styles.animateThis}`}
      >
        <div className={styles.bigCard}>
        <div className={styles.profileCard} >
          <div className={styles.profileImg} >
            {/* <img src="me.jpg" style={{"height":"24rem","width":"24.5rem","objectFit":"cover"}}
                alt="Team Image" className={styles.lazyload} /> */}
            {props.idd==="1" ? <Image
              src={pic1}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="2" ? <Image
              src={pic2}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="3" ? <Image
              src={pic3}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="4" ? <Image
              src={pic4}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="5" ? <Image
              src={pic5}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="6" ? <Image
              src={pic6}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="7" ? <Image
              src={pic7}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="8" ? <Image
              src={pic8}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="9" ? <Image
              src={pic9}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="10" ? <Image
              src={pic10}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="11" ? <Image
              src={pic11}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="12" ? <Image
              src={pic12}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="13" ? <Image
              src={pic13}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="14" ? <Image
              src={pic14}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="15" ? <Image
              src={pic15}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="16" ? <Image
              src={pic16}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="17" ? <Image
              src={pic17}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
            {props.idd==="18" ? <Image
              src={pic18}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
             {props.idd==="19" ? <Image
              src={pic19}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            /> : null}
          </div>
          <div className={styles.profileContent}>
            <a href={props.email}>
              <h2 className={styles.title}>{props.user}<Button icon={<MailOutlined style={{color:'white'}}/>} style={{background: "transparent", border:"none"}}/></h2>
            </a>
            <ul className={styles.socialLink}>
              <li>
                {/* <a
                  href="https://www.facebook.com/sanmati.pande.9"
                  className="fab fa-facebook"
                  target="_blank"
                >
                  <FacebookOutlined />
                </a> */}
              <Button type="link" href={props.fb} icon={<FacebookOutlined style={{color:'white'}}/>} style={{background: "transparent"}} />

              </li>
              <li>
                
                  {/* <InstagramFilled><a href="mailto:sanmatip20@iitk.ac.in "></a></InstagramFilled> */}
                  <Button type="link" href={props.ldin} icon={<LinkedinOutlined style={{color:'white'}}/>} style={{background: "transparent"}}  />
              </li>
              <li>
                {/* <Space>
                <a
                  href="https://www.linkedin.com/in/sanmati-pande-805793214/"
                  className={styles.icons}
                  target="_blank"
                >
                  <LinkedinOutlined />
                </a>
                </Space> */}
                <Button type="link" href={props.tel} icon={<PhoneOutlined  style={{color:'white'}}/>} style={{background: "transparent"}}  />

              </li>
            </ul>
          </div>
          
        {/* <h4 className={styles.lineHeight3}>
          Web Secretary
        </h4> */}
        </div>
        <h3 className={styles.lineHeight2}>
          {props.name}{" "}
        </h3>
        </div>
      </div>
    </div>
    
  );
}

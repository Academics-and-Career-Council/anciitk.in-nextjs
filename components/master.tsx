import styles from "../styles/master.module.css";
import Image from "next/image";
import pic from "../public/image/abhinav.jpg";
import 'antd/dist/antd.css';

import {
  FacebookOutlined,
  LinkedinOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button} from "antd";

export default function Master() {
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
            <Image
              src={pic}
              style={{ height: "24rem", width: "24.5rem", objectFit: "cover" }}
              alt="Team Image"
              className={styles.lazyload}
            />
          </div>
          <div className={styles.profileContent}>
            <a href="mailto:abhinavg21@iitk.ac.in">
              <h2 className={styles.title}>abhinavg21</h2>
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
              <Button type="link" href="https://www.linkedin.com/in/abhinav-garg-iitk-y25/" icon={<FacebookOutlined style={{color:'white'}}/>} style={{background: "transparent"}} />

              </li>
              <li>
                
                  {/* <InstagramFilled><a href="mailto:sanmatip20@iitk.ac.in "></a></InstagramFilled> */}
                  <Button type="link" href="https://www.linkedin.com/in/abhinav-garg-iitk-y25/" icon={<LinkedinOutlined style={{color:'white'}}/>} style={{background: "transparent"}}  />
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
                <Button type="link" href="tel:7973920379" icon={<PhoneOutlined  style={{color:'white'}}/>} style={{background: "transparent"}}  />

              </li>
            </ul>
          </div>
          
        {/* <h4 className={styles.lineHeight3}>
          Web Secretary
        </h4> */}
        </div>
        <h3 className={styles.lineHeight2}>
          Abhinav Garg{" "}
        </h3>
        </div>
      </div>
    </div>
  );
}

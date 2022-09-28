import styles from "../styles/master.module.css";
import Image from "next/image";
import pic from "../public/image/sanmati.jpg";
import {
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
export default function Master() {
  return (
    <div id="services" className={`${styles.servicesList} ${styles.offset_16} ${styles.block12} ${styles.blockTabFull} ${styles.group}`}>
      <div
        className={`${styles.bgrid} ${styles.serviceItem} ${styles.animateThis}`}
      >
        <div className={styles.profileCard}>
          <div className={styles.profileImg}>
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
            <a href="tel:8080926316">
              <h2 className={styles.title}>8080926316</h2>
            </a>
            <ul className={styles.socialLink}>
              <li>
                <a
                  href="https://www.facebook.com/sanmati.pande.9"
                  className="fab fa-facebook"
                  target="_blank"
                >
                  {/* <FacebookOutlined /> */}
                </a>
              </li>
              <li>
                <a
                  href="mailto:sanmatip20@iitk.ac.in "
                  className="fa icon-mail"
                >
                  {/* <InstagramOutlined /> */}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sanmati-pande-805793214/"
                  // className="fab fa-linkedin"
                  target="_blank"
                >
                  <LinkedinOutlined />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h3 className={styles.lineHeight2}>
          Sanmati <br></br>Pande{" "}
        </h3>
        <h4 className={styles.lineHeight2}>
          Overall
          <br />
          Coordinator
        </h4>
      </div>
    </div>
  );
}

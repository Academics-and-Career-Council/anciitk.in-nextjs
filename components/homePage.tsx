import styles from "./HomePage.module.css";
import Tree from "./tree";
import { Col, Row ,Card} from 'antd';
import Footer from "./footer";

const HomePage=()=>{
    return(<><div className={styles.landingPage}>
        <div className={styles.textTitle}>
        <div className={styles.title}><b>Academics & Career Council</b> </div>
        <div className={styles.text}>The Academics and Career Council of the Indian Institute of Technology, Kanpur is a council directly placed under the Student's Gymkhana, that aims to foster all needs related to academics and research for the campus dwellers.</div>
        </div>
    <div className={styles.image}></div>
    </div>
    
    <Tree></Tree>
    <Footer></Footer>
    </>)
}
export default HomePage;
import styles from "./Tree.module.css";

const Tree=()=>{
    return(<>
        <div className={styles.timeline}>
  <div className={styles.container+" "+styles.left}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.fahome}></i>
    <div className={styles.content}>
      <h1 className={styles.h1T}>UG/PG Academics</h1>
      <p>
      The UG/PG Academics Wing takes up the responsibility of the academics related work of the Academic and Career Council. It acts as an interface between the institute policy makers and the students on matters related to academia.
      </p>
    </div>
  </div>
  <div className={styles.container+" "+styles.right}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.fagift}></i>
    <div className={styles.content}>
      <h1 className={styles.h1T}>Research</h1>
      <p>
      The Research Wing of the council aims at cultivating and promoting research interests in the student community, by providing the freedom and opportunities to work upon diverse areas of research.
      </p>
    </div>
  </div>
  <div className={styles.container+" "+styles.left}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.fauser}></i>
    <div className={styles.content}>
      <h1 className={styles.h1T}>International Relation</h1>
      <p>
      The International Relations Wing works in close association with the Office of International Relations (OIR), IIT Kanpur to improve collaborations of the Institute and its foreign counterparts.
      </p>
    </div>
  </div>
  <div className={styles.container+" "+styles.right}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.farunning}></i>
    <div className={styles.content}>
      <h1 className={styles.h1T}>Career Development</h1>
      <p>
      The Career Development Wing of the Council, with the mandate of Career Development of students, shall provide an extraordinary boost in regard to Career Aspects.
      </p>
    </div>
  </div>
  {/* <div className={styles.container+" "+styles.left}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.facog}></i>
    <div className={styles.content}>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>
  <div className={styles.container+" "+styles.right}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.facertificate}></i>
    <div className={styles.content}>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div> */}
</div>
</>)

}
export default Tree;
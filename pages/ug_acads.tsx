import styles from "../styles/timeline_ug.module.css"
import sty from "../styles/ugacads.module.css"

const UgAcads= ()=> {
  return (
    <>
    <body className={sty.body}>
    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans&display=swap" rel="stylesheet"/>
    <div className={sty.div1}>
      <div><h1 className={sty.heading1}>UG/PG Academics Wing</h1>
      
      </div>
      <div><p className={sty.para1}>The UG/PG Academics Wing takes up the responsibility of the academics related work of the Academic and Career Council. It acts as an interface between the institute policy makers and the students on matters related to academia. The wing endeavors to protect the students’ academic interests and is the voice of the student body on this front.</p></div>
      {/* <div className="footer">
       <button className="btn-yellow"> Pingala </button>
       <button className="btn-blue"> UG Manual </button>
       <button className="btn-blue"> PG Manual </button>
      </div> */}
    </div>
    <div className={sty.div2}><h1 className={sty.heading2}>Objectives</h1>
    
    
    <script>var mountNode = document.getElementById('container');</script>
    {/* <div className="obj"><Objective /></div> */}

    <div className={styles.timeline}>
  <div className={styles.container+" "+styles.left}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.fahome}></i>
    <div className={styles.content}>
      {/* <h1 className={styles.h1T}>UG/PG Academics</h1> */}
      <p>
      Helping the students to contact Institute bodies for academics and related purposes
      </p>
    </div>
  </div>
  <div className={styles.container+" "+styles.right}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.fagift}></i>
    <div className={styles.content}>
      {/* <h1 className={styles.h1T}>Research</h1> */}
      <p>
      Assisting and Coordinating with students senate nominees to Academic committees of the Institute
      </p>
    </div>
  </div>
  <div className={styles.container+" "+styles.left}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.fauser}></i>
    <div className={styles.content}>
      {/* <h1 className={styles.h1T}>International Relation</h1> */}
      <p>
      Spreading importance about academic policies, rules & regulations, and changes in them
      </p>
    </div>
  </div>
  <div className={styles.container+" "+styles.right}>
    
    <i className={styles.icon+" "+styles.fa+" "+styles.farunning}></i>
    <div className={styles.content}>
      {/* <h1 className={styles.h1T}>Career Development</h1> */}
      <p>
      Gathering students opinion on matters of critical importance. Conducting academic orientation sessions
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
    
    </div>
    </body>
    
    
    </>
  )
}

export default UgAcads
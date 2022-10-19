import styles from "./qna.module.css"
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https;//api.anciitk.in/.faq/approved')
  .then(function (response) {
    // handle success
    console.log(response);
  })
const Qna=()=>{
    
    return(<div className={styles.coverBox}>
    {/* <div className="card-wrapper  | content-cc"> */}
    <div className={styles.cardWrapper+" "+styles.contentCc}>
  <div className={styles.faqCard}>

    {/* <div className="faq-ilustrations">

      
      <img className="mobile pattern" 
           src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/bg-pattern-mobile.svg">
      </img>
      <img className="mobile ilust" 
           src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/illustration-woman-online-mobile.svg">
      </img>
          </div> */}

    <main className={styles.faqContent}>
      <h1>FAQ</h1>

      <div className={styles.faqArticles}>

        <article className={styles.faqAccordion}>

          <input type="checkbox" className={styles.tggTitle} id="tgg-title-1"></input>

          <div className={styles.faqAccordionTitle}>
            <label for="tgg-title-1">
              <h2 className={styles.h2}>How many team members can I invite?</h2>
              <span className={styles.arrowIcon}>
                <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg"></img>
              </span>
            </label>
          </div>

          <div className={styles.faqAccordionContent}>
            <p className={styles.p}>You can invite up to 2 additional users on the Free plan. There is no limit on
              team members for the Premium plan.</p>
          </div>

        </article> 

        <article className={styles.faqAccordion}>

          <input type="checkbox" className={styles.tggTitle} id="tgg-title-2"></input>

          <div className={styles.faqAccordionTitle}>
            <label for="tgg-title-2">
              <h2 className={styles.h2}>
                What is the maximum file upload size?
              </h2>
              <span className={styles.arrowIcon}>
                <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg"></img>
              </span>
            </label>
          </div>

          <div className={styles.faqAccordionContent}>
            <p className={styles.p}>No more than 2GB. All files in your account must fit your allotted storage space.</p>
          </div>

        </article> 

        <article className={styles.faqAccordion}>

          <input className={styles.tggTitle} type="checkbox" id="tgg-title-3"></input>

          <div className={styles.faqAccordionTitle}>
            <label for="tgg-title-3">
              <h2 className={styles.h2}>
                How do I reset my password?
              </h2>
              <span className={styles.arrowIcon}>
                <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg"></img>
              </span>
            </label>
          </div>

          <div className={styles.faqAccordionContent}>
            <p className={styles.p}>Click “Forgot password” from the login page or “Change password” from your profile page.
              A reset link will be emailed to you.</p>
          </div>

        </article> 

        <article className={styles.faqAccordion}>

          <input className={styles.tggTitle} type="checkbox" id="tgg-title-4"></input>

          <div className={styles.faqAccordionTitle}>
            <label for="tgg-title-4">
              <h2 className={styles.h2}>
                Can I cancel my subscription?
              </h2>
              <span className={styles.arrowIcon}>
                <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg"></img>
              </span>
            </label>
          </div>

          <div className={styles.faqAccordionContent}>
            <p className={styles.p}>
              Yes! Send us a message and well process your request no questions asked.</p>
          </div>

        </article> 

        <article className={styles.faqAccordion}>

          <input className={styles.tggTitle} type="checkbox" id="tgg-title-5"></input>

          <div className={styles.faqAccordionTitle}>
            <label for="tgg-title-5">
              <h2 className={styles.h2}>
                Do you provide additional support?
              </h2>
              <span className={styles.arrowIcon}>
                <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg"></img>
              </span>
            </label>
          </div>

          <div className={styles.faqAccordionContent}>
            <p className={styles.p}> Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
          </div>

        </article>

      </div> 

    </main> 

  </div> 

</div> 
    </div>)
}

export default Qna;
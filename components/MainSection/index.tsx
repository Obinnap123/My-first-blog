import styles from './styles2.module.scss'

 export default function MainSection() {
  return <>
    <main className={styles.mainContainer}>
        <div className={styles.content}>
          <h1 className="section-title">
            Earn over <span  style={{ color: '#5da9e9' }}>$500</span> Monthly
          </h1>
          <h2 className={styles['learn-earn']}>LEARN AND EARN</h2>
          <h2>BECOME OUR LANGUAGE AMBASSADOR</h2>
          <p>Our online education platform is a fully functional</p>
          <p>learning place consisting of virtual class, e-library, testing/assessment</p>
          <p>modus, and others. It is an interactive medium where students</p>
          <p>can engage the teachers just from the comfort of their homes.</p>
          <button className="left-align main-section">Join Now</button>
          <div className="spaced-text">
            <p className={`align-items-center`}>Our approach to teaching is unique and our teachers are extremely highly rated.</p>
            <p>We are affordable, simple, effective, and very intensive.</p>
          </div>
        </div>
        <div className={styles.blueWrapper}>
          <div className={styles.imageContainer}>
            <img src="/girl.png" alt="Girl" className={styles.girlImage} />
          </div>
        </div>
      </main>
  </>
};



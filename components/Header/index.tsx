import React from 'react';
import styles from './styles.module.scss'


export default function Header(){
  return <>
    <header className={styles.header}>
    <nav className={styles.navbar}>
    
    <div className= {styles['nav-container']}>
    <ul className={styles['nav-links']}>
    <li><a href="#home">Home</a></li>
    <li><a href="#packagaes">Packages</a></li>
    <li><a href="#testimonials">Testimonials</a></li>
    <li><a href="#other">Other</a></li>
  </ul>
  </div>
  <div className={styles['auth-links']}>
        <a href="#signup" className={`${styles.authBtn} ${styles.signUpBtn}`}>Sign up</a>
        <a href="#login" className={styles['auth-btn']}>Login</a>
  </div>

  </nav>
</header>
  </>
};



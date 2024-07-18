import React from 'react';
import styles from './styles.module.scss'


export default function Header(){
  return <>
     <header className={`w-100 d-flex ${styles.header} position-fixed`}>
      <nav className={`${styles.navbar} `}>
        <a className="navbar-brand" href="#">
          <img src='/logo.png' alt='logo' style={{ width: 90, height: 90 }} />
        </a>
        <ul className={`d-flex ${styles['nav-links']} list-unstyled `}>
          <li><a href="#home">Home</a>
          </li>
          <li><a href="#packages">Packages</a>
          </li>
          <li><a href="#testimonials">Testimonials</a>
          </li>
          <li><a href="#other">Other</a>
          </li>
        </ul>
        <div className={`${styles['auth-links']}`}>
          <a className={` ${styles['authBtn']} ${styles.signUpBtn}`} href="#signup">Sign up</a>
          <a className={` ${styles['auth-btn']} ${styles.loginBtn}`} href="#login">Login</a>
        </div>
      </nav>
    </header>
  </>
};



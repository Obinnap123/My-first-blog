import React from 'react';
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
  return <>
    <header className={`w-100 d-flex ${styles.header} position-fixed top-0`}>
      <nav className={`w-100 d-flex justify-content-between align-items-center ${styles.navbar} `}>
        <a className="navbar-brand" href="#">
          <img className={`${styles.logo}`} src='/logo.png' alt='logo' />
        </a>
        <ul className={`mb-0 d-none d-lg-flex ${styles['nav-links']} text-dark list-unstyled `}>
          <li><a href="#home">Home</a>
          </li>
          <li><a href="#packages">Packages</a>
          </li>
          <li><a href="#testimonials">Testimonials</a>
          </li>
          <li><a href="#other">Other</a>
          </li>
        </ul>
        <div className={`d-none d-lg-flex justify-content-between align-items-center ${styles['auth-links']}`}>
          <a className={`${styles.signUpBtn}`} href="#signup">Sign up</a>
          <a className={`${styles.loginBtn}`} href="#login">Login</a>
        </div>
        <div className={`${styles.hamburger} d-lg-none`}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </header>
  </>
};



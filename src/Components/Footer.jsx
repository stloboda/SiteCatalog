import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">about us</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Adresses</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">about us</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>who did we help</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">about us</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>follow us</h4>
            <div className={styles.footerSocial}>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

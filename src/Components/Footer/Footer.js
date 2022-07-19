import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import classes from './Footer.module.css';
import Flip from 'react-reveal/Flip';


const Footer = () => {
  return (
      <footer className={classes.footer}>
          <Flip top>
          <nav className={classes.nav}>
              <ul>
                  <li><a href=""><FontAwesomeIcon icon={faVk}/></a></li>
                  <li><a href=""><FontAwesomeIcon icon={faInstagram}/></a></li>
                  <li><a href=""><FontAwesomeIcon icon={faFacebook}/></a></li>
                  <li><a href=""><FontAwesomeIcon icon={faLinkedin}/></a></li>
                  <li><a href=""><FontAwesomeIcon icon={faGithub}/></a></li>
              </ul>
          </nav>
          </Flip>
          <p>© Vadim Chursin - 2020</p>
      </footer>
  );
};

export default Footer;
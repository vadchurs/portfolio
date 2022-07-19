import React from 'react';
import classes from "./Header.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {Link, animateScroll as scroll} from 'react-scroll'


let Header = () => {
    return (<>
                    <input className={classes.inp} id={"btn"} type="checkbox"/>
                <div className={classes.header}>
                    <label htmlFor={"btn"}>
                        <div className={classes.btn}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </label>
                    <nav>
                        <ul>
                            <li>
                                <Link activeClass={classes.active} to="main" spy={true} smooth={true} offset={-61} duration={500}>
                                    <FontAwesomeIcon icon={faHome}/> Главная
                                </Link>
                            </li>
                            <li>
                                <Link activeClass={classes.active} to="skills" spy={true} smooth={true} offset={-60} duration={500}>
                                    <FontAwesomeIcon icon={faStar}/> Скиллы
                                </Link>
                            </li>
                            <li>
                                <Link activeClass={classes.active} to="projects" spy={true} smooth={true} offset={-59} duration={500}>
                                    <FontAwesomeIcon icon={faBook}/> Работы
                                </Link>
                            </li>
                            <li>
                                <Link activeClass={classes.active} to="contact" spy={true} smooth={true} offset={-172} duration={500}>
                                    <FontAwesomeIcon icon={faPhone}/> Контакты
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
        </>
    );
};

export default Header;

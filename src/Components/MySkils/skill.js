import React from 'react';
import classes from "./Block_2.module.css"
import stylesPercent from "./percent.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Skill = (props) => {
  return (
          <div className={classes.skill}>
              <div className={classes.img + " " + classes[props.styleColor]}><FontAwesomeIcon icon={props.skillTitleImg}/></div>
              <div className={classes.skillDiscription}>
                  {props.skillDiscription}
                  <div className={stylesPercent["c100"] + " " + stylesPercent[""] + " "+ stylesPercent[`p${props.percent}`] + " " + stylesPercent["center"]}>
                      <span>{props.percent}%</span>
                      <div className={stylesPercent.slice}>
                          <div className={stylesPercent.bar}></div>
                          <div className={stylesPercent.fill}></div>
                      </div>
                  </div>
              </div>
          </div>
  );
}

export default Skill;
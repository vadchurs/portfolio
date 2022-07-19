import React from 'react';
import classes from "./Block_3.module.css"



const Work = (props) => {
  return (
          <a href={props.hrefOnProject} target={"_blank"} className={classes.work}>
                  <div className={classes.workImg}>
                      <a>Смотреть</a>
                      <img src={props.worksUrlImg} alt=""/>
                  </div>
                  <div className={classes.workDiscription}>
                      <div className={classes.border}>
                          <h3>{props.worksDiscription}</h3>
                      </div>
                  </div>
          </a>
  );
}

export default Work;
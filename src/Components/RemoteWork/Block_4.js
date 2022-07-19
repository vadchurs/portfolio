import React, {useState} from 'react';
import classes from "./Block_4.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

const Block_4 = () => {
    let [modalActivated, setModalActivated] = useState(false);
    let fon = modalActivated ? "fon" : "dNone";
    let modal = modalActivated ? "modal" : "dNone";
  return (
      <section className={classes.section}>
          <Fade left>
              <div className={classes.remoteWorkBlock}>
                  <p>Расматриваю вариант удалённой работы</p>
                  <button onClick={()=>setModalActivated(true)}>Нанять меня</button>
              </div>
          </Fade>
          <div className={classes[fon]}></div>
          <div className={classes[modal]}>
              <div className={classes.mail}>
                Email для связи со мной: <br/>
                vadchurs90@gmail.com
              </div>
              <FontAwesomeIcon onClick={()=>setModalActivated(false)} className={classes.close} icon={faWindowClose}/>
          </div>
      </section>
  );
}

export default Block_4;

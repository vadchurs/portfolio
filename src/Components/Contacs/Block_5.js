import React from 'react';
import classes from "./Block_5.module.css"
import Title from "../common/Title";
import Fade from 'react-reveal/Fade';


const Block_5 = () => {
  return (
      <section id={"contact"} className={classes.section}>
              <div className={classes.contact}>
                  <Fade right>
                      <Title title={"Контакты"}/>
                      <form action="">
                          <div className={classes.name}><input type="text" placeholder={"Ваше имя"}/></div>
                          <div className={classes.email}><input type="text" placeholder={"Ваш email"}/></div>
                          <div className={classes.message}><textarea rows={10} placeholder={"Ваше сообщение..."}></textarea></div>
                          <button>Отправить</button>
                      </form>
                  </Fade>
              </div>
      </section>
  );
}

export default Block_5;
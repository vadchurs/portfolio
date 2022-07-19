import React from 'react';
import classes from "./Block_2.module.css"
import Skill from "./skill";
import Title from "../common/Title";
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';



const Block_2 = () => {
    let skils = [
        {id:1,skillTitleImg: faHtml5,styleColor: "html",percent: 90,skillDiscription:"HTML 5 Стандартизированный язык разметки документов в интернете. Уровень владения:"},
        {id:2,skillTitleImg: faCss3,styleColor: "css",percent: 85,skillDiscription:"CSS 3 Язык описания внешнего вида документа. Уровень владения:"},
        {id:3,skillTitleImg: faJs,styleColor: "js",percent: 60,skillDiscription:"JavaScript ES6 Язык программирования высокого уровня, использующийся для придания интерактивности веб-страницам. Уровень владения:"},
        {id:4,skillTitleImg: faReact,styleColor: "react",percent: 60,skillDiscription:"React JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Уровень владения:"},
        {id:5,skillTitleImg: faNodeJs,styleColor: "nodeJs",percent: 20,skillDiscription:"NodeJS Программная платформа, позволяющая использовать JavaScript как язык общего назначения вне окна браузера. Уровень владения:"},
        {id:6,skillTitleImg: faGit,styleColor: "git",percent: 20,skillDiscription:"Webpack Наиболее мощный инструмент для проведения сборки frontend'а веб-сайтов. Уровень владения:"}
    ]
  return (
      <section id={"skills"} className={classes.section}>
          <div className={classes.skillsBlock}>
            <Title title={"Мои навыки"}/>
            <div className={classes.skills}>
                {skils.map(s=><Skill key={s.id} skillTitleImg={s.skillTitleImg}
                                     skillDiscription={s.skillDiscription}
                                     percent={s.percent}
                                     styleColor={s.styleColor}/>)}
            </div>
          </div>
      </section>
  );
}

export default Block_2;
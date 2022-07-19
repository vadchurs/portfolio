import React from 'react';
import classes from "./Block_3.module.css"
import Work from "./work";
import socialNetworkImg from "./../../img/maxresdefault.jpg";
import vulkanImg from "./../../img/cropped-volcano-brandon-project.jpg";
import todolistImg from "./../../img/todo-list-850x476.jpg";
import Title from "../common/Title";


const Block_3 = () => {
    let works = [
        {id:1,worksUrlImg: socialNetworkImg, worksDiscription: "Social Network", hrefOnProject: "#"},
        {id:2,worksUrlImg: vulkanImg, worksDiscription: "Project Vulkan",hrefOnProject: "http://churs90.github.io/kursovaya/"},
        {id:3,worksUrlImg: todolistImg, worksDiscription: "Todolist", hrefOnProject: "#"}]
  return (
      <section id={"projects"} className={classes.section}>
          <div className={classes.worksBlock}>
              <Title title={"Мои работы"}/>
              <div className={classes.works}>
                  {works.map(w => <Work key={w.id} worksUrlImg={w.worksUrlImg} worksDiscription={w.worksDiscription} hrefOnProject={w.hrefOnProject} />)}
              </div>
          </div>
      </section>
  );
}

export default Block_3;
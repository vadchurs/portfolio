import React from 'react';
import classes from "./Block_1.module.css"
import photo from "./../../img/vad.jpg"
import Title from "../common/Title";
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
import classesIsHeaders from './../Header/Header.module.css'

let params={
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 10,
            "random": true
        },
        "move": {
            "direction": "bottom",
            "out_mode": "out"
        },
        "line_linked": {
            "enable": false
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "remove"
            }
        },
        "modes": {
            "remove": {
                "particles_nb": 10
            }
        }
    }
};
const Block_1 = () => {
    return (
        <section id={"main"} className={classes.section}>
            <Particles className={classes.particles} params={params}/>
            <div className={classes.wrapper}>
                <div className={classes.name}>
                    Привет! меня зовут Вадим.<br/>
                    <ReactTypingEffect
                        text="Я front-end разработчик"
                    />
                </div>
                <Tilt className="Tilt" options={{max: 25}}>
                    <div className={classes.foto}>
                        <img src={photo} alt="фото"/>
                    </div>
                </Tilt>
            </div>
        </section>
    );
};

export default Block_1;

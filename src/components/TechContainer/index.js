import html from "./images/html.png";
import css from "./images/css.png";
import javaScript from "./images/javascript.png";
import bootstrap from "./images/bootstrap.png";
import git from "./images/git.png";
import react from "./images/react.png";
import nodejs from "./images/nodejs.png";
import express from "./images/expressjs.png";
import mySQL from "./images/mysql.png";
import sequelize from "./images/sequelize.png";
import handlebars from "./images/handlebars.png"
import mongoDB from "./images/mongodb.png";
import mongoose from "./images/mongoose.png";
import jQuery from "./images/jquery.png";
import "./style.css";

const icons = [
    {key:1, title: "JavaScript", src: javaScript},
    {key:2, title: "Node.js", src: nodejs},
    {key:3, title: "React", src: react},
    {key:4, title: "Express", src: express},
    {key:5, title: "Git", src: git},
    {key:6, title: "MongoDB", src: mongoDB},
    {key:7, title: "Mongoose", src: mongoose},
    {key:8, title: "MySQL", src: mySQL},
    {key:9, title: "Sequelize", src: sequelize},
    {key:10, title: "Handlebars", src: handlebars},
    {key:11, title: "Html", src: html},
    {key:12, title: "Css", src: css},
    {key:13, title: "Bootstrap", src: bootstrap},
    {key:14, title: "JQuery", src: jQuery},
];

 function TechContainer() {
    return (
        <>
            <div className="container tech-content p-0">
                <div className="gradient m-0"></div>
                <div className="row">
                    <div className="col-12 tech-box">
                        <div className="section-title">
                            <h4 className="section-title-text mx-5">Tech I enjoy using:</h4>
                        </div>
                        <div className="row flex-wrap justify-content-center mx-4 py-4">
                            {icons.map((icon) => {
                                return (
                                    <div key={icon.key} className="col-4 col-lg-2 m-1 mb-3" align="center">
                                        <img src={icon.src} alt={icon.title} className="img-fluid logo" />
                                        <p className="logo-text">{icon.title}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TechContainer;
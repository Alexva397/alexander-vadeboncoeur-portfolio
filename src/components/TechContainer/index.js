import Html from "./images/html.png";
import Css from "./images/css.png";
import JavaScript from "./images/javascript.png";
import Bootstrap from "./images/bootstrap.png";
import Git from "./images/git.png";
import React from "./images/react.png";
import Nodejs from "./images/nodejs.png";
import Express from "./images/expressjs.png";
import MySQL from "./images/mysql.png";
import Sequelize from "./images/sequelize.png";
import Handlebars from "./images/handlebars.png"
import MongoDB from "./images/mongodb.png";
import Mongoose from "./images/mongoose.png";
import jQuery from "./images/jquery.png";
import "./style.css";

 function TechContainer() {
    return (
        <>
            <div className="container tech-content p-0">
                <div className="gradient m-0"></div>
                <div className="row">
                    <div className="col-12 tech-box">
                        <div className="section-title">
                            <h4 className="section-title-text mx-5">Tech I like using:</h4>
                        </div>
                        <div className="row flex-wrap justify-content-center mx-4 py-4">
                            <div className="col-4 col-lg-2 m-1 mb-3" align="center">
                                <img src={JavaScript} alt="JavaScript" className="img-fluid logo" />
                                <p className="logo-text">JavaScript</p>
                            </div>
                            <div className="col-4 col-lg-2 m-1 mb-3" align="center">
                                <img src={React} alt="React" className="img-fluid logo" />
                                <p className="logo-text">React</p>
                            </div>
                            <div className="col-4 col-lg-2 m-1 mb-3" align="center">
                                <img src={Git} alt="Git" className="img-fluid logo" />
                                <p className="logo-text">Git</p>
                            </div>
                            <div className="col-4 col-lg-2 m-1 mb-3" align="center">
                                <img src={Nodejs} alt="NodeJs" className="img-fluid logo" />
                                <p className="logo-text">Node.js</p>
                            </div>
                            <div className="col-4 col-lg-2 m-1 mb-3" align="center">
                                <img src={Express} alt="ExpressJS" className="img-fluid logo" />
                                <p className="logo-text">Express</p>
                            </div>
                            <div className="col-4 col-lg-2 m-1 mb-3" align="center">
                                <img src={MySQL} alt="MySQL" className="img-fluid logo" />
                                <p className="logo-text">MySQL</p>
                            </div>
                            <div className="col-4 col-lg-2 m-1 mb-3" align="center">
                                <img src={Sequelize} alt="Sequelize" className="img-fluid logo" />
                                <p className="logo-text">Sequelize</p>
                            </div>
                            <div className="col-4 col-lg-2 m-1 mb-3" align="center">
                                <img src={Handlebars} alt="Handlebarsjs" className="img-fluid logo" />
                                <p className="logo-text">Handlebars</p>
                            </div>
                            <div className="col-4 col-lg-2 m-1 mb-3" align="center">
                                <img src={MongoDB} alt="MongoDB" className="img-fluid logo" />
                                <p className="logo-text">MongoDB</p>
                            </div>
                            <div className="col-4 col-lg-2 m-1 mb-3" align="center">
                                <img src={Mongoose} alt="Mongoose" className="img-fluid logo" />
                                <p className="logo-text">MongooseJs</p>
                            </div>
                            <div className="col-4 col-lg-2 m-1 mb-3" align="center">
                                <img src={Html} alt="HTML5" className="img-fluid logo" />
                                <p className="logo-text">HTML 5</p>
                            </div>
                            <div className="col-4 col-lg-2 m-1 mb-3" align="center">
                                <img src={Css} alt="CSS3" className="img-fluid logo" />
                                <p className="logo-text">CSS 3</p>
                            </div>
                            <div className="col-4 col-lg-2 m-1 mb-3" align="center">
                                <img src={Bootstrap} alt="Bootstrap" className="img-fluid logo" />
                                <p className="logo-text">Bootstrap</p>
                            </div>
                            <div className="col-4 col-lg-2 m-1 mb-3" align="center">
                                <img src={jQuery} alt="JQuery" className="img-fluid logo" />
                                <p className="logo-text">JQuery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TechContainer;
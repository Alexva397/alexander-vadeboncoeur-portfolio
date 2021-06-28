
import "./style.css";

function ProjectContainer() {
    return (
        <>
            <div className="container tech-content pb-3">
                <h4 className="projects-title-text" id="projects">My Projects</h4>
                <div id="project-carousel" className="carousel slide p-0 mx-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a href="https://klay824.github.io/project-1/" target="_blank" rel="noreferrer">
                                <img className="d-block w-100" src="./assets/images/rons-grub-hub.png" alt="Ron's Grub Hub" />
                            </a>
                            <div className="carousel-caption mb-0 pb-0 d-none d-md-block">
                                <h5>Ron's Grub Hub</h5>
                                <p>jQuery/Materialize/3rd Party APIs</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href="https://powerful-bastion-48444.herokuapp.com/" target="_blank" rel="noreferrer">
                                <img className="d-block w-100" src="./assets/images/gunSAFE.png" alt="GunSAFE" />
                            </a>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>GunSAFE</h5>
                                <p>Node.js/Sequelize/Express/Handlebars</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href="https://powerful-bastion-48444.herokuapp.com/" target="_blank" rel="noreferrer">
                                <img className="d-block w-100" src="./assets/images/notetake.png" alt="Third slide" />
                            </a>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Note Taker</h5>
                                <p>JavaScript/Node.js/Express</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" data-bs-target="#project-carousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" data-bs-target="#project-carousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="container p-0">
                <div className="gradient-bottom m-0"></div>
            </div>
        </>
    );
}

export default ProjectContainer;
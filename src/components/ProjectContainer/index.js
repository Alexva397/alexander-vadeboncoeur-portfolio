import GunSAFE from "./images/gunSAFE.png";
import TechBlog from "./images/tech-blog.png";
import RonGH from "./images/rons-grub-hub.png";
import "./style.css";

function ProjectContainer() {
    return (
        <>
            <div className="container tech-content pb-3">
                <h4 className="projects-title-text" id="projects">My Projects</h4>
                <div id="project-carousel" className="carousel slide p-0 mx-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a href="https://powerful-bastion-48444.herokuapp.com/" target="_blank" rel="noreferrer">
                                <img className="d-block w-100" src={GunSAFE} alt="GunSAFE" />
                            </a>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>GunSAFE</h5>
                                <p>MySQL/Sequelize/Express/Handlebars</p>
                                <a className="link-secondary" href="https://github.com/philipperkins2020/Project2-gunSAFE" target="_blank" rel="noreferrer">View Repository</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href="https://shielded-refuge-24199.herokuapp.com/" target="_blank" rel="noreferrer">
                                <img className="d-block w-100" src={TechBlog} alt="Third slide" />
                            </a>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Tech Blog</h5>
                                <p>MySQL/Sequelize/Express/Handlebars</p>
                                <a className="link-secondary" href="https://github.com/Alexva397/tech-blog" target="_blank" rel="noreferrer">View Repository</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a className="link-secondary" href="https://klay824.github.io/project-1/" target="_blank" rel="noreferrer">
                                <img className="d-block w-100" src={RonGH} alt="Ron's Grub Hub" />
                            </a>
                            <div className="carousel-caption mb-0 pb-0 d-none d-md-block">
                                <h5>Ron's Grub Hub</h5>
                                <p>jQuery/Materialize/3rd Party APIs</p>
                                <a href="https://github.com/klay824/project-1" target="_blank" rel="noreferrer">View repository</a>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="/#" data-bs-target="#project-carousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="/#" data-bs-target="#project-carousel" role="button" data-bs-slide="next">
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
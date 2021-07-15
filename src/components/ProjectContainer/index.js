import projectData from "./projectData";
import "./style.css";

const style = {
    captionFont: {
        fontSize: "1em",
    },
}

function ProjectContainer() {
    return (
        <>
            <div className="container tech-content pb-3">
                <h4 className="projects-title-text" id="projects">My Projects</h4>
                <div id="project-carousel" className="carousel slide p-0 mx-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {projectData.map(({ id, title, desc, tech, img, live, repo }) => {
                            return (
                                <div key={id} className={id === 1 ? "carousel-item active" : "carousel-item"}>
                                    <a href={live} target="_blank" rel="noreferrer">
                                        <img className="d-block w-100" src={img} alt={title} />
                                    </a>
                                    <div style={style.captionFont} className="carousel-caption d-none d-md-block">
                                        <h5>{title}</h5>
                                        <p>{desc}</p>
                                        <p>{tech}</p>
                                        <a href={repo} target="_blank" rel="noreferrer" className="caption-link">View Repository  |</a>
                                        <a href={live} target="_blank" rel="noreferrer" className="caption-link">  View App</a>
                                    </div>
                                </div>
                            );    
                        })}
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
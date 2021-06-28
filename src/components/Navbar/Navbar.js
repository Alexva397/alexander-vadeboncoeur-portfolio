import "./style.css";

function Navbar() {
    return (
        <div className="navbar-nav">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link mr-1" aria-current="page" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-1" aria-current="page"
                            href="https://docs.google.com/document/d/e/2PACX-1vTFl8dxiS8v8NETLPe86CPdI9a3yJ1Qfb3Kc2kYewDftoo933cIy-zYOeHDnQZFKTQSyPXv4AUxr3vd/pub"
                            target="_blank" rel="noreferrer">Resume</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Contact Me
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a className="dropdown-item" href="mailto:asvadeboncoeur@gmail.com">
                                    <i className="far fa-envelope"></i> <span className="contact-button">Email</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="https://github.com/Alexva397" target="_blank" rel="noreferrer">
                                    <i className="fab fa-github"></i> <span className="contact-button">GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="https://www.linkedin.com/in/alexander-vadeboncoeur-287039aa/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin"></i> <span className="contact-button">Linkedin</span>
                                </a>
                            </li>
                            <li><a className="dropdown-item" href="tel:+12148706893">+1 214-870-6893</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
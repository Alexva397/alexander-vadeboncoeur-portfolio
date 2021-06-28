import Title from "../Title/Title";
import Navbar from "../Navbar/Navbar";
import "./style.css";

function Header() {
    return (
        <header className="container-fluid p-3">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Title /> 
                <Navbar />
            </nav>
        </header>
    );
}

export default Header;
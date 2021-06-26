import Title from "./Title";
import Navbar from "./Navbar";

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
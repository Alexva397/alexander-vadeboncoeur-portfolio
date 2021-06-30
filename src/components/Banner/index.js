import ProfilePic from "../ProfilePic";
import AboutMe from "../AboutMe";
import "./style.css";

function Banner() {
    return (
        <div className="background-banner container-fluid">
            <ProfilePic />
            <AboutMe />
        </div>
    );
}

export default Banner;
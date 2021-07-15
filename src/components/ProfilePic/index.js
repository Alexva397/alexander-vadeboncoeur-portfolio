import Pic from "./images/profilepic.jpg";
import "./style.css";

function ProfilePic() {
    return (
        <section className="row justify-content-end mr-5">
            <div className="col-md-8 col-lg-4 mt-5 mr-5">
                <div className="profile-picture">
                    <img src={Pic} alt="Alex Vadeboncoeur" />
                </div>
            </div>
        </section>
    );
}

export default ProfilePic;
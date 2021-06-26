
function Banner() {
    return (
        <div className="background-banner container-fluid">
            <section className="row justify-content-end">
                <div className="col-md-8 col-lg-4 mt-5">
                    <div className="profile-picture">
                        <img src="./assets/images/profilepic.jpg" alt="Alex Vadeboncoeur" />
                    </div>
                </div>
            </section>
            <section className="row justify-content-start m-4">
                <div className="about-me col-lg-6 col-md-12 mb-5">
                    <h3 className="section-title-text">About Me</h3>
                    <div className="px-2">
                        <p className="about-me-body text-center p-3">I am a full-stack web developer with a passion for
                            learning new skills and problem solving. I enjoy taking on new challanges and creating
                            unique and interactive applications. I have a background as a service technician and have 3
                            years service/retail management experience. Feel free and reach out to connect, collaberate,
                            and learn more!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Banner;
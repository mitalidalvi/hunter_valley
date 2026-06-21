import Button from "../components/Button";
import Image from "next/image";
import aboutBg from "../../../public/imgs/about-bg.jpg"
import aboutPicture from "../../../public/imgs/about.jpg"

export default function About() {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-sec">
                    <Image src={aboutBg} width={300} height={450} alt="About Us Image" className="about-image" />
                    <div className="about-content">
                        <p className="about-para">
                            To be the first venue in the world to have <span>60 multi surface courts</span> at one location and establish first one stop tennis academy 
                            in the Asia Pacific producing grand slam champions.
                        </p>
                    </div>
                    <div className="about-multi-sec">
                        <div className="about-multi-content">
                            <ul className="about-multi-list">
                                <li>About Us</li>
                                <li>Coaches</li>
                                <li>Vision</li>
                                <li>Mission</li>
                            </ul>
                        </div>
                        <div className="about-secondary-content">
                            <div className="about-secondary-left">
                                <h2>About Us</h2>
                                <p>
                                    To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.
                                </p>
                                <div className="about-counting">
                                    <div className="counting-item">
                                        <h3>20</h3>
                                        <p>courts</p>
                                    </div>
                                    <div className="counting-item">
                                        <h3>12</h3>
                                        <p>coaches</p>
                                    </div>
                                    <div className="counting-item">
                                        <h3>17</h3>
                                        <p>years</p>
                                    </div>
                                    <div className="counting-item">
                                        <h3>10</h3>
                                        <p>clubs</p>
                                    </div>
                                </div>
                                <Button title="Read More" />
                            </div>
                            <div className="about-secondary-right">
                                <Image src={aboutPicture} width={500} height={454} alt="About Us Image" className="about-image1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
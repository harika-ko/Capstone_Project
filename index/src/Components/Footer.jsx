import { Container } from "react-bootstrap";
import { Linkedin, Facebook, Instagram, Pinterest, Twitter, Youtube } from "react-bootstrap-icons";
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div style={{ backgroundColor: "#D8F0E6" }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem" }}>
                    <Container fluid className="footer-cont">
                        <h1 className="footer-main-head">Food<span className="mood-text">Mood</span></h1>
                        <section className="ft-main">
                            <div className="ft-main-list">
                                <h2 className="ft-title">About Us</h2>
                                <ul>
                                    <li>
                                        <a href="#" className="ft-link">Who We are</a>
                                    </li>
                                    <li>
                                        <a href="#" className="ft-link">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#" className="ft-link">Investor Relations</a>
                                    </li>
                                    <li>
                                        <a href="#" className="ft-link">Report Fraud</a>
                                    </li>
                                    <li>
                                        <a href="#" className="ft-link">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="ft-main-list">
                                <h2 className="ft-title">FoodVerse</h2>
                                <ul>
                                    <li>
                                        <a href="#" className="ft-link">FoodMood</a>
                                    </li>
                                    <li>
                                        <a href="#" className="ft-link">HyperPure</a>
                                    </li>
                                    <li>
                                        <a href="#" className="ft-link">FoodMoodLand</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="ft-main-list">
                                <h2 className="ft-title">For Enterprises</h2>
                                <ul>
                                    <li>
                                        <a href="#" className="ft-link">FoodMood For Work</a>
                                    </li>
                                    <li>
                                        <a href="#" className="ft-link">Partner With Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="ft-main-list">
                                <h2 className="ft-title">Learn More</h2>
                                <ul>
                                    <li>
                                        <a href="#" className="ft-link">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="ft-link">Security</a>
                                    </li>
                                    <li>
                                        <a href="#" className="ft-link">Terms</a>
                                    </li>
                                    <li>
                                        <a href="#" className="ft-link">Sitemap</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="ft-main-list">
                                <h2 className="ft-title">Social Links</h2>
                                <ul className="ft-social-list">
                                    <li>
                                        <a href="#" className="ft-link">
                                            <Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="ft-link">
                                            <Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="ft-link">
                                            <Instagram />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="ft-link">
                                            <Youtube />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="ft-link">
                                            <Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="ft-link">
                                            <Pinterest />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section className="ft-copyright">
                            <p>&copy; 2022 Copyright FoodMood GMBH</p>
                        </section>
                    </Container>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
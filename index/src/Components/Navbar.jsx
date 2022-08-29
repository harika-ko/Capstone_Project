import { Navbar, Nav, Form, Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';
import Searchbar from "./Searchbar";
import "../css/Navbar.css";
import { BoxArrowRight } from "react-bootstrap-icons";
import fire from "../fire";

const NavBar = () => {

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const location = useLocation()

    return (
        <Container fluid className="px-0 cont-style">
            <Row>
                <Col>
                    <Navbar expand="lg" className="main-nav" >
                        <Navbar.Brand href="/HomePageFinal" className="heading">Food<span style={{ color: "#34B267" }}>Mood</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto text-size" >
                                <Link to="/MealPlanning" className="Link">
                                    <div
                                        className={
                                            location.pathname === '/DailyMealPlan' ? 'nav-link active' : 'nav-link'
                                        }
                                    >Meal Planning</div>
                                </Link>

                                <Link to="/whats_in_my_fridge" className="Link">
                                    <div className={
                                        location.pathname === '/whats_in_my_fridge' ? 'nav-link active' : 'nav-link'
                                    }>What's in my fridge</div>
                                </Link>

                                <Link to='/Wine_Pairing' className="Link">
                                    <div className={
                                        location.pathname === '/Wine_Pairing' ? 'nav-link active' : 'nav-link'
                                    }>Wine Pairing</div>
                                </Link>

                                <Link to='/favourites' className="Link">
                                    <div className={
                                        location.pathname === '/favourites' ? 'nav-link active' : 'nav-link'
                                    }>My Favorites</div>
                                </Link>

                                <Link to='/ImageUpload' className="Link">
                                    <div className={
                                        location.pathname === '/ImageUpload' ? 'nav-link active' : 'nav-link'
                                    }>Image Upload</div>
                                </Link>
                            </Nav>
                            <div style={{ display: "flex", gap: "0.7rem", alignItems: "center" }}>
                                <Form inline>
                                    <Searchbar />
                                </Form>
                                <div className="logout-div">
                                    <BoxArrowRight onClick={handleLogout} />
                                </div>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container >

    )
}

export default NavBar

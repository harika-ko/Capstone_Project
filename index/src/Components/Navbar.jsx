import { Navbar, Nav, Form, Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';
import Searchbar from "./Searchbar";
import "../css/Navbar.css";
import { CaretDownFill } from "react-bootstrap-icons";
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
                        <Navbar.Brand href="/HomePageFinal" className="heading">Food<span style={{ color: "#34B267", fontWeight: "bold" }}>Mood</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto text-size" >
                                <Link to="/MealPlanning" className="nav-data">
                                    <div
                                        className={
                                            location.pathname === '/DailyMealPlan' ? 'nav-link active underline' : 'nav-link'
                                        }
                                    >Meal Planning</div>
                                </Link>

                                <Link to="/whats_in_my_fridge" className="nav-data">
                                    <div className={
                                        location.pathname === '/whats_in_my_fridge' ? 'nav-link active underline' : 'nav-link'
                                    }>What's in my fridge</div>
                                </Link>

                                <Link to='/Wine_Pairing' className="nav-data">
                                    <div className={
                                        location.pathname === '/Wine_Pairing' ? 'nav-link active underline' : 'nav-link'
                                    }>Wine Pairing</div>
                                </Link>
                            </Nav>
                            <div style={{ display: "flex", gap: "0.7rem", alignItems: "center" }}>
                                <Form inline>
                                    <Searchbar />
                                </Form>


                                <div className="dropdown">
                                    <CaretDownFill />
                                    <div className="dropdown-content">
                                        <a href="/Account">My Profile</a>
                                        <a href="/favourites">My Favorites</a>
                                        <a href="/" onClick={handleLogout}>Sign Out</a>
                                    </div>
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

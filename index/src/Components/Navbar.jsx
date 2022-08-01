import { Navbar, Nav, Form, Container, Row, Col } from "react-bootstrap"
import { Link, useLocation } from 'react-router-dom'
import Searchbar from "./Searchbar"
import "./css/Navbar.css"

const NavBar = () => {

    const location = useLocation()

    return (
        <Container fluid className="px-0 container-style">
            <Row>
                <Col>
                    <Navbar expand="lg" className="main-nav" >
                        <Navbar.Brand href="/HomePageFinal" className="heading">Food<span style={{ color: "#34B267" }}>Mood</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto text-size" >
                                <Link to="/MealPlanning">
                                    <div
                                        className={
                                            location.pathname === '/MealPlanning' ? 'nav-link active' : 'nav-link'
                                        }
                                    >Meal Planning</div>
                                </Link>
                                <Link to="/whats_in_my_fridge">
                                    <div className={
                                        location.pathname === '/whats_in_my_fridge' ? 'nav-link active' : 'nav-link'
                                    }>What's in my fridge</div>
                                </Link>

                                <Link to='/favourites'>
                                    <div className={
                                        location.pathname === '/favourites' ? 'nav-link active' : 'nav-link'
                                    }>My Favorites</div>
                                </Link>

                                <Link to='/Shop_By_Recipe'>
                                    <div className={
                                        location.pathname === '/Shop_By_Recipe' ? 'nav-link active' : 'nav-link'
                                    }>Shop By Recipe</div>
                                </Link>

                            </Nav>
                            <Form inline>
                                <Searchbar />
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container >

    )
}

export default NavBar

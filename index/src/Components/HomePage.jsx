import { Navbar, Nav, Form, Container, Row, Col } from "react-bootstrap"
import { Link, useLocation } from 'react-router-dom'
import Searchbar from "./Searchbar"

function HomePage() {

    const location = useLocation()

    return (
        <Container fluid className="px-0" style={{ overflow: "hidden" }}>
            <Row>
                <Col>
                    <Navbar expand="lg" style={{ backgroundColor: "#D8F0E6" }}>
                        <Navbar.Brand href="#home" style={{ marginLeft: "1rem", fontSize: "2rem" }}>Food<span style={{ color: "#34B267" }}>Ora</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" style={{ fontSize: "1.4rem" }} >
                                <Link to="/SingleRecipe">
                                    <div
                                        className={
                                            location.pathname === '/SingleRecipe' ? 'nav-link active' : 'nav-link'
                                        }
                                    >Recipes</div>
                                </Link>

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
                                <Nav.Link href="#link">My Favorites</Nav.Link>
                            </Nav>
                            <Form inline>
                                <Searchbar />

                                {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button> */}
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container >

    )
}

export default HomePage

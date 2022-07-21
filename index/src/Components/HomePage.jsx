import { Navbar, Nav, Form, Button, FormControl, Container, Row, Col } from "react-bootstrap"

function HomePage() {
    return (
        <Container fluid className="px-0" style={{ overflow: "hidden" }}>
            <Row>
                <Col>
                    <Navbar expand="lg" style={{ backgroundColor: "#D8F0E6" }}>
                        <Navbar.Brand href="#home" style={{ marginLeft: "1rem" }}>Food<span style={{ color: "#34B267" }}>Ora</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Recipes</Nav.Link>
                                <Nav.Link href="#link">Meal Planning</Nav.Link>
                                <Nav.Link href="#link">My Favorites</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>

    )
}

export default HomePage

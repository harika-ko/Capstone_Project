import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function MainPage() {

    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: ""
    })

    const submitHandler = (e) => {
        setDetails(e.target.value)
    }

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/HomePageFinal')
    }


    return (
        <div style={{ backgroundColor: "#D8F0E6" }}>
            <div style={{ paddingTop: "3.5rem", paddingBottom: "3.2rem" }}>
                <Container style={{ backgroundColor: "white", borderRadius: "1rem" }}>
                    <Row xs={12}>
                        <Col style={{ marginLeft: "2.5rem", marginTop: "1rem", marginBottom: "2.5rem" }}>
                            <h1 style={{ fontFamily: "Helvetica Neue", fontWeight: "bold" }}>Food<span style={{ color: "#34B267" }}>Ora</span></h1>
                            <h1 style={{ fontFamily: "sansSerif" }} className="mt-4">No.1 Platform <br />For All Food <br />Related Content</h1>
                            <p>Want to cook yummy recipes which are also healthy? </p>
                            <p>No need to worry!</p>

                            <Form onSubmit={submitHandler}>
                                <div>
                                    <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name}
                                        style={{ width: "20rem" }} />
                                </div>
                                <div style={{ marginTop: "1rem" }}>
                                    <Form.Label style={{ fontWeight: "bold" }}>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email}
                                        style={{ width: "20rem" }} />
                                </div>
                                <div style={{ marginTop: "0.7rem" }}>
                                    <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}
                                        style={{ width: "20rem" }} />
                                </div>
                                <div style={{ marginTop: "0.9rem" }}>
                                    <Button style={{ backgroundColor: "#35B066", border: "none", marginRight: "2rem" }}>Register</Button>
                                    <Button style={{ backgroundColor: "#35B066", border: "none" }} onClick={goToHomePage}>Login</Button>

                                </div>
                            </Form>
                        </Col>
                        <Image src="https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?k=20&m=1190330112&s=612x612&w=0&h=_TrmthJupdqYmMU-NC-es85TEvaBJsynDS383hqiAvM=" style={{
                            height: "500px",
                            width: "500px",
                            overflow: "hidden",
                            marginRight: "1rem"
                        }}></Image>
                    </Row>
                </Container>
            </div>
        </div >
    )
}


export default MainPage
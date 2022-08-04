import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../css/Mainpage.css"

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
        <div className="hero">
            <div className="main">
                <Container className="main-container">
                    <Row xs={12}>
                        <Col className="col-style">
                            <h1 className="main-heading">Food<span style={{ color: "#34B267" }}>Mood</span></h1>
                            <h1 style={{ fontFamily: "sansSerif" }} className="mt-4">No.1 Platform <br />For All Food <br />Related Content</h1>
                            <p>Want to cook yummy recipes which are also healthy? </p>
                            <p>No need to worry!</p>

                            <Form onSubmit={submitHandler}>
                                <div>
                                    <Form.Label className="form-label" >Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name}
                                        className="form-control" />
                                </div>
                                <div style={{ marginTop: "1rem" }}>
                                    <Form.Label className="form-label" >Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email}
                                        className="form-control" />
                                </div>
                                <div style={{ marginTop: "0.7rem" }}>
                                    <Form.Label className="form-label">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}
                                        className="form-control" />
                                </div>
                                <div style={{ marginTop: "0.9rem" }}>
                                    <Button className="register-button" >Register</Button>
                                    <Button className="login-button" onClick={goToHomePage}>Login</Button>

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
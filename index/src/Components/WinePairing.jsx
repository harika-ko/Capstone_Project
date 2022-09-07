import { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import winepic from '../Assets/wine.jpg';
import wine2 from '../Assets/wine2.jpg';
import wine3 from '../Assets/wine3.jpg';
import wine5 from '../Assets/wine5.jpg';
import "../css/WinePairing.css"

const WinePairing = () => {

    const [wine, setWine] = useState([])
    const [food, setFood] = useState([])
    const [text, setText] = useState("")
    const [hasfood, setHasFood] = useState(false)

    function handleChange(e) {
        setFood(e.target.value)
    }

    useEffect(() => {
        fetchWine();
    }, []);

    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const fetchWine = async () => {
        let response = await fetch(
            `https://api.spoonacular.com/food/wine/pairing?food=${food}&apiKey=efa6acc08dd640f298c7d189883b3fbb`,
            options
        );
        let responseData = await response.json();
        console.log("This is Wine pairing get console", responseData);
        setWine(responseData.pairedWines)
        setText(responseData.pairingText)
    }

    return (
        <>


            <div class="first-cont">
                <div className="second_container">
                    <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem", paddingBottom: "1rem" }}>
                        <Row>
                            <Col>
                                <div style={{ display: "flex" }}>
                                    <div xs={6}>
                                        <h1 style={{ textAlign: "center", color: "#34B267" }}>Wine Pairing</h1>
                                        <h4 className="sub-head">Find a wine that goes well with a food.<br></br>
                                            Food can be a Dish name, an Ingredient name, or a Cuisine!
                                        </h4>

                                        <div>
                                            <Form style={{ marginTop: "2rem", textAlign: "center" }}>
                                                <div style={{ display: "flex", justifyContent: "center" }}>
                                                    <Form.Label style={{ fontWeight: "bold", fontSize: "1.3rem", marginRight: "1rem" }}>Enter the Food</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter the food here" onChange={handleChange} className="input-text"
                                                        style={{ width: "13rem" }} />
                                                </div>
                                                <Button variant="success" style={{ backgroundColor: "#35B066", border: "none", marginTop: "1rem" }} onClick={() => { fetchWine(); setHasFood(true); }}>Get Suggestions</Button>
                                            </Form>
                                        </div>
                                    </div>
                                    <div xs={6}>
                                        <Image src={winepic}
                                            style={{ height: "20rem", width: "20rem", marginLeft: "7rem" }} className="winepic" />
                                    </div>
                                </div>

                                <Container>
                                    <Row>
                                        {hasfood ? (
                                            <Col className="result-container">
                                                <h4 className="head1">Wine Suggestions for {food}</h4>
                                                <div className="wine-text-list" style={{ display: "flex", justifyContent: "space-evenly", marginTop: "2rem" }}>
                                                    {wine && wine.map((wine) => (
                                                        <>
                                                            <p className="list">{wine}</p>
                                                        </>
                                                    ))}
                                                </div>
                                                <div className="wine-images" style={{ display: "flex", justifyContent: "space-evenly" }}>
                                                    <img src={wine2} alt="wine pic" className="wine1" />
                                                    <img src={wine3} alt="wine pic" className="wine1" />
                                                    <img src={wine5} alt="wine pic" className="wine1" />
                                                </div>

                                                <h4 className="head-des"> Description </h4>
                                                <p className="para-des">{text}</p>
                                            </Col>) : ("")
                                        }
                                    </Row>
                                </Container>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        </>
    )
}

export default WinePairing
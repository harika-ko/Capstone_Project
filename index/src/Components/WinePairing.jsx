import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import "./css/WinePairing.css"

const WinePairing = () => {

    const [wine, setWine] = useState([])
    const [food, setFood] = useState([])
    const [text, setText] = useState("")
    const [matchpro, setMatchPro] = useState([])
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
        setMatchPro(responseData.productMatches[0])
        console.log(matchpro)
    }

    return (
        <>


            <div style={{ backgroundColor: "#D8F0E6" }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem", paddingBottom: "2rem", paddingTop: "2rem" }}>
                    <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem", paddingBottom: "2rem" }}>
                        <Row>
                            <Col xs={12}>

                                <h1 style={{ textAlign: "center", color: "#34B267" }}>Wine Pairing</h1>

                                <h4>Find a wine that goes well with a food.
                                    Food can be a Dish name, an Ingredient name, or a Cuisine!</h4>
                                <Form style={{ marginTop: "2rem", textAlign: "center" }}>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <Form.Label style={{ fontWeight: "bold", fontSize: "1.3rem", marginRight: "1rem" }}>Enter the Food</Form.Label>
                                        <Form.Control type="text" placeholder="" onChange={handleChange}
                                            style={{ width: "13rem" }} />
                                    </div>
                                    <Button style={{ backgroundColor: "#35B066", border: "none", marginTop: "1rem" }} onClick={() => { fetchWine(); setHasFood(true); }}>Get Suggestions</Button>
                                </Form>


                                <Container>
                                    <Row>
                                        {hasfood ? (
                                            <Col className="result-container">
                                                <h5 className="head1">Wine Suggestions for {food}</h5>
                                                {wine && wine.map((wine) => (
                                                    <div className="cont">
                                                        <ul className="list-container">
                                                            <li className="list">{wine} </li>
                                                        </ul>
                                                    </div>
                                                ))}
                                                < h5 className="head1"> Description </h5>
                                                <p className="list">{text}</p>
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
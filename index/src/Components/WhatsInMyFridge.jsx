import { useState, useEffect } from "react"
import { Form, Button, Container, Card, Col, Row, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import fridge from '../Assets/fridge.png'
import '../css/WhatsInMyFridge.css'


const WhatsInMyFridge = () => {
    const [recipes, setRecipes] = useState([])
    const [ingredients, setIngredients] = useState([])


    const navigate = useNavigate()

    useEffect(() => {
        fetchRecipes();
    }, []);


    function handleChange(e) {
        setIngredients(e.target.value)
    }

    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const fetchRecipes = async () => {
        let response = await fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=9&apiKey=efa6acc08dd640f298c7d189883b3fbb`,
            options
        );
        let responseData = await response.json();
        console.log("This is what is in my fridge get console", responseData);
        setRecipes(responseData)
    }


    return (
        <>
            <div className="first_div_cont">
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem", paddingBottom: "2rem", paddingTop: "2rem" }}>
                    <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem", paddingBottom: "2rem" }}>
                        <Row>
                            <Col>
                                <div style={{ display: "flex" }}>
                                    <div>

                                        <h1 style={{ textAlign: "center", color: "#34B267" }}>Get Recipes with Ingredients Available!</h1>
                                        <h4 style={{ textAlign: "center", marginTop: "2rem" }}>List all the Ingredients available in your fridge right now<br></br>
                                            and get new recipes to make! </h4>
                                        <Form style={{ marginTop: "2rem", textAlign: "center" }}>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <Form.Label style={{ fontWeight: "bold", fontSize: "1.3rem", marginRight: "1rem" }}>Enter the Ingredients</Form.Label>
                                                <Form.Control type="text" placeholder="" onChange={handleChange}
                                                    style={{ width: "13rem" }} />
                                            </div>
                                            <Button variant="success" style={{ backgroundColor: "#35B066", border: "none", marginTop: "1rem" }} onClick={fetchRecipes}>Get Recipes</Button>
                                        </Form>

                                    </div>

                                    <div>

                                        <Image src={fridge} style={{ height: "25rem", width: "20rem" }} />
                                    </div>
                                </div>
                                <Container>
                                    <Row>
                                        {recipes.map((recipe) => {
                                            if (recipe.missedIngredientCount <= 2) {
                                                return (
                                                    <>
                                                        <Col sm={4} key={recipe.id} style={{ marginTop: "4rem" }} >
                                                            <Card className="card_style">
                                                                <Card.Img variant="top" src={recipe.image} className="image_style" alt="Food Image" />
                                                                <Card.Body className="card_body">
                                                                    <h4 className="card_title">{recipe.title}</h4>
                                                                    <hr></hr>
                                                                    <Card.Text className="card_text">
                                                                        <h5 style={{ marginTop: "2rem" }}>Used Ingredients</h5>
                                                                        {recipe.usedIngredients.map((used) => (
                                                                            <p>{used.name} - {used.amount} {used.unit}</p>
                                                                        ))}

                                                                        <h5>You might also need</h5>
                                                                        {recipe.missedIngredients.map((miss) => (
                                                                            <p>{miss.name} - {miss.amount} {miss.unit}</p>

                                                                        ))}
                                                                        <p>and More....</p>

                                                                    </Card.Text>
                                                                </Card.Body>
                                                                <div className="div_button_style">
                                                                    <Button variant="success" className="button_style" onClick={() => navigate(`/SingleRecipe/${recipe.id}`)}>View Detailed Recipe</Button>
                                                                </div>
                                                            </Card>
                                                        </Col>
                                                    </>
                                                )
                                            }
                                        })}
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

export default WhatsInMyFridge
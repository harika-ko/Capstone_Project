import { useState, useEffect } from "react"
import { Form, Button, Container, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

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
            <div style={{ backgroundColor: "#D8F0E6" }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem", paddingBottom: "2rem", paddingTop: "2rem" }}>
                    <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem", paddingBottom: "2rem" }}>
                        <Row>
                            <Col xs={12}>

                                <h1 style={{ textAlign: "center", color: "#34B267" }}>Get Recipes with Ingredients available!</h1>

                                <Form style={{ marginTop: "2rem", textAlign: "center" }}>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <Form.Label style={{ fontWeight: "bold", fontSize: "1.3rem", marginRight: "1rem" }}>Enter the Ingredients</Form.Label>
                                        <Form.Control type="text" placeholder="" onChange={handleChange}
                                            style={{ width: "13rem" }} />
                                    </div>
                                    <Button style={{ backgroundColor: "#35B066", border: "none", marginTop: "1rem" }} onClick={fetchRecipes}>Get Recipes</Button>
                                </Form>


                                <Container>
                                    <Row xs={12}>
                                        {recipes.map((recipe) => {
                                            if (recipe.missedIngredientCount <= 2) {
                                                return (
                                                    <>
                                                        <Col key={recipe.id} style={{ marginTop: "2rem" }} >

                                                            <Card style={{ width: '18rem' }}>
                                                                <Card.Img variant="top" src={recipe.image} />
                                                                <Card.Body>
                                                                    <Card.Title>{recipe.title}</Card.Title>
                                                                    <Card.Text>
                                                                        <p>Used Ingredients Count: {recipe.usedIngredientCount}</p>
                                                                        <h6>Used Ingredients</h6>
                                                                        {recipe.usedIngredients.map((used) => (
                                                                            <p>{used.name} - {used.amount} {used.unit}</p>
                                                                        ))}
                                                                        <h6>You might also need</h6>
                                                                        {recipe.missedIngredients.map((miss) => (
                                                                            <p>{miss.name} - {miss.amount} {miss.unit}</p>

                                                                        ))}
                                                                        <p>and More....</p>
                                                                    </Card.Text>
                                                                    <Button style={{ backgroundColor: "#35B066", border: "none" }} onClick={() => navigate(`/SingleRecipe/${recipe.id}`)}>View Detailed Recipe</Button>
                                                                </Card.Body>
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
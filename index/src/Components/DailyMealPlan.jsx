import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const DailyMealPlan = () => {

    const [mealData, setMealData] = useState([])
    const [nutrients, setNutrients] = useState({})
    const [calories, setCalories] = useState(2000)

    function handleChange(e) {
        setCalories(e.target.value)
    }

    useEffect(() => {
        fetchMealPlanning();
    }, []);


    const fetchMealPlanning = async () => {
        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        let response = await fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=574529b6be2b4eec9565bc838355ae9a&timeFrame=day&targetCalories=${calories}`,
            options
        );
        let responseData = await response.json();
        let mealsWithImages = responseData.meals.map((meal) => ({ ...meal, imageUrl: `https://spoonacular.com/recipeImages/${meal.id}-312x231.${meal.imageType}` }))
        console.log("This is Meal Planning get console", responseData);
        setMealData(mealsWithImages);
        setNutrients(responseData.nutrients);
    };



    return (
        <>
            <div style={{ backgroundColor: "#D8F0E6" }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem" }}>
                    <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem" }}>
                        <Row>
                            <Col xs={12}>
                                <h1 style={{ fontFamily: "Helvetica Neue", textAlign: "center", color: "#34B267" }}>Do your Daily Meal Plan here! </h1>

                                <Form style={{ marginTop: "2rem", textAlign: "center" }}>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <Form.Label style={{ fontWeight: "bold", fontSize: "1.3rem", marginRight: "1rem" }}>Enter Calories for a day</Form.Label>
                                        <Form.Control type="number" placeholder="Calories (e.g. 2000)" onChange={handleChange}
                                            style={{ width: "13rem" }} />
                                    </div>
                                    <Button style={{ backgroundColor: "#35B066", border: "none", marginTop: "1rem" }} onClick={() => {
                                        fetchMealPlanning();

                                    }}>Get Daily Meal Plan</Button>

                                </Form>

                                <Container>
                                    <Row xs={12}>
                                        {mealData.map((meal) => (
                                            <>
                                                <Col key={meal.id} style={{ marginTop: "2rem" }} >


                                                    <Card style={{ width: '18rem', height: '28rem' }}>
                                                        <Card.Img variant="top" src={meal.imageUrl} alt="Food Image" />
                                                        <Card.Body>
                                                            <Card.Title>{meal.title}</Card.Title>
                                                            <Card.Text>
                                                                Preparation Time: {meal.readyInMinutes} minutes
                                                            </Card.Text>
                                                            <Card.Text>
                                                                No of Servings: {meal.servings}
                                                            </Card.Text>
                                                            <a href={meal.sourceUrl} style={{
                                                                backgroundColor: "#35B066", border: "none", color: "white"
                                                                , padding: "0.4rem"
                                                            }} target="_blank">View Recipe</a>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </>
                                        ))}
                                    </Row>
                                </Container>
                                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                                    <h4 style={{ color: "#35B066" }}>Total Amount of Nutrients you gain in a Day according to the Meal Plan</h4>
                                    <p style={{ marginTop: "1rem" }}><b>Calories</b>: {nutrients.calories}</p>
                                    <p><b>Proteins</b>: {nutrients.protein}</p>
                                    <p><b>Fat</b>: {nutrients.fat}</p>
                                    <p><b>Carbohydrates</b>: {nutrients.carbohydrates}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )

}

export default DailyMealPlan
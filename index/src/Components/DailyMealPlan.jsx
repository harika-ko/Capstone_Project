import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";

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

    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };


    const fetchMealPlanning = async () => {

        let response = await fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=b26a2f3b0a00495588fc37298906d486&timeFrame=day&targetCalories=${calories}`,
            options
        );
        let responseData = await response.json();
        console.log("This is Meal Planning get console", responseData);
        setMealData(responseData.meals);
        setNutrients(responseData.nutrients);
    };

    return (
        <>
            <div style={{ backgroundColor: "#D8F0E6" }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem" }}>
                    <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem" }}>
                        <Row>
                            <Col xs={12}>
                                <h1 style={{ fontFamily: "Helvetica Neue", textAlign: "center" }}>Do your Daily Meal Plan here! </h1>

                                <Form style={{ marginTop: "2rem", textAlign: "center" }}>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <Form.Label style={{ fontWeight: "bold", fontSize: "1.3rem", marginRight: "1rem" }}>Enter Calories for day</Form.Label>
                                        <Form.Control type="number" placeholder="Calories (e.g. 2000)" onChange={handleChange}
                                            style={{ width: "13rem" }} />
                                    </div>
                                    <Button style={{ backgroundColor: "#35B066", border: "none", marginTop: "1rem" }} onClick={fetchMealPlanning}>Get Daily Meal Plan</Button>
                                </Form>

                                <Container>
                                    <Row>
                                        {mealData.map((meal) => (
                                            <>

                                                <Col key={meal.id} style={{ marginTop: "2rem" }}>
                                                    <h5 className="card-title">{meal.title}</h5>
                                                    <p className="card-text"> Preparation Time: {meal.readyInMinutes} minutes</p>
                                                    <p className="card-text"> No of Servings: {meal.servings} </p>
                                                    <a href={meal.sourceUrl} className="btn btn-primary" target="_blank">View Recipe</a>

                                                </Col>

                                            </>
                                        ))}
                                    </Row>
                                </Container>
                                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                                    <h4>Nutrients you gain for the Day</h4>
                                    <p>Calories: {nutrients.calories}</p>
                                    <p>Proteins: {nutrients.protein}</p>
                                    <p>Fat: {nutrients.fat}</p>
                                    <p>Carbohydrates: {nutrients.carbohydrates}</p>
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
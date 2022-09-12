import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Image } from "react-bootstrap";
import { Clock, Person } from 'react-bootstrap-icons';
import calory from "../Assets/calories.png";
import proteins from "../Assets/proteins.png";
import fats from "../Assets/trans-fat.png";
import carbo from "../Assets/bread.png";
import '../css/DailyMealPlan.css';

const DailyMealPlan = () => {

    const [mealData, setMealData] = useState([])
    const [nutrients, setNutrients] = useState({})
    const [calories, setCalories] = useState(2000)
    const [food, setFood] = useState(false)

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
            <div className='daily_main-cont' style={{ backgroundColor: "#D8F0E6" }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem" }}>
                    <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem" }}>
                        <Row>
                            <Col>
                                <h1 style={{ textAlign: "center", color: "#34B267" }}>Do your Daily Meal Plan here! </h1>

                                <Form style={{ marginTop: "2rem", textAlign: "center" }}>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <Form.Label style={{ fontWeight: "bold", fontSize: "1.3rem", marginRight: "1rem" }}>Enter Calories for a day</Form.Label>
                                        <Form.Control type="number" placeholder="Calories (e.g. 2000)" onChange={handleChange}
                                            style={{ width: "13rem" }} />
                                    </div>
                                    <Button className="daily-button" variant="success" onClick={() => {
                                        fetchMealPlanning();
                                        setFood(true);
                                    }}>Get Daily Meal Plan</Button>

                                </Form>

                                <Container>
                                    <Row>
                                        {food && mealData.map((meal) => (
                                            <>
                                                <Col sm={12} md={4} key={meal.id} style={{ marginTop: "5rem" }} >
                                                    <Card className="card-style">
                                                        <Card.Img variant="top" src={meal.imageUrl} className="image" alt="Food Image" />
                                                        <Card.Body className="card-body">
                                                            <Card.Title className="title">{meal.title}</Card.Title>
                                                            <hr></hr>
                                                            <div className="inner-class">
                                                                <div>
                                                                    <Clock className="clock" />
                                                                    <p className="para">Time</p>
                                                                    <h6>{meal.readyInMinutes} mins</h6>
                                                                </div>
                                                                <div>
                                                                    <Person className="person" />
                                                                    <p className="portion">Portion</p>
                                                                    <h6>{meal.servings} persons</h6>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                        <div class="button-div">
                                                            <a href={meal.sourceUrl} className="button" target="_blank">View Detailed Recipe</a>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            </>
                                        ))}
                                    </Row>
                                </Container>

                                {food ? (
                                    <div className="nutrients-div">
                                        <h4 style={{ color: "#35B066" }}>Total Amount of Nutrients Gained in a Day</h4>
                                        <div className="calory-div">
                                            <Image src={calory} alt="calories pic" className="calory" />
                                            <p className="calory-text"><b>Calories</b>: {nutrients.calories}</p>
                                        </div>
                                        <div className="protein-div">
                                            <Image src={proteins} alt="proteins pic" className="proteins" />
                                            <p className="protein-text"><b>Proteins</b>: {nutrients.protein}</p>
                                        </div>
                                        <div className="fat-div">
                                            <Image src={fats} alt="fat pic" className="fat" />
                                            <p className="fat-text"><b>Fat</b>: {nutrients.fat}</p>
                                        </div>
                                        <div className="dflex carbo-div">
                                            <Image src={carbo} alt="carbohydrates pic" className="carbo" />
                                            <p className="carbo-text"><b>Carbohydrates</b>: {nutrients.carbohydrates}</p>
                                        </div>
                                    </div>) : ("")
                                }
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )

}

export default DailyMealPlan
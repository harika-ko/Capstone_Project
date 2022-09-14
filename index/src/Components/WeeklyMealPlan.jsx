import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Clock, Person } from 'react-bootstrap-icons';
import '../css/WeeklyMealPlan.css'

const WeeklyMealPlan = () => {

    const [monday, setMonday] = useState([])
    const [tuesday, setTuesday] = useState([])
    const [wednesday, setWednesday] = useState([])
    const [thursday, setThursday] = useState([])
    const [friday, setFriday] = useState([])
    const [saturday, setSaturday] = useState([])
    const [sunday, setSunday] = useState([])

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
            `https://api.spoonacular.com/mealplanner/generate?apiKey=7d037e2e5e7c41b28f796eb9af1c7522&timeFrame=week`,
            options
        );
        let responseData = await response.json();
        console.log("This is Weekly Meal Planning get console", responseData);
        let mondayimages = responseData.week.monday.meals.map((mondaymeal) => ({ ...mondaymeal, imageUrl: `https://spoonacular.com/recipeImages/${mondaymeal.id}-312x231.${mondaymeal.imageType}` }))
        setMonday(mondayimages)
        let tuesdayimages = responseData.week.tuesday.meals.map((tuesdaymeal) => ({ ...tuesdaymeal, imageUrl: `https://spoonacular.com/recipeImages/${tuesdaymeal.id}-312x231.${tuesdaymeal.imageType}` }))
        setTuesday(tuesdayimages)
        let wednesdayimages = responseData.week.wednesday.meals.map((wednesdaymeal) => ({ ...wednesdaymeal, imageUrl: `https://spoonacular.com/recipeImages/${wednesdaymeal.id}-312x231.${wednesdaymeal.imageType}` }))
        setWednesday(wednesdayimages)
        let thursdayimages = responseData.week.thursday.meals.map((thursdaymeal) => ({ ...thursdaymeal, imageUrl: `https://spoonacular.com/recipeImages/${thursdaymeal.id}-312x231.${thursdaymeal.imageType}` }))
        setThursday(thursdayimages)
        let fridayimages = responseData.week.friday.meals.map((fridaymeal) => ({ ...fridaymeal, imageUrl: `https://spoonacular.com/recipeImages/${fridaymeal.id}-312x231.${fridaymeal.imageType}` }))
        setFriday(fridayimages)
        let saturdayimages = responseData.week.saturday.meals.map((saturdaymeal) => ({ ...saturdaymeal, imageUrl: `https://spoonacular.com/recipeImages/${saturdaymeal.id}-312x231.${saturdaymeal.imageType}` }))
        setSaturday(saturdayimages)
        let sundayimages = responseData.week.sunday.meals.map((sundaymeal) => ({ ...sundaymeal, imageUrl: `https://spoonacular.com/recipeImages/${sundaymeal.id}-312x231.${sundaymeal.imageType}` }))
        setSunday(sundayimages)
    };



    return (
        <>
            <div className="main-sec">
                <div className="section-2">
                    <Container className="container-style">
                        <Row>
                            <Col>
                                <div class="head-class">
                                    <h1 className="main-headingg">Your Weekly Meal Plan is here! </h1>
                                    <Button variant="success" className="weekly-button" onClick={fetchMealPlanning}>Generate New Plan</Button>
                                </div>

                                <div>
                                    <h2 className="week-day">Monday</h2>
                                </div>

                                <Container>
                                    <Row>
                                        {monday.map((mondaymeal) => (
                                            <>
                                                <Col md={4} key={mondaymeal.id}>
                                                    <Card className="style-card">
                                                        <Card.Img variant="top" src={mondaymeal.imageUrl} className="card-image" alt="Food Image" />
                                                        <Card.Body className="body-card">
                                                            <Card.Title className="card-title">{mondaymeal.title}</Card.Title>
                                                            <hr></hr>
                                                            <div className="class-inner">
                                                                <div>
                                                                    <Clock className="clock" />
                                                                    <p className="paragraph">Time</p>
                                                                    <h6>{mondaymeal.readyInMinutes} mins</h6>
                                                                </div>
                                                                <div>
                                                                    <Person className="person" />
                                                                    <p className="people-portion">Portion</p>
                                                                    <h6>{mondaymeal.servings} people</h6>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                        <div class="div-button">
                                                            <a href={mondaymeal.sourceUrl} className="recipe-button" target="_blank">View Detailed Recipe</a>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            </>
                                        ))}
                                    </Row>
                                </Container>



                                <div>
                                    <h2 className="week-day">Tuesday</h2>
                                </div>

                                <Container>
                                    <Row>
                                        {tuesday.map((tuesdaymeal) => (
                                            <>
                                                <Col md={4} key={tuesdaymeal.id}>
                                                    <Card className="style-card">
                                                        <Card.Img variant="top" src={tuesdaymeal.imageUrl} className="card-image" alt="Food Image" />
                                                        <Card.Body className="body-card">
                                                            <Card.Title className="card-title">{tuesdaymeal.title}</Card.Title>
                                                            <hr></hr>
                                                            <div className="class-inner">
                                                                <div>
                                                                    <Clock className="clock" />
                                                                    <p className="paragraph">Time</p>
                                                                    <h6>{tuesdaymeal.readyInMinutes} mins</h6>
                                                                </div>
                                                                <div>
                                                                    <Person className="person" />
                                                                    <p className="people-portion">Portion</p>
                                                                    <h6>{tuesdaymeal.servings} people</h6>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                        <div class="div-button">
                                                            <a href={tuesdaymeal.sourceUrl} className="recipe-button" target="_blank">View Detailed Recipe</a>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            </>
                                        ))}
                                    </Row>
                                </Container>




                                <div>
                                    <h2 className="week-day">Wednesday</h2>
                                </div>

                                <Container>
                                    <Row>
                                        {wednesday.map((wednesdaymeal) => (
                                            <>
                                                <Col md={4} key={wednesdaymeal.id}>
                                                    <Card className="style-card">
                                                        <Card.Img variant="top" src={wednesdaymeal.imageUrl} className="card-image" alt="Food Image" />
                                                        <Card.Body className="body-card">
                                                            <Card.Title className="card-title">{wednesdaymeal.title}</Card.Title>
                                                            <hr></hr>
                                                            <div className="class-inner">
                                                                <div>
                                                                    <Clock className="clock" />
                                                                    <p className="paragraph">Time</p>
                                                                    <h6>{wednesdaymeal.readyInMinutes} mins</h6>
                                                                </div>
                                                                <div>
                                                                    <Person className="person" />
                                                                    <p className="people-portion">Portion</p>
                                                                    <h6>{wednesdaymeal.servings} people</h6>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                        <div class="div-button">
                                                            <a href={wednesdaymeal.sourceUrl} className="recipe-button" target="_blank">View Detailed Recipe</a>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            </>
                                        ))}
                                    </Row>
                                </Container>




                                <div>
                                    <h2 className="week-day">Thursday</h2>
                                </div>

                                <Container>
                                    <Row>
                                        {thursday.map((thursdaymeal) => (
                                            <>
                                                <Col md={4} key={thursdaymeal.id}>
                                                    <Card className="style-card">
                                                        <Card.Img variant="top" src={thursdaymeal.imageUrl} className="card-image" alt="Food Image" />
                                                        <Card.Body className="body-card">
                                                            <Card.Title className="card-title">{thursdaymeal.title}</Card.Title>
                                                            <hr></hr>
                                                            <div className="class-inner">
                                                                <div>
                                                                    <Clock className="clock" />
                                                                    <p className="paragraph">Time</p>
                                                                    <h6>{thursdaymeal.readyInMinutes} mins</h6>
                                                                </div>
                                                                <div>
                                                                    <Person className="person" />
                                                                    <p className="people-portion">Portion</p>
                                                                    <h6>{thursdaymeal.servings} people</h6>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                        <div class="div-button">
                                                            <a href={thursdaymeal.sourceUrl} className="recipe-button" target="_blank">View Detailed Recipe</a>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            </>
                                        ))}
                                    </Row>
                                </Container>



                                <div>
                                    <h2 className="week-day">Friday</h2>
                                </div>

                                <Container>
                                    <Row>
                                        {friday.map((fridaymeal) => (
                                            <>
                                                <Col md={4} key={fridaymeal.id}>
                                                    <Card className="style-card">
                                                        <Card.Img variant="top" src={fridaymeal.imageUrl} className="card-image" alt="Food Image" />
                                                        <Card.Body className="body-card">
                                                            <Card.Title className="card-title">{fridaymeal.title}</Card.Title>
                                                            <hr></hr>
                                                            <div className="class-inner">
                                                                <div>
                                                                    <Clock className="clock" />
                                                                    <p className="paragraph">Time</p>
                                                                    <h6>{fridaymeal.readyInMinutes} mins</h6>
                                                                </div>
                                                                <div>
                                                                    <Person className="person" />
                                                                    <p className="people-portion">Portion</p>
                                                                    <h6>{fridaymeal.servings} people</h6>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                        <div class="div-button">
                                                            <a href={fridaymeal.sourceUrl} className="recipe-button" target="_blank">View Detailed Recipe</a>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            </>
                                        ))}
                                    </Row>
                                </Container>




                                <div>
                                    <h2 className="week-day">Saturday</h2>
                                </div>

                                <Container>
                                    <Row>
                                        {saturday.map((saturdaymeal) => (
                                            <>
                                                <Col md={4} key={saturdaymeal.id}>
                                                    <Card className="style-card">
                                                        <Card.Img variant="top" src={saturdaymeal.imageUrl} className="card-image" alt="Food Image" />
                                                        <Card.Body className="body-card">
                                                            <Card.Title className="card-title">{saturdaymeal.title}</Card.Title>
                                                            <hr></hr>
                                                            <div className="class-inner">
                                                                <div>
                                                                    <Clock className="clock" />
                                                                    <p className="paragraph">Time</p>
                                                                    <h6>{saturdaymeal.readyInMinutes} mins</h6>
                                                                </div>
                                                                <div>
                                                                    <Person className="person" />
                                                                    <p className="people-portion">Portion</p>
                                                                    <h6>{saturdaymeal.servings} people</h6>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                        <div class="div-button">
                                                            <a href={saturdaymeal.sourceUrl} className="recipe-button" target="_blank">View Detailed Recipe</a>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            </>
                                        ))}
                                    </Row>
                                </Container>



                                <div>
                                    <h2 className="week-day">Sunday</h2>
                                </div>


                                <Container>
                                    <Row>
                                        {sunday.map((sundaymeal) => (
                                            <>
                                                <Col md={4} key={sundaymeal.id}>
                                                    <Card className="style-card">
                                                        <Card.Img variant="top" src={sundaymeal.imageUrl} className="card-image" alt="Food Image" />
                                                        <Card.Body className="body-card">
                                                            <Card.Title className="card-title">{sundaymeal.title}</Card.Title>
                                                            <hr></hr>
                                                            <div className="class-inner">
                                                                <div>
                                                                    <Clock className="clock" />
                                                                    <p className="paragraph">Time</p>
                                                                    <h6>{sundaymeal.readyInMinutes} mins</h6>
                                                                </div>
                                                                <div>
                                                                    <Person className="person" />
                                                                    <p className="people-portion">Portion</p>
                                                                    <h6>{sundaymeal.servings} people</h6>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                        <div class="div-button">
                                                            <a href={sundaymeal.sourceUrl} className="recipe-button" target="_blank">View Detailed Recipe</a>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            </>
                                        ))}
                                    </Row>
                                </Container >


                            </Col>
                        </Row>
                    </Container>
                </div >
            </div >
        </>
    )
}

export default WeeklyMealPlan
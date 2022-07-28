import { Container, Row, Col, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'

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
            `https://api.spoonacular.com/mealplanner/generate?apiKey=574529b6be2b4eec9565bc838355ae9a&timeFrame=week`,
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
            <div style={{ backgroundColor: "#D8F0E6" }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem", paddingBottom: "2rem", paddingTop: "2rem" }}>
                    <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem", paddingBottom: "2rem" }}>
                        <Row>
                            <Col xs={12}>
                                <h1 style={{ fontFamily: "Helvetica Neue", textAlign: "center", color: "#34B267" }}>Your Weekly Meal Plan is here! </h1>
                                <div>
                                    <div>
                                        <h3>Monday</h3>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        {monday.map((mondaymeal) => (
                                            <>

                                                <Card style={{ width: '18rem', height: '28rem' }}>
                                                    <Card.Img variant="top" src={mondaymeal.imageUrl} alt="Food Image" />
                                                    <Card.Body>
                                                        <Card.Title>{mondaymeal.title}</Card.Title>
                                                        <Card.Text>
                                                            Preparation Time: {mondaymeal.readyInMinutes} minutes
                                                        </Card.Text>
                                                        <Card.Text>
                                                            No of Servings: {mondaymeal.servings}
                                                        </Card.Text>
                                                        <a href={mondaymeal.sourceUrl} style={{
                                                            backgroundColor: "#35B066", border: "none", color: "white"
                                                            , padding: "0.4rem"
                                                        }} target="_blank">View Recipe</a>
                                                    </Card.Body>
                                                </Card>

                                            </>
                                        ))}
                                    </div>
                                </div>


                                <div>
                                    <div>
                                        <h3>Tuesday</h3>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        {tuesday.map((tuesdaymeal) => (
                                            <>

                                                <Card style={{ width: '18rem', height: '28rem' }}>
                                                    <Card.Img variant="top" src={tuesdaymeal.imageUrl} alt="Food Image" />
                                                    <Card.Body>
                                                        <Card.Title>{tuesdaymeal.title}</Card.Title>
                                                        <Card.Text>
                                                            Preparation Time: {tuesdaymeal.readyInMinutes} minutes
                                                        </Card.Text>
                                                        <Card.Text>
                                                            No of Servings: {tuesdaymeal.servings}
                                                        </Card.Text>
                                                        <a href={tuesdaymeal.sourceUrl} style={{
                                                            backgroundColor: "#35B066", border: "none", color: "white"
                                                            , padding: "0.4rem"
                                                        }} target="_blank">View Recipe</a>
                                                    </Card.Body>
                                                </Card>

                                            </>
                                        ))}
                                    </div>
                                </div>



                                <div>
                                    <div>
                                        <h3>Wednesday</h3>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        {wednesday.map((wednesdaymeal) => (
                                            <>

                                                <Card style={{ width: '18rem', height: '28rem' }}>
                                                    <Card.Img variant="top" src={wednesdaymeal.imageUrl} alt="Food Image" />
                                                    <Card.Body>
                                                        <Card.Title>{wednesdaymeal.title}</Card.Title>
                                                        <Card.Text>
                                                            Preparation Time: {wednesdaymeal.readyInMinutes} minutes
                                                        </Card.Text>
                                                        <Card.Text>
                                                            No of Servings: {wednesdaymeal.servings}
                                                        </Card.Text>
                                                        <a href={wednesdaymeal.sourceUrl} style={{
                                                            backgroundColor: "#35B066", border: "none", color: "white"
                                                            , padding: "0.4rem"
                                                        }} target="_blank">View Recipe</a>
                                                    </Card.Body>
                                                </Card>

                                            </>
                                        ))}
                                    </div>
                                </div>



                                <div>
                                    <div>
                                        <h3>Thursday</h3>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        {thursday.map((thursdaymeal) => (
                                            <>

                                                <Card style={{ width: '18rem', height: '28rem' }}>
                                                    <Card.Img variant="top" src={thursdaymeal.imageUrl} alt="Food Image" />
                                                    <Card.Body>
                                                        <Card.Title>{thursdaymeal.title}</Card.Title>
                                                        <Card.Text>
                                                            Preparation Time: {thursdaymeal.readyInMinutes} minutes
                                                        </Card.Text>
                                                        <Card.Text>
                                                            No of Servings: {thursdaymeal.servings}
                                                        </Card.Text>
                                                        <a href={thursdaymeal.sourceUrl} style={{
                                                            backgroundColor: "#35B066", border: "none", color: "white"
                                                            , padding: "0.4rem"
                                                        }} target="_blank">View Recipe</a>
                                                    </Card.Body>
                                                </Card>

                                            </>
                                        ))}
                                    </div>
                                </div>


                                <div>
                                    <div>
                                        <h3>Friday</h3>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        {friday.map((fridaymeal) => (
                                            <>

                                                <Card style={{ width: '18rem', height: '28rem' }}>
                                                    <Card.Img variant="top" src={fridaymeal.imageUrl} alt="Food Image" />
                                                    <Card.Body>
                                                        <Card.Title>{fridaymeal.title}</Card.Title>
                                                        <Card.Text>
                                                            Preparation Time: {fridaymeal.readyInMinutes} minutes
                                                        </Card.Text>
                                                        <Card.Text>
                                                            No of Servings: {fridaymeal.servings}
                                                        </Card.Text>
                                                        <a href={fridaymeal.sourceUrl} style={{
                                                            backgroundColor: "#35B066", border: "none", color: "white"
                                                            , padding: "0.4rem"
                                                        }} target="_blank">View Recipe</a>
                                                    </Card.Body>
                                                </Card>

                                            </>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <h3>Saturday</h3>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        {saturday.map((saturdaymeal) => (
                                            <>

                                                <Card style={{ width: '18rem', height: '28rem' }}>
                                                    <Card.Img variant="top" src={saturdaymeal.imageUrl} alt="Food Image" />
                                                    <Card.Body>
                                                        <Card.Title>{saturdaymeal.title}</Card.Title>
                                                        <Card.Text>
                                                            Preparation Time: {saturdaymeal.readyInMinutes} minutes
                                                        </Card.Text>
                                                        <Card.Text>
                                                            No of Servings: {saturdaymeal.servings}
                                                        </Card.Text>
                                                        <a href={saturdaymeal.sourceUrl} style={{
                                                            backgroundColor: "#35B066", border: "none", color: "white"
                                                            , padding: "0.4rem"
                                                        }} target="_blank">View Recipe</a>
                                                    </Card.Body>
                                                </Card>

                                            </>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <h3>Sunday</h3>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        {sunday.map((sundaymeal) => (
                                            <>

                                                <Card style={{ width: '18rem', height: '28rem' }}>
                                                    <Card.Img variant="top" src={sundaymeal.imageUrl} alt="Food Image" />
                                                    <Card.Body>
                                                        <Card.Title>{sundaymeal.title}</Card.Title>
                                                        <Card.Text>
                                                            Preparation Time: {sundaymeal.readyInMinutes} minutes
                                                        </Card.Text>
                                                        <Card.Text>
                                                            No of Servings: {sundaymeal.servings}
                                                        </Card.Text>
                                                        <a href={sundaymeal.sourceUrl} style={{
                                                            backgroundColor: "#35B066", border: "none", color: "white"
                                                            , padding: "0.4rem"
                                                        }} target="_blank">View Recipe</a>
                                                    </Card.Body>
                                                </Card>

                                            </>
                                        ))}
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default WeeklyMealPlan
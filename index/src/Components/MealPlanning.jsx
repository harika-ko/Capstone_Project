import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MealPlanning = () => {

    const navigate = useNavigate()

    const goToDailyMealPlanPage = () => {
        navigate('/DailyMealPlan')
    }

    const goToWeeklyMealPlanPage = () => {
        navigate('/WeeklyMealPlan')
    }

    return (
        <>
            <div style={{ backgroundColor: "#D8F0E6" }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem", paddingTop: "5.5rem", paddingBottom: "6.5rem" }}>
                    <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem", paddingBottom: "2rem" }}>
                        <h1 style={{ fontFamily: "Helvetica Neue", color: "#34B267", textAlign: "center" }}>Do your Meal Planning here!</h1>
                        <Row>
                            <Col xs={12}>
                                <div style={{ display: "flex", marginTop: "3rem", marginLeft: "3rem" }}>
                                    <div>
                                        <Image src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" alt="Food Image"
                                            style={{ height: "20rem", width: "100%", objectFit: "cover", borderRadius: "1rem" }} onClick={goToDailyMealPlanPage} />
                                        <h5 style={{ marginTop: "1rem", textAlign: "center" }}>Plan your Meal for a whole <span style={{ color: "#34B267" }}>DAY</span> here</h5>
                                        <p>(Enter the number of Calories and get you day meal plan within that)</p>
                                    </div>

                                    <div style={{ marginLeft: "2rem" }}>
                                        <Image src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Food picture"
                                            style={{ height: "20rem", width: "100%", objectFit: "cover", borderRadius: "1rem" }} onClick={goToWeeklyMealPlanPage} />
                                        <h5 style={{ marginTop: "1rem", textAlign: "center" }}>Plan your Meal for a whole <span style={{ color: "#34B267" }}>WEEK</span> here.</h5>
                                        <p>(Get a Random Meal Plan generated for your whole week and enjoy it)</p>
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

export default MealPlanning
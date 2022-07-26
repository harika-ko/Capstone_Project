import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MealPlanning = () => {

    const navigate = useNavigate()

    const goToDailyMealPlanPage = () => {
        navigate('/DailyMealPlan')
    }

    return (
        <>
            <div style={{ backgroundColor: "#D8F0E6" }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem" }}>
                    <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem" }}>
                        <h1 style={{ fontFamily: "Helvetica Neue", color: "#34B267", textAlign: "center" }}>Do your Meal Planning here!</h1>
                        <Row>

                            <div style={{ display: "flex", marginTop: "3rem", marginLeft: "8rem" }}>
                                <Col xs={6}>
                                    <div  >
                                        <Image src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" alt="Food Image"
                                            style={{ height: "20rem", width: "20rem" }} onClick={goToDailyMealPlanPage} />
                                        <p>Plan your Meal for a day within specific calories you want.</p>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div style={{ marginLeft: "5rem" }}>
                                        <Image src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Food picture"
                                            style={{ height: "20rem", width: "20rem" }} />
                                        <p>Plan your Meal for a whole week here.</p>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default MealPlanning
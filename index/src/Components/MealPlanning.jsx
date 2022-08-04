import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../css/MealPlanning.css'

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
            <div className="hero">
                <div className="main-section">
                    <Container className="container">
                        <h1 className="main-heading">Do your Meal Planning here!</h1>
                        <Row>

                            <div className="div-1">
                                <Col md={6}>
                                    <div className="content-img">
                                        <div class="image1" onClick={goToDailyMealPlanPage}></div>
                                        <p className="text">CLICK HERE</p>
                                        <h5 className="head1">Plan your Meal for a whole <span style={{ color: "#34B267" }}>DAY</span> here</h5>
                                        <p className="paragraph">Enter the number of Calories and get your day meal plan within that</p>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="content-img-2" >
                                        <div class="image2" onClick={goToWeeklyMealPlanPage}></div>
                                        <p className="text2">CLICK HERE</p>
                                        <h5 className="head1">Plan your Meal for a whole <span style={{ color: "#34B267" }}>WEEK</span> here.</h5>
                                        <p className="paragraph">Get a Random Meal Plan generated for your whole week and enjoy it</p>
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
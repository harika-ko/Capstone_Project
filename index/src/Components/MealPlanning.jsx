import { Container, Row, Col } from 'react-bootstrap'
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
                        <Row className="row_cont">
                            <div className="div-1">
                                <Col sm={6}>
                                    <div className="content-img">
                                        <div class="image1" onClick={goToDailyMealPlanPage}></div>
                                        <p className="text">CLICK HERE</p>
                                        <h5 className="head1">DAILY MEAL PLAN</h5>
                                        <p className="parag">Enter the number of Calories and get your day meal plan within that</p>
                                    </div>
                                </Col>

                                <Col sm={6}>
                                    <div className="content-img-2" >
                                        <div class="image2" onClick={goToWeeklyMealPlanPage}></div>
                                        <p className="text2">CLICK HERE</p>
                                        <h5 className="head1">RANDOM WEEKLY MEAL PLAN</h5>
                                        <p className="parag">Get a Random Meal Plan generated for your whole week and enjoy it</p>
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
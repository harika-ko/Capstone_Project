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
                                        <div className="content_text">
                                            <h5 className="head1" onClick={goToDailyMealPlanPage}>DAILY MEAL PLAN</h5>
                                            <p className="parag">Enter the number of Calories and get your meal plan for a day</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col sm={6}>
                                    <div className="content-img-2" >
                                        <div class="image2" onClick={goToWeeklyMealPlanPage}></div>
                                        <div className='content_text'>
                                            <h5 className="head1" onClick={goToWeeklyMealPlanPage}>RANDOM WEEKLY MEAL PLAN</h5>
                                            <p className="parag">Get a Random Meal Plan generated for your whole week here</p>
                                        </div>
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
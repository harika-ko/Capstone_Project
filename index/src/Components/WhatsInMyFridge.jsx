import { useState, useEffect } from "react";
import { Form, Button, Container, Card, Col, Row, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import fridge from '../Assets/fridge.png';
import '../css/WhatsInMyFridge.css';
import swal from 'sweetalert';


const WhatsInMyFridge = () => {
    const [recipes, setRecipes] = useState([])
    const [ingredients, setIngredients] = useState([])


    const navigate = useNavigate()

    useEffect(() => {
        fetchRecipes();
    }, []);

    const handleClick = () => {
        if (ingredients.length === 0) {
            swal({
                title: "OOPS!",
                text: "Input Ingredients cannot be blank...",
                icon: "error",
                dangerMode: true,
            });
        }
    }


    function handleChange(e) {
        setIngredients(e.target.value)
    }

    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const fetchRecipes = async () => {
        let response = await fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=9&apiKey=f63cf5b7f4494e8d8820acbd1d0700f3`,
            options
        );
        let responseData = await response.json();
        console.log("This is what is in my fridge get console", responseData);
        setRecipes(responseData)
    }


    return (
        <>
            <div className="first_div_cont">
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem", paddingBottom: "2rem", paddingTop: "2rem" }}>
                    <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem", paddingBottom: "2rem" }}>
                        <Row>
                            <Col>
                                <div style={{ display: "flex" }}>
                                    <div class="fridge-text-div">

                                        <h1 style={{ color: "#34B267" }}>What's in my Fridge?</h1>
                                        <h4 style={{ marginTop: "2rem", fontSize: "1.4rem" }}>List all the Ingredients available in your fridge right now<br></br>
                                            and get new recipes to make! </h4>
                                        <Form style={{ marginTop: "2rem" }}>
                                            <div className="fridge-form-div">
                                                <Form.Label style={{ fontWeight: "bold", fontSize: "1.3rem", marginRight: "1rem" }}>Enter the Ingredients</Form.Label>
                                            </div>
                                            <div style={{ display: "flex" }} >
                                                <Form.Control type="text" placeholder="Enter items seperated with Comma (,)" onChange={handleChange}
                                                    style={{ width: "15rem" }} />
                                                <Button variant="success" className="fridge-button" onClick={() => { fetchRecipes(); handleClick(); }}>Get Recipes</Button>
                                            </div>

                                        </Form>

                                    </div>

                                    <div>

                                        <Image src={fridge} style={{ height: "25rem", width: "20rem", marginLeft: "8rem" }} className='fridge_pic' />
                                    </div>
                                </div>
                                <Container>
                                    <Row>
                                        {recipes.map((recipe) => {
                                            if (recipe.missedIngredientCount <= 2) {
                                                return (
                                                    <>
                                                        <Col md={4} key={recipe.id} style={{ marginTop: "4rem" }} >
                                                            <Card className="card_style">
                                                                <Card.Img variant="top" src={recipe.image} className="image_style" alt="Food Image" />
                                                                <Card.Body className="card_body">
                                                                    <h4 className="card_title">{recipe.title}</h4>
                                                                    <hr></hr>
                                                                    <Card.Text className="card_text">
                                                                        <h5 style={{ marginTop: "2rem" }}>Used Ingredients</h5>
                                                                        {recipe.usedIngredients.map((used) => (
                                                                            <p>{used.name} - {used.amount} {used.unit}</p>
                                                                        ))}

                                                                        <h5>You might also need</h5>
                                                                        {recipe.missedIngredients.map((miss) => (
                                                                            <p>{miss.name} - {miss.amount} {miss.unit}</p>

                                                                        ))}
                                                                        <p>and More....</p>

                                                                    </Card.Text>
                                                                </Card.Body>
                                                                <div className="div_button_style">
                                                                    <Button variant="success" className="button_style" onClick={() => navigate(`/SingleRecipe/${recipe.id}`)}>View Detailed Recipe</Button>
                                                                </div>
                                                            </Card>
                                                        </Col>
                                                    </>
                                                )
                                            }
                                        })}
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default WhatsInMyFridge
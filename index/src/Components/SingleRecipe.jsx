import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Col, Row, Image } from 'react-bootstrap'
import Searchbar from './Searchbar'
import MealPlanning from "./MealPlanning";



const SingleRecipe = () => {

    const [singlerecipe, setSingleRecipe] = useState({})

    const [instructions, setInstructions] = useState([])

    const [ingredients, setIngredients] = useState([])

    const params = useParams();
    const id = params.id;


    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const key = "efa6acc08dd640f298c7d189883b3fbb"

    useEffect(() => {
        fetchSingleRecipe();
    }, []);

    const fetchSingleRecipe = async () => {

        let response = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=192717ff7b47486faf8af662e370d037`,
            options
        );
        let responseData = await response.json();
        console.log("This is Single Recipe get console", responseData);
        let stepsinstructions = responseData.analyzedInstructions[0]
        setSingleRecipe(responseData);
        setInstructions(stepsinstructions.steps)
        setIngredients(responseData.extendedIngredients)
    };



    return (
        <>
            <div style={{ backgroundColor: "#D8F0E6" }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem" }}>
                    <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem" }}>
                        <h1 style={{ fontFamily: "Helvetica Neue" }}>Recipe Details</h1>
                        <Row>
                            {singlerecipe && (
                                <>
                                    <Col md={6}>
                                        <div style={{ display: "flex" }}>
                                            <div>
                                                <p style={{ fontWeight: "Bold", textTransform: "capitalize", color: "#35B066" }}>{singlerecipe.dishTypes}</p>
                                                <h3 style={{ fontFamily: "Helvetica Neue" }}>{singlerecipe.title}</h3>
                                                <h5 style={{ marginTop: "1.8rem", marginBottom: "1.8rem" }}>Method</h5>
                                                {instructions.map(step => (
                                                    <p>{step.number}. {step.step}</p>
                                                ))}

                                            </div>
                                            <div>
                                                <Image src={singlerecipe.image} style={{ height: "13rem", width: "13rem", borderRadius: "50%" }} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div style={{ backgroundColor: "#D8F0E6", borderRadius: "1rem", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                            <div style={{ marginLeft: "1rem" }}>
                                                <h4>Ingredients</h4>
                                                <p>(Serves {singlerecipe.servings} people)</p>
                                                {ingredients.map((ingredient) => (
                                                    <p>{ingredient.name} - {ingredient.amount} {ingredient.unit}</p>

                                                ))}
                                            </div>
                                        </div>
                                    </Col>
                                </>
                            )}
                        </Row>
                    </Container>
                    <div style={{ visibility: "hidden" }}>
                        <Searchbar id={id} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default SingleRecipe
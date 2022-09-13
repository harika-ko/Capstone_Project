import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Col, Row, Image } from 'react-bootstrap'
import Searchbar from './Searchbar'
import { addFavourite, removeFavourite } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Heart, HeartFill } from "react-bootstrap-icons";
import "../css/SingleRecipe.css";


const SingleRecipe = () => {

    const [singlerecipe, setSingleRecipe] = useState({})

    const favourites = useSelector((state) => state.favourites);

    const dispatch = useDispatch();

    const isFav = favourites.includes(singlerecipe);
    const toggleFavourite = () => {
        isFav
            ? dispatch(removeFavourite(singlerecipe))
            : dispatch(addFavourite(singlerecipe));
    };



    const [instructions, setInstructions] = useState([])

    const [ingredients, setIngredients] = useState([])

    const [dish, setDish] = useState([])

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
            `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=b26a2f3b0a00495588fc37298906d486`,
            options
        );
        let responseData = await response.json();
        console.log("This is Single Recipe get console", responseData);
        let stepsinstructions = responseData.analyzedInstructions[0]
        setSingleRecipe(responseData);
        setInstructions(stepsinstructions.steps)
        setIngredients(responseData.extendedIngredients)
        let dishes = responseData.dishTypes[0]
        setDish(dishes)
    };



    return (
        <>
            <div className="single-recipe-main-cont" style={{ backgroundColor: "#D8F0E6", minHeight: 'calc(100vh - 74px)' }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem", paddingTop: "2rem" }}>
                    <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem", paddingLeft: "3rem" }}>
                        <h1>Recipe Details</h1>
                        <Row>
                            {singlerecipe && (
                                <>
                                    <Col md={6} key={singlerecipe.id}>
                                        <div style={{ display: "flex" }}>
                                            <div>
                                                <p style={{
                                                    fontWeight: "Bold", textTransform: "capitalize", color: "#35B066",
                                                }}>{dish}</p>

                                                <h3 style={{ display: "inline" }}>{singlerecipe.title}</h3>
                                                <div style={{ display: "inline", marginLeft: "1rem" }}>
                                                    {isFav ? (
                                                        <HeartFill
                                                            color="red"
                                                            size={25}
                                                            className="me-4 my-auto"
                                                            onClick={toggleFavourite}

                                                        />
                                                    ) : (
                                                        <Heart
                                                            color="black"
                                                            size={25}
                                                            className="me-4 my-auto"
                                                            onClick={toggleFavourite}
                                                        />
                                                    )}
                                                </div>
                                                <h5 style={{ marginTop: "1.8rem", marginBottom: "1.8rem" }}>Method</h5>
                                                {instructions.map(step => (
                                                    <p>{step.number}. {step.step}</p>
                                                ))}

                                            </div>
                                            <div>
                                                <Image src={singlerecipe.image} style={{
                                                    height: "10rem", width: "10rem", borderRadius: "50%", border: "2px solid grey", objectFit: "cover"
                                                }} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div style={{ backgroundColor: "#D8F0E6", borderRadius: "1rem", paddingTop: "1rem", paddingBottom: "1rem", width: "25rem", marginLeft: "2.5rem" }}>
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
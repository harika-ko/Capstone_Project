import { useState, useEffect } from "react"
import { Card, Button } from 'react-bootstrap'

function HomePageContent() {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        let response = await fetch(
            "https://api.spoonacular.com/recipes/random?number=2&tags=vegetarian,dessert&apiKey=192717ff7b47486faf8af662e370d037",
            options
        );
        let responseData = await response.json();
        console.log("This is get console", responseData);
        setRecipes(responseData.recipes);
    };

    return (
        <div>
            <h2>Recipes you might like</h2>
            {recipes.map((recipe) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={recipe.image} />
                    <Card.Body>
                        <Card.Title>{recipe.title}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <Button variant="primary">Get Recipe</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default HomePageContent
import { useState, useEffect } from "react"
import { Form, Button } from 'react-bootstrap'

const WhatsInMyFridge = () => {
    const [recipes, setRecipes] = useState([])
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        fetchRecipes();
    }, []);


    function handleChange(e) {
        setIngredients(e.target.value)
    }

    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };



    const fetchRecipes = async (e) => {
        let response = await fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=2&apiKey=b26a2f3b0a00495588fc37298906d486`,
            options
        );
        let responseData = await response.json();
        console.log("This is what is in my fridge get console", responseData);
    }
    return (
        <>
            <h1>Get Recipes by giving ingredients available!</h1>

            <Form style={{ marginTop: "2rem", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Form.Label style={{ fontWeight: "bold", fontSize: "1.3rem", marginRight: "1rem" }}>Enter the Ingredients</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={handleChange}
                        style={{ width: "13rem" }} />
                </div>
                <Button style={{ backgroundColor: "#35B066", border: "none", marginTop: "1rem" }} onClick={fetchRecipes}>Get Recipes</Button>
            </Form>
        </>
    )
}

export default WhatsInMyFridge
import { useState, useEffect } from "react"
import { Container, Col, Row, Image } from 'react-bootstrap'
import { Heart } from "react-bootstrap-icons"
import { useNavigate } from 'react-router-dom'
import "./css/HomePageContent.css"

function HomePageContent() {

    const [popularrecipes, setPopularRecipes] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
        fetchPopularRecipes();
    }, []);

    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const key = "574529b6be2b4eec9565bc838355ae9a"

    const fetchPopularRecipes = async () => {

        let response = await fetch(
            "https://api.spoonacular.com/recipes/complexSearch?veryPopular=true&apiKey=" + key,
            options
        );
        let responseInfo = await response.json();
        console.log("This is popular get console", responseInfo);
        setPopularRecipes(responseInfo.results);
    };


    return (
        <>
            <div style={{ backgroundColor: "#D8F0E6" }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem" }}>
                    <Container fluid style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem", paddingBottom: "1rem" }}>
                        <Row>
                            <Col sm={2}>
                                <Image src="https://i.pinimg.com/564x/33/18/a1/3318a17fd65fece85966b4453bef69df.jpg" className="side-image" alt="image" />
                            </Col>

                            <Col sm={6}>
                                <div className="main-content">
                                    <h1 className="main-head">Let's Start Cooking Now!</h1>
                                    <h5 class="head2">Want to learn cooking but don't know how?<br />
                                        Explore recipes from a wide range of cuisines at FoodMood</h5>
                                    <h5 className="head3" style={{ marginTop: "3rem", color: "grey", textAlign: "center" }}>Want to eat Nutritious food?<br />
                                        No Problem, try our state of the art Meal Planner</h5>

                                    <div className="ratings-main-class">
                                        <div className="rating1">
                                            <div className="rating2">
                                                <div style={{ display: "flex" }}>
                                                    <div>
                                                        <Image src="https://takestwoeggs.com/wp-content/uploads/2021/04/Japanese-Fruit-sandwich-takes-two-eggs-asian-inspired-recipes-3-500x500.jpg"
                                                            className="img-style" alt="image" />
                                                    </div>
                                                    <div style={{ marginLeft: "0.5rem" }}>
                                                        <h6 style={{ fontSize: "0.8rem" }}>Fruit Sandwich</h6>
                                                        <div style={{ display: "flex" }}>
                                                            <Heart style={{ height: "1.4rem" }} />
                                                            <p style={{ marginLeft: "0.2rem", fontSize: "0.8rem" }}>123</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p style={{ fontSize: "0.8rem" }}>Bread, Strawberries, Jam, Orange<br /> Kiwi, Blueberries</p>
                                            </div>
                                        </div>


                                        <div className="rating1 rate">
                                            <div className="rating2">
                                                <div style={{ display: "flex" }}>
                                                    <div>
                                                        <Image src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F05%2F19%2F228553-MoistChocolateMuffins-mfs-1X1-0924.jpg"
                                                            className="img-style" alt="image" />
                                                    </div>
                                                    <div style={{ marginLeft: "0.5rem" }}>
                                                        <h6 style={{ fontSize: "0.8rem" }}>Chocolate Muffins</h6>
                                                        <div style={{ display: "flex" }}>
                                                            <Heart style={{ height: "1.4rem" }} />
                                                            <p style={{ marginLeft: "0.2rem", fontSize: "0.8rem" }}>178</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p style={{ fontSize: "0.8rem" }}>Eggs, Milk, Flour, Butter,<br /> Cocoa, Sugar, Chocolate chips</p>
                                            </div>
                                        </div>



                                        <div className="rating1 rate">
                                            <div className="rating2">
                                                <div style={{ display: "flex" }}>
                                                    <div>
                                                        <Image src="https://www.einfachbacken.de/sites/einfachbacken.de/files/styles/full_width_tablet_4_3/public/2020-08/american_pancakes.jpg?h=4521fff0&itok=yvzcMTED"
                                                            className="img-style" alt="image" />
                                                    </div>
                                                    <div style={{ marginLeft: "0.5rem" }}>
                                                        <h6 style={{ fontSize: "0.8rem" }}>Strawberry Pancakes</h6>
                                                        <div style={{ display: "flex" }}>
                                                            <Heart style={{ height: "1.4rem" }} />
                                                            <p style={{ marginLeft: "0.2rem", fontSize: "0.8rem" }}>143</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p style={{ fontSize: "0.8rem" }}>Eggs, Milk, Flour, Butter,<br /> Salt, Sugar, Strawberries</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <Image src="https://st3.depositphotos.com/1020618/15071/i/600/depositphotos_150716786-stock-photo-big-tasty-burger-with-flying.jpg"
                                    className="burger-image" alt="Burger Image" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>


            <div style={{ backgroundColor: "#D8F0E6" }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem" }}>
                    <Container fluid style={{ backgroundColor: "whitesmoke", borderRadius: "1rem", paddingTop: "1rem" }}>
                        <h1 className="ml-3" style={{ fontFamily: "sansSerif", marginBottom: "1.5rem", textAlign: "center" }}>Popular Food</h1>
                        <h5 style={{ marginTop: "1rem", color: "grey", textAlign: "center", marginBottom: "2rem" }}>We provide a variety of food and beverage recipes <br />
                            with high taste from famous chefs</h5>
                        <Row className="ml-0">
                            {popularrecipes.slice(1, 5).map((recipe) => (
                                <Col xs={12} md={3} key={recipe.id}>
                                    <Image src={recipe.image} alt="image" onClick={() => navigate(`/SingleRecipe/${recipe.id}`)} style={{
                                        borderRadius: "50%", height: "10rem", width: "10rem",
                                        objectFit: "cover"
                                    }} />
                                    {/* <p style={{ textAlign: "center" }}>{recipe.title}</p> */}
                                </Col>))}

                            {popularrecipes.slice(6, 10).map((recipes) => (
                                <Col xs={12} md={3} key={recipes.id}>
                                    <Image src={recipes.image} alt="image"
                                        onClick={() => navigate(`/SingleRecipe/${recipes.id}`)}
                                        style={{
                                            borderRadius: "50%", height: "10rem", width: "10rem",
                                            objectFit: "cover", marginTop: "2rem", marginLeft: "6rem", marginBottom: "2rem"
                                        }} />
                                    {/* <p style={{ marginBottom: "2rem", marginLeft: "1rem" }}>{recipes.title}</p> */}
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default HomePageContent
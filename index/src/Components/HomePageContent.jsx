import { useState, useEffect } from "react"
import { Card, Container, Col, Row, Carousel, CarouselItem } from 'react-bootstrap'
import { Clock, Heart } from "react-bootstrap-icons"
import { useNavigate } from 'react-router-dom'

function HomePageContent() {

    const [recipes, setRecipes] = useState([])

    const [popularrecipes, setPopularRecipes] = useState([])

    const navigate = useNavigate()


    /*  useEffect(() => {
         fetchRecipes();
          fetchPopularRecipes();
     }, []); */

    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const key = "192717ff7b47486faf8af662e370d037"

    /* const fetchRecipes = async () => {
 
         let response = await fetch(
             "https://api.spoonacular.com/recipes/random?number=4&tags=vegetarian,dessert&apiKey=" + key,
             options
         );
         let responseData = await response.json();
         console.log("This is get console", responseData);
         setRecipes(responseData.recipes);
     };
 
 
      const fetchPopularRecipes = async () => {
  
          let response = await fetch(
              "https://api.spoonacular.com/recipes/complexSearch?veryPopular=true&apiKey=" + key,
              options
          );
          let responseInfo = await response.json();
          console.log("This is popular get console", responseInfo);
          setPopularRecipes(responseInfo.results);
      }; */


    return (
        <>

            <div style={{ backgroundColor: "#D8F0E6" }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem" }}>
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block" style={{ overflow: "hidden", objectFit: "cover", height: "30rem", borderRadius: "1rem" }}
                                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).webp"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block" style={{ overflow: "hidden", objectFit: "cover", height: "30rem", borderRadius: "1rem" }}
                                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg"
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block" style={{ overflow: "hidden", objectFit: "cover", height: "30rem", borderRadius: "1rem" }}
                                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(86).jpg"
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div style={{ backgroundColor: "#D8F0E6" }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem" }}>
                    <Container fluid style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem" }}>
                        <h2 className="ml-3" style={{ color: "#35B066" }}>Recipes you might like</h2>
                        <Row className="ml-0">
                            {recipes.map((recipe) => (
                                <Col xs={12} lg={3} key={recipe.id}>
                                    <Card.Img src={recipe.image} style={{ height: "12rem", width: "17rem", overflow: "hidden", borderRadius: "1rem" }}
                                        onClick={() => navigate(`/SingleRecipe/${recipe.id}`)} />
                                    <div style={{
                                        marginLeft: "0.5rem"
                                    }}>
                                        <Clock />
                                        <p style={{ display: "inline", marginLeft: "0.5rem", marginRight: "7rem" }}>{recipe.readyInMinutes} MINUTES</p>
                                        <Heart />
                                        <h6 style={{
                                            marginTop: "0.5rem", width: '16rem',
                                            fontSize: '1.3rem', wordWrap: 'breakWord', fontFamily: "Times New Roman", fontWeight: "Bold"
                                        }}>{recipe.title}</h6>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>





            {/* <div style={{ backgroundColor: "#D8F0E6" }}>
                <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem" }}>
                    <Container fluid style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem" }}>
                        <h2 className="ml-3" style={{ color: "#35B066" }}>Popular Recipes</h2>
                        <Row className="ml-0">
                            {popularrecipes.slice(2, 6).map((recipe) => (
                                <Col md={3}>
                                    <Card.Img src={recipe.image} style={{ height: "12rem", width: "17rem", overflow: "hidden", borderRadius: "1rem" }}
                                        onClick={() => navigate(`/SingleRecipe/${recipe.id}`)} />
                                    <div>
                                        <Heart />
                                    </div>
                                    <h6 style={{
                                        marginTop: "0.5rem", width: '16rem',
                                        fontSize: '1.3rem', wordWrap: 'breakWord', fontFamily: "Times New Roman", fontWeight: "Bold"
                                    }}>{recipe.title}</h6>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </div> */}
        </>
    )


}

export default HomePageContent
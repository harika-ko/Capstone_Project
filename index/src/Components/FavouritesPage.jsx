import { Container, Row, Col, Image } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFavourite } from "../redux/actions";
import "../css/Favorites.css";

const FavouritesPage = () => {

    const favourites = useSelector((state) => state.favourites);

    const dispatch = useDispatch();
    return (
        <div className="main-favorites" style={{ backgroundColor: "#D8F0E6" }}>
            <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem", minHeight: "100vh", paddingBottom: "2rem" }}>
                <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem" }}>
                    <h1 style={{ textAlign: "center", color: "#35B066", marginBottom: "2rem" }}>My Favourite Recipes</h1>
                    <Row>
                        {favourites !== null &&
                            favourites.map((singlerecipe, i) => (
                                <>
                                    <Col md={6} key={i}>
                                        <div style={{
                                            backgroundColor: "whitesmoke", display: "flex", justifyContent: "space-around",
                                            padding: "1rem", borderRadius: "1rem", marginBottom: "2rem"
                                        }}>
                                            <div>
                                                <h4>{singlerecipe.title}</h4>
                                                <p>Health Score: {singlerecipe.healthScore}</p>
                                                <h5>Ready In {singlerecipe.readyInMinutes} mins</h5>
                                                <h5>For {singlerecipe.servings} people</h5>
                                            </div>

                                            <div>
                                                <Image src={singlerecipe.image} alt="image" style={{
                                                    borderRadius: "50%",
                                                    height: "8rem", width: "8rem", display: "block", marginTop: "1rem", objectFit: "cover"
                                                }}></Image>
                                            </div>
                                            <HeartFill
                                                color="red"
                                                onClick={() => dispatch(removeFavourite(singlerecipe))}
                                                style={{ height: "25px", width: "20px", top: "1rem", position: "absolute", right: "2rem" }}
                                            />
                                        </div>

                                    </Col>
                                </>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default FavouritesPage
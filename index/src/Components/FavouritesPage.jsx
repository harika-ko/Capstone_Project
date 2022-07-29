import { Container, Row, Col, Card } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFavourite } from "../redux/actions";

const FavouritesPage = () => {

    const favourites = useSelector((state) => state.favourites);

    const dispatch = useDispatch();
    return (
        <div style={{ backgroundColor: "#D8F0E6" }}>
            <div style={{ paddingLeft: "1.3rem", paddingRight: "1rem" }}>
                <Container style={{ backgroundColor: "white", borderRadius: "1rem", paddingTop: "1rem" }}>
                    <h1 style={{ fontFamily: "Helvetica Neue", textAlign: "center" }}>My Favourite Recipes</h1>
                    <Row>
                        {favourites !== null &&
                            favourites.map((singlerecipe, i) => (
                                <>
                                    <Col md={4} key={i}>
                                        <Card style={{ width: "18rem" }}>
                                            <Card.Img variant="top" src={singlerecipe.image} />
                                            <Card.Body>
                                                <Card.Title>{singlerecipe.title}</Card.Title>
                                                <Card.Text>
                                                    <HeartFill
                                                        color="red"
                                                        onClick={() => dispatch(removeFavourite(singlerecipe))}
                                                    />
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default FavouritesPage